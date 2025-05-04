import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/router';

// Kullanıcı tipi tanımlaması
export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  memberSince: string;
};

// Auth Context tipi tanımlaması
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  register: (userData: Partial<User> & { password: string }) => Promise<boolean>;
  updateProfile: (userData: Partial<User>) => Promise<boolean>;
  changePassword: (currentPassword: string, newPassword: string) => Promise<boolean>;
}

// Context oluşturma
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider props tipi
interface AuthProviderProps {
  children: ReactNode;
}

// Örnek kullanıcılar (gerçek projede veritabanından gelecek)
const demoUsers = [
  {
    id: '1',
    name: 'Ahmet Yılmaz',
    email: 'ahmet@example.com',
    password: '123456',
    phone: '+90 555 123 4567',
    memberSince: '01.01.2023'
  },
  {
    id: '2',
    name: 'Mehmet Kaya',
    email: 'mehmet@example.com',
    password: '123456',
    phone: '+90 532 987 6543',
    memberSince: '15.02.2023'
  }
];

// Auth Provider bileşeni
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Sayfa yüklendiğinde localStorage'dan kullanıcı bilgisi varsa yükleme
  useEffect(() => {
    const checkLoggedIn = async () => {
      try {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        localStorage.removeItem('user');
      } finally {
        setIsLoading(false);
      }
    };

    checkLoggedIn();
  }, []);

  // Login fonksiyonu
  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Gerçek API çağrısı burada yapılacak (şimdilik simüle ediyoruz)
      await new Promise(resolve => setTimeout(resolve, 1000)); // API gecikme simülasyonu
      
      // Demo kullanıcıları kontrol etme
      const foundUser = demoUsers.find(
        user => user.email === email && user.password === password
      );
      
      if (foundUser) {
        // Şifreyi saklamıyoruz
        const { password, ...userWithoutPassword } = foundUser;
        setUser(userWithoutPassword);
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        
        setIsLoading(false);
        return true;
      } else {
        setIsLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Login error:', error);
      setIsLoading(false);
      return false;
    }
  };

  // Logout fonksiyonu
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/');
  };

  // Kayıt fonksiyonu
  const register = async (userData: Partial<User> & { password: string }): Promise<boolean> => {
    setIsLoading(true);
    
    try {
      // Gerçek API çağrısı burada yapılacak (şimdilik simüle ediyoruz)
      await new Promise(resolve => setTimeout(resolve, 1000)); // API gecikme simülasyonu

      // E-posta kontrolü (yalnızca demo amaçlı)
      const userExists = demoUsers.some(user => user.email === userData.email);
      
      if (userExists) {
        setIsLoading(false);
        return false; // Bu e-posta zaten kullanımda
      }
      
      // Yeni kullanıcı oluşturma (gerçekte API'ye gönderilecek)
      const newUser = {
        id: Math.random().toString(36).substr(2, 9), // Gerçekte sunucu tarafında oluşturulacak
        name: userData.name || '',
        email: userData.email || '',
        phone: userData.phone,
        memberSince: new Date().toLocaleDateString('tr-TR')
      };
      
      // Şifresiz kullanıcı bilgilerini state'e ve localStorage'a kaydetme
      setUser(newUser);
      localStorage.setItem('user', JSON.stringify(newUser));
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Registration error:', error);
      setIsLoading(false);
      return false;
    }
  };

  // Profil güncelleme fonksiyonu
  const updateProfile = async (userData: Partial<User>): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    
    try {
      // Gerçek API çağrısı burada yapılacak (şimdilik simüle ediyoruz)
      await new Promise(resolve => setTimeout(resolve, 1000)); // API gecikme simülasyonu
      
      // Kullanıcı bilgilerini güncelleme
      const updatedUser = {
        ...user,
        ...userData
      };
      
      // Güncellenmiş kullanıcı bilgilerini state'e ve localStorage'a kaydetme
      setUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Profile update error:', error);
      setIsLoading(false);
      return false;
    }
  };

  // Şifre değiştirme fonksiyonu
  const changePassword = async (currentPassword: string, newPassword: string): Promise<boolean> => {
    if (!user) return false;
    
    setIsLoading(true);
    
    try {
      // Gerçek API çağrısı burada yapılacak (şimdilik simüle ediyoruz)
      await new Promise(resolve => setTimeout(resolve, 1000)); // API gecikme simülasyonu
      
      // Demo kullanıcıları kontrol etme
      const foundUser = demoUsers.find(
        demoUser => demoUser.email === user.email && demoUser.password === currentPassword
      );
      
      if (!foundUser) {
        setIsLoading(false);
        return false; // Mevcut şifre eşleşmiyor
      }
      
      // Gerçekte veritabanındaki şifreyi güncelleyecek
      // Burada demo amaçlı demoUsers'daki şifreyi değiştiriyoruz
      const userIndex = demoUsers.findIndex(demoUser => demoUser.email === user.email);
      if (userIndex !== -1) {
        demoUsers[userIndex].password = newPassword;
      }
      
      setIsLoading(false);
      return true;
    } catch (error) {
      console.error('Password change error:', error);
      setIsLoading(false);
      return false;
    }
  };

  // Context değeri
  const value = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
    register,
    updateProfile,
    changePassword
  };
  
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Auth hook'u
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 