# 📦 Installation Guide - CTASaham Website

## Prasyarat

Pastikan sudah terinstall:
- **Node.js** versi 18.x atau lebih baru
- **npm** atau **yarn**
- **Git** (untuk deploy ke Vercel)

## 🚀 Langkah Instalasi

### 1. Extract Project

Extract folder `ctasaham-website` ke lokasi yang Anda inginkan.

### 2. Buka Terminal/Command Prompt

Di Windows:
```bash
cd path/to/ctasaham-website
```

### 3. Install Dependencies

```bash
npm install
```

**Catatan**: Proses ini akan mengunduh semua package yang dibutuhkan (~200MB). Tunggu sampai selesai.

### 4. Jalankan Development Server

```bash
npm run dev
```

### 5. Buka Browser

Akses: `http://localhost:3000`

Website akan otomatis reload ketika Anda edit file!

## 🎨 Customize Content

### Mengganti Logo
Replace file: `public/images/logo.png`

### Mengganti Foto Founder
Replace file: `public/images/founder.jpg`

### Edit Konten
Edit file di folder `pages/` dan `components/`

## 🏗️ Build Production

Untuk membuat versi production:

```bash
npm run build
npm start
```

Website production akan berjalan di `http://localhost:3000`

## 🚀 Deploy ke Vercel

### Cara 1: Via GitHub (Recommended)

1. **Push ke GitHub**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

2. **Import di Vercel**:
   - Login ke https://vercel.com
   - Click "New Project"
   - Import dari GitHub repository
   - Click "Deploy"
   - Done! ✅

### Cara 2: Via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts, dan website akan live dalam beberapa menit!

## 📝 Environment Variables (Optional)

Jika nanti ada fitur yang butuh environment variables, buat file `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_WHATSAPP_NUMBER=6281234567890
```

## 🔧 Troubleshooting

### Port 3000 sudah digunakan?

Edit package.json, ganti:
```json
"dev": "next dev -p 3001"
```

### Error saat npm install?

Try:
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Gambar tidak muncul?

Pastikan file ada di folder `public/images/` dan path benar di code.

## 📞 Support

Jika ada masalah, check:
- Node.js version: `node -v` (harus 18+)
- npm version: `npm -v`
- Clear cache & reinstall dependencies

---

**Happy Coding! 🚀**
