import os
import time
import requests
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

# Hedef kategoriler ve arama terimleri
search_categories = {
    'pelus-oyuncak': ['Peluş Ayıcık', 'Peluş Tavşan', 'I Love You Ayıcık', 'Peluş Anahtarlık'],
    'taki-aksesuar': ['Gümüş Kolye', 'İnci Bileklik', 'Doğal Taş Yüzük', 'Altın Kaplama Küpe'],
    'susleme-hobi': ['Altın Yıldız Süs', 'Renkli İp Yumağı', 'El Yapımı Ahşap Çerçeve', 'Keten Kurdele'],
    'ambalaj-sunum': ['Kraft Hediye Kutusu', 'Renkli Kağıt Poşet', 'Süslü Şeffaf Kutu', 'Dekoratif Sepet'],
    'parti-etkinlik': ['Renkli Balon Seti', 'Parti Konfeti', 'Doğum Günü Parti Seti', 'Kağıt Tabak Bardak Seti'],
    'ev-yasam': ['Dekoratif Yastık Kılıfı', 'Dekoratif Mum Seti', 'El Yapımı Seramik Kase', 'Pamuklu Battaniye']
}

# Çıktı için klasör oluştur
def create_folder(path):
    if not os.path.exists(path):
        os.makedirs(path)

# Ürün verileri için ana klasör
output_folder = 'scraped_products'
create_folder(output_folder)
create_folder(f'{output_folder}/images')

# Selenium ayarları
def setup_driver():
    chrome_options = Options()
    chrome_options.add_argument("--headless")  # Headless modu (arayüz göstermeden çalışır)
    chrome_options.add_argument("--no-sandbox")
    chrome_options.add_argument("--disable-dev-shm-usage")
    chrome_options.add_argument("--disable-gpu")
    chrome_options.add_argument("--window-size=1920,1080")
    
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service, options=chrome_options)
    return driver

# Fotoğrafı kaydet
def download_image(url, category, product_name, index):
    try:
        if not url or url.startswith('data:'):
            return None
        
        # URL'deki dosya uzantısını al
        file_extension = os.path.splitext(url.split('?')[0])[1]
        if not file_extension:
            file_extension = '.jpg'  # Uzantı yoksa varsayılan .jpg kullan
        
        # Dosya adını oluştur
        safe_product_name = product_name.replace(' ', '_').replace('/', '-').lower()
        filename = f"{safe_product_name}_{index}{file_extension}"
        filepath = os.path.join(output_folder, 'images', filename)
        
        # İndir ve kaydet
        response = requests.get(url, stream=True, timeout=10)
        response.raise_for_status()
        
        with open(filepath, 'wb') as file:
            for chunk in response.iter_content(chunk_size=8192):
                file.write(chunk)
                
        print(f"İndirildi: {filename}")
        return filename
    except Exception as e:
        print(f"Resim indirme hatası ({url}): {e}")
        return None

# Hepsiburada'dan ürün arama ve veri çekme
def scrape_hepsiburada(search_term, category):
    products = []
    driver = setup_driver()
    
    try:
        # URL'yi kodla
        search_query = search_term.replace(' ', '+')
        url = f"https://www.hepsiburada.com/ara?q={search_query}"
        
        print(f"Aranıyor: {search_term} - URL: {url}")
        driver.get(url)
        
        # Sayfanın yüklenmesini bekle
        time.sleep(5)
        
        # Scroll down for more products
        driver.execute_script("window.scrollTo(0, 1000)")
        time.sleep(2)
        
        # Sayfanın HTML içeriğini al
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        
        # Ürün kartlarını bul
        product_cards = soup.select('li[data-test-id="product-card-item"]')[:4]  # İlk 4 ürünü al
        
        for i, card in enumerate(product_cards):
            try:
                # Ürün adı
                name_element = card.select_one('h3.product-title')
                if not name_element:
                    continue
                name = name_element.text.strip()
                
                # Ürün fiyatı
                price_element = card.select_one('div.product-price span')
                price = price_element.text.strip() if price_element else "Fiyat bilgisi yok"
                
                # Fiyatı temizle
                price = price.replace('TL', '').replace('.', '').replace(',', '.').strip()
                try:
                    price_value = float(price)
                except:
                    price_value = 0
                
                # İndirimli fiyat kontrolü
                original_price_element = card.select_one('div.product-price del')
                has_discount = original_price_element is not None
                
                original_price = 0
                discount_percentage = 0
                
                if has_discount:
                    original_price_text = original_price_element.text.strip().replace('TL', '').replace('.', '').replace(',', '.').strip()
                    try:
                        original_price = float(original_price_text)
                        if original_price > 0 and price_value > 0:
                            discount_percentage = round(((original_price - price_value) / original_price) * 100)
                    except:
                        original_price = price_value
                        has_discount = False
                else:
                    original_price = price_value
                
                # Ürün resmi
                img_element = card.select_one('img[data-src], img[src]')
                img_url = img_element.get('data-src') or img_element.get('src') if img_element else None
                
                if not img_url:
                    continue
                
                # Resmi indir
                image_filename = download_image(img_url, category, name, i)
                
                if not image_filename:
                    continue
                
                # Ürün linki
                link_element = card.select_one('a[href]')
                product_link = link_element.get('href') if link_element else None
                
                # Link normalizasyonu
                if product_link and not product_link.startswith('http'):
                    product_link = 'https://www.hepsiburada.com' + product_link
                
                # Ürün açıklaması için detay sayfasına git (opsiyonel)
                description = None
                if product_link:
                    try:
                        driver.get(product_link)
                        time.sleep(3)
                        detail_soup = BeautifulSoup(driver.page_source, 'html.parser')
                        desc_element = detail_soup.select_one('div#productDescriptionContent')
                        if desc_element:
                            description = desc_element.text.strip()
                        else:
                            description = f"{name} - Online alışveriş sitesinden temin edilebilir."
                    except Exception as e:
                        print(f"Ürün detayı çekme hatası: {e}")
                        description = f"{name} - Detaylı açıklama mevcut değil."
                
                # Slug oluştur
                slug = name.lower().replace(' ', '-').replace('/', '-').replace('.', '-')
                
                # Ürün bilgilerini kaydet
                product = {
                    'name': name,
                    'slug': slug,
                    'price': price_value,
                    'originalPrice': original_price,
                    'discount': discount_percentage,
                    'image': f'/images/products/{image_filename}',
                    'category': category,
                    'categorySlug': category.lower().replace(' ', '-').replace('&', '-'),
                    'description': description or f"{name} - Açıklama mevcut değil.",
                    'features': [
                        f"Ürün kalitesi: Premium",
                        f"Orijinal ürün",
                        f"Hızlı kargo",
                        f"Güvenli alışveriş",
                    ],
                    'stock': 10 + i,
                    'isNew': i < 2,  # İlk 2 ürün "yeni" olarak işaretleniyor
                }
                
                products.append(product)
                print(f"Ürün eklendi: {name}")
                
                # Ana sayfaya geri dön (bir sonraki arama için)
                driver.get(url)
                time.sleep(3)
                
            except Exception as e:
                print(f"Ürün çekme hatası: {e}")
                continue
                
    except Exception as e:
        print(f"Scraping hatası: {e}")
    
    finally:
        driver.quit()
        
    return products

# Trendyol'dan ürün arama ve veri çekme
def scrape_trendyol(search_term, category):
    products = []
    driver = setup_driver()
    
    try:
        search_query = search_term.replace(' ', '%20')
        url = f"https://www.trendyol.com/sr?q={search_query}"
        
        print(f"Aranıyor: {search_term} - URL: {url}")
        driver.get(url)
        
        # Çerezleri kabul et (Trendyol'da genellikle çıkar)
        try:
            WebDriverWait(driver, 5).until(
                EC.element_to_be_clickable((By.ID, "onetrust-accept-btn-handler"))
            ).click()
            time.sleep(1)
        except:
            pass  # Çerez banner'ı yoksa devam et
        
        # Sayfanın yüklenmesini bekle ve scroll
        time.sleep(3)
        driver.execute_script("window.scrollTo(0, 1000)")
        time.sleep(2)
        
        # Sayfanın HTML içeriğini al
        soup = BeautifulSoup(driver.page_source, 'html.parser')
        
        # Ürün kartlarını bul
        product_cards = soup.select('div.p-card-wrppr')[:4]  # İlk 4 ürün
        
        for i, card in enumerate(product_cards):
            try:
                # Ürün adı
                name_element = card.select_one('span.prdct-desc-cntnr-name')
                if not name_element:
                    continue
                name = name_element.text.strip()
                
                # Ürün fiyatı
                price_element = card.select_one('div.prc-box-dscntd')
                if not price_element:
                    price_element = card.select_one('div.prc-box-sllng')
                
                price = price_element.text.strip() if price_element else "Fiyat bilgisi yok"
                price = price.replace('TL', '').replace('.', '').replace(',', '.').strip()
                
                try:
                    price_value = float(price)
                except:
                    price_value = 0
                
                # İndirimli fiyat kontrolü
                original_price_element = card.select_one('div.prc-box-orgnl')
                has_discount = original_price_element is not None
                
                original_price = 0
                discount_percentage = 0
                
                if has_discount:
                    original_price_text = original_price_element.text.strip().replace('TL', '').replace('.', '').replace(',', '.').strip()
                    try:
                        original_price = float(original_price_text)
                        if original_price > 0 and price_value > 0:
                            discount_percentage = round(((original_price - price_value) / original_price) * 100)
                    except:
                        original_price = price_value
                        has_discount = False
                else:
                    original_price = price_value
                
                # Ürün resmi
                img_element = card.select_one('img.p-card-img')
                img_url = img_element.get('src') if img_element else None
                
                if not img_url:
                    continue
                
                # Resmi indir
                image_filename = download_image(img_url, category, name, i)
                
                if not image_filename:
                    continue
                
                # Ürün linki
                link_element = card.select_one('a.p-card-chldrn-cntnr')
                product_link = link_element.get('href') if link_element else None
                
                # Link normalizasyonu
                if product_link and not product_link.startswith('http'):
                    product_link = 'https://www.trendyol.com' + product_link
                
                # Ürün açıklaması için detay sayfasına git
                description = None
                if product_link:
                    try:
                        driver.get(product_link)
                        time.sleep(3)
                        # Trendyol'da açıklama elementini bul
                        detail_soup = BeautifulSoup(driver.page_source, 'html.parser')
                        desc_element = detail_soup.select_one('div.detail-desc-content')
                        if desc_element:
                            description = desc_element.text.strip()
                        else:
                            description = f"{name} - Online alışveriş sitesinden temin edilebilir."
                    except Exception as e:
                        print(f"Ürün detayı çekme hatası: {e}")
                        description = f"{name} - Detaylı açıklama mevcut değil."
                
                # Slug oluştur
                slug = name.lower().replace(' ', '-').replace('/', '-').replace('.', '-')
                
                # Ürün bilgilerini kaydet
                product = {
                    'name': name,
                    'slug': slug,
                    'price': price_value,
                    'originalPrice': original_price,
                    'discount': discount_percentage,
                    'image': f'/images/products/{image_filename}',
                    'category': category,
                    'categorySlug': category.lower().replace(' ', '-').replace('&', '-'),
                    'description': description or f"{name} - Açıklama mevcut değil.",
                    'features': [
                        f"Ürün kalitesi: Premium",
                        f"Orijinal ürün",
                        f"Hızlı kargo",
                        f"Güvenli alışveriş",
                    ],
                    'stock': 10 + i,
                    'isNew': i < 2,
                }
                
                products.append(product)
                print(f"Ürün eklendi: {name}")
                
                # Ana sayfaya geri dön
                driver.get(url)
                time.sleep(3)
                
            except Exception as e:
                print(f"Ürün çekme hatası: {e}")
                continue
    
    except Exception as e:
        print(f"Scraping hatası: {e}")
    
    finally:
        driver.quit()
        
    return products

# Ana scraping fonksiyonu
def scrape_products():
    all_products = {}
    product_list = []
    
    # Her kategori için
    for category_slug, search_terms in search_categories.items():
        category_name = category_slug.replace('-', ' ').title().replace('Ve', '&')
        
        for term in search_terms:
            print(f"\n{'='*50}\nAranan ürün: {term} (Kategori: {category_name})\n{'='*50}")
            
            # Hepsiburada'dan ürünleri çek
            hepsiburada_products = scrape_hepsiburada(term, category_name)
            product_list.extend(hepsiburada_products)
            
            # Biraz bekle
            time.sleep(2)
            
            # Trendyol'dan ürünleri çek
            trendyol_products = scrape_trendyol(term, category_name)
            product_list.extend(trendyol_products)
            
            # İki site arasında bekle
            time.sleep(3)
    
    # Ürünleri JS formatında kaydet (export default object şeklinde)
    for product in product_list:
        product_slug = product['slug']
        all_products[product_slug] = product
    
    # Ürünleri JavaScript modülü olarak dışa aktar
    js_output = f"const products = {json.dumps(all_products, indent=2, ensure_ascii=False)};\n\nexport default products;"
    
    with open(f'{output_folder}/products.js', 'w', encoding='utf-8') as f:
        f.write(js_output)
    
    # Ayrıca JSON olarak da kaydet
    with open(f'{output_folder}/products.json', 'w', encoding='utf-8') as f:
        json.dump(all_products, f, indent=2, ensure_ascii=False)
    
    print(f"\n{'='*50}\nToplam {len(product_list)} ürün başarıyla çekildi.\n{'='*50}")
    print(f"Çıktılar '{output_folder}' klasörüne kaydedildi.")

if __name__ == "__main__":
    scrape_products() 