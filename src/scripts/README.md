# Ürün Veri Scraper

Bu script, belirtilen kategorilerde e-ticaret sitelerinden ürün bilgilerini ve görsellerini çekmenizi sağlar.

## Özellikler

- Hepsiburada ve Trendyol'dan ürün bilgileri ve görselleri toplar
- Kategoriye göre filtreleme yapar
- Ürün fiyatlarını, indirim oranlarını ve açıklamalarını çeker
- Ürün görselleri otomatik olarak indirilir
- JavaScript ve JSON formatlarında çıktı oluşturur
- Next.js uygulamanızda doğrudan kullanılabilir ürün verisi oluşturur

## Kurulum

1. Gerekli Python kütüphanelerini yükleyin:

```bash
pip install -r requirements.txt
```

2. Google Chrome tarayıcısının yüklü olduğundan emin olun (Selenium için gerekli)

## Kullanım

Scripti çalıştırmak için:

```bash
python product_scraper.py
```

Script çalıştığında:

1. Her kategori ve arama terimi için e-ticaret sitelerinde arama yapar
2. Ürün bilgilerini ve görsellerini toplar
3. Tüm verileri `scraped_products` klasörüne kaydeder:
   - `scraped_products/products.js`: Next.js uygulaması için JavaScript modülü
   - `scraped_products/products.json`: JSON formatında veriler
   - `scraped_products/images/`: İndirilen tüm ürün görselleri

## Özelleştirme

Farklı kategoriler veya arama terimleri eklemek için `product_scraper.py` dosyasının başındaki `search_categories` sözlüğünü düzenleyebilirsiniz:

```python
search_categories = {
    'pelus-oyuncak': ['Peluş Ayıcık', 'Peluş Tavşan', ...],
    'taki-aksesuar': ['Gümüş Kolye', 'İnci Bileklik', ...],
    # ...
}
```

## Notlar

- Web scraping yaparken sitenin kullanım koşullarını ihlal etmediğinizden emin olun
- Çekilen verilerin ticari kullanımı için ilgili web sitelerinden izin alınması gerekebilir
- Fazla sayıda istek göndermek IP adresinizin engellenmesine neden olabilir, bu nedenle script istek aralıklarını ayarlar

## Next.js Uygulamasına Entegrasyon

1. Çalıştırdıktan sonra `scraped_products/images` içindeki görselleri `public/images/products/` klasörüne taşıyın
2. `scraped_products/products.js` dosyasını `src/data/` veya benzeri bir klasöre taşıyın
3. Ürün verilerini uygulamanızda şu şekilde kullanabilirsiniz:

```javascript
import products from '../data/products';

// Tüm ürünleri alın
const allProducts = Object.values(products);

// Belirli bir ürünü slug ile alın
const product = products['urun-slug-burada'];
``` 