# Blog Template Frontend

Bu proje, blog tasarımını temel alarak yapılmıştır. Tasarım, Figma üzerindeki ücretsiz blog template'inden ilham alınarak geliştirilmiştir. Proje, sadece frontend kodlarından oluşmaktadır ve *Next.js, **TypeScript, **Tailwind CSS* gibi teknolojiler kullanılarak geliştirilmiştir.

### Özellikler:
•⁠  ⁠Sayfalar: 
  - Home: Ana sayfa, genel blog yazılarının listelendiği alandır.
  - Blog: Blog yazılarını listeleyen sayfa.
  - Single Post: Tek bir blog yazısını görüntüleyen sayfa.

•⁠  Navbar: Navbar içerisinde yer alan "Home", "Blog" ve "Single Post" bağlantıları çalışmaktadır ve her bir sayfayı gösterebilirsiniz.

•⁠  ⁠Dark-Light Mode Geçişi: Navbar'da bulunan buton sayesinde kullanıcılar, dark mode ve light mode arasında geçiş yapabilirler.
  - Bu seçim, kullanıcının tercihine göre local storage kullanılarak kaydedilir ve sayfa yenilendiğinde aynı modda devam eder.

•⁠  ⁠Responsive Tasarım: Tasarım hala geliştirilme aşamasında olup, mobil uyumluluk üzerinde çalışılmaktadır.

## Kullanılan Teknolojiler:
  - ⁠*Next.js*: React tabanlı framework, sayfa yönlendirmesi ve SEO optimizasyonu için kullanılmıştır.
  - ⁠*TypeScript*: Kodun daha güvenli ve yönetilebilir olması için TypeScript kullanılmıştır.
  - ⁠*Tailwind CSS*: Tasarım için yardımcı sınıf tabanlı CSS framework'u kullanılmıştır.
  - ⁠*React Router DOM*: Sayfa yönlendirmeleri için React Router DOM kullanılmıştır.
  - ⁠*LocalStorage*: Dark mode ve light mode geçişi için kullanıcı tercihi localStorage'da saklanmaktadır.

## Kurulum ve Çalıştırma

Bu projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları takip edebilirsiniz:

### 1. Depoyu Klonlayın
Öncelikle projeyi yerel bilgisayarınıza klonlayın:
git clone https://github.com/sudeakq/metablogfrontend

### 2.⁠ ⁠Gerekli Bağımlılıkları Yükleyin
Proje klasörüne gidin ve gerekli bağımlılıkları yüklemek için npm veya yarn kullanın:
npm install

### 3.⁠ ⁠Geliştirme Sunucusunu Başlatın
Projenin geliştirme modunda çalışmasını sağlamak için aşağıdaki komutu kullanın:
npm run dev

Geliştirme sunucusu http://localhost:3000 adresinde çalışacaktır. Tarayıcınızda bu adresi ziyaret ederek projeyi görüntüleyebilirsiniz.

## Proje Yapısı
Projenin yapısı şu şekildedir:

/pages
  /index.tsx               # Home sayfası
  /blogListing.tsx         # Blog yazıları listesi
  /singlePost.tsx          # Tek blog yazısı
/components
  /Navbar.tsx              # Navigasyon menüsü
  /Footer.tsx              # Footer componenti
  /PostCard.tsx            # Blog postu kart componenti
/styles
  /tailwind.css            # Tailwind CSS konfigürasyonu

# Özellikler
•⁠  Navbar: Menüdeki bağlantılar (Home, Blog, Single Post) düzgün çalışmakta ve React Router DOM kullanılarak sayfalara yönlendirme yapılmaktadır.

•⁠  Dark/Light Mode: Navbar'daki buton aracılığıyla tema değiştirebilirsiniz. Kullanıcının tercihi localStorage'da saklanır, bu sayede sayfa yenilendiğinde seçilen tema korunur.

•⁠  Responsive Tasarım: Mobil uyumluluk üzerinde çalışmalar sürmektedir. Şu anda temel mobil uyumluluk sağlanmış ve daha fazla cihaz için optimize edilmesi planlanmaktadır.

### Açıklamalar:
  - ⁠Kullanılan Teknolojiler: README dosyasına, projede kullanılan teknolojiler (Next.js, TypeScript, Tailwind CSS, React Router DOM, LocalStorage) ve her birinin nasıl kullanıldığını ekledim.
  - ⁠Kurulum ve Çalıştırma: Projeyi yerel bilgisayarınızda nasıl çalıştıracağınız hakkında açıklamalar içeriyor.
  - ⁠Proje Yapısı: Projenin dosya yapısı hakkında bir genel bakış sundum.
  - ⁠Katkı Sağlamak: Katkı sağlamak isteyenler için temel GitFlow talimatlarını ekledim.
