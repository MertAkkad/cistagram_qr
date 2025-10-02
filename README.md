# Cistagram QR Site

Basit, mobil uyumlu bir Next.js sitesi. Ana sayfada 3 buton: Menü, Instagram, Konum. Menü → kategori listesi → her kategori sayfasında Canva'dan alınan menü görselleri.

## Başlangıç
```bash
npm install
npm run dev
```
Geliştirme: http://localhost:3000

## Yapı
- `app/` App Router sayfaları
- `config/links.js` Instagram ve Konum URL'leri
- `config/menu.js` Kategoriler ve kategori görsel listeleri
- `public/images/...` Canva menü görsellerini buraya kopyalayın

## Düzenleme
- Instagram/konum linklerini `config/links.js` içinde güncelleyin.
- Kategori adları ve görselleri `config/menu.js` içinde düzenleyin. Yerel görseller için `public/images/...` altında dosyaları ekleyin ve yolları güncelleyin. Harici görsel URL'leri için `next.config.js` → `images.remotePatterns` alan adını ekleyin.

## Vercel Deploy
1. Kodu GitHub'a gönderin (veya Vercel CLI kullanın)
2. Vercel Dashboard → New Project → repo'yu seçin
3. Framework: Next.js (otomatik). Build: `next build`, Start: `next start` (otomatik)
4. Deploy

CLI ile:
```bash
npm i -g vercel
vercel login
vercel
```

## Notlar
- App Router (Next 13+) kullanır
- Büyük görselleri sıkıştırın (JPG önerilir)
- `public/` içine görsel koyarsanız yol: `/images/...` şeklinde olmalı
