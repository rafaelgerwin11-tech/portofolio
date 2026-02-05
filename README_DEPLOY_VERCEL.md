# Deploy cepat ke Vercel

Langkah singkat untuk deploy `portofolio-main` ke Vercel.

1) Pastikan build lokal berhasil:

```bash
cd C:\Portofolio\portofolio-main
npm install
npm run build
```

Jika PowerShell memblokir `npm` gunakan Command Prompt (`cmd`) atau jalankan PowerShell dengan `-ExecutionPolicy Bypass`.

2) Buat repo Git dan push ke GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<username>/<repo>.git
git push -u origin main
```

Ganti `<username>` dan `<repo>` sesuai akun GitHub Anda.

3) Deploy via Vercel (GUI):
- Masuk ke https://vercel.com
- Klik "New Project" → import repository GitHub Anda
- Pilih framework: Vite (jika diminta)
- Pastikan Build Command: `npm run build` dan Output Directory: `dist`
- Deploy

4) Alternatif: Deploy dengan Vercel CLI:

```bash
npm i -g vercel
cd C:\Portofolio\portofolio-main
vercel login
vercel --prod
```

5) Setelah deploy berhasil, bagikan URL yang diberikan Vercel.

Catatan: `vercel.json` sudah ditambahkan untuk memastikan SPA routing ke `index.html`.

6) Untuk deploy otomatis setiap kali Anda push ke GitHub

- Saya menambahkan workflow GitHub Actions: `.github/workflows/deploy-vercel.yml`.
- Langkah yang harus dilakukan di GitHub:
	1. Buat repository GitHub dan push kode (branch `main`).
	2. Di halaman repo → Settings → Secrets and variables → Actions, tambah secret `VERCEL_TOKEN` (buat token dari https://vercel.com/account/tokens).
	3. (Opsional) Tambah `VERCEL_ORG_ID` dan `VERCEL_PROJECT_ID` untuk memastikan vercel CLI memilih proyek yang benar. Anda bisa mendapatkan nilai ini dari pengaturan proyek di Vercel.
	4. Setelah Anda push, workflow akan otomatis berjalan: meng-install, build, lalu `npx vercel --prod --token ${{ secrets.VERCEL_TOKEN }}` untuk deploy produksi.

Catatan keamanan: jangan commit token ke repo. Gunakan GitHub Secrets.
