# Task: Inisialisasi Proyek Backend (Bun + ElysiaJS + Drizzle + MySQL)

## 1. Deskripsi & Tujuan
Inisialisasi project backend baru di direktori ini menggunakan runtime **Bun**, framework **ElysiaJS**, dan ORM **Drizzle** yang terhubung ke database **MySQL**. Proyek ini ditujukan sebagai fondasi API service yang siap dikembangkan lebih lanjut.

---

## 2. Spesifikasi Teknologi
- **Runtime & Package Manager**: Bun
- **Web Framework**: ElysiaJS (`elysia`)
- **ORM & Migrations**: Drizzle ORM (`drizzle-orm`, `drizzle-kit`)
- **Database Driver**: MySQL (driver yang kompatibel dengan Bun & Drizzle, misal `mysql2`)
- **Environment Management**: Bun native env / `.env`

---

## 3. High-Level Implementation Steps

### Tahap 1: Inisialisasi Project & Konfigurasi Dasar
1. Inisialisasi project Bun di root folder (`bun init`).
2. Pastikan file konfigurasi TypeScript (`tsconfig.json`) dan `.gitignore` sudah siap.
3. Buat file template environment:
   - `.env.example`: Template variabel koneksi MySQL (`DATABASE_HOST`, `DATABASE_PORT`, `DATABASE_USER`, `DATABASE_PASSWORD`, `DATABASE_NAME`, `PORT`).
   - `.env`: Konfigurasi lokal yang dapat disesuaikan.

### Tahap 2: Instalasi Dependencies
1. Install dependencies utama:
   - `elysia`
   - `drizzle-orm`
   - MySQL driver (misal: `mysql2`)
2. Install development dependencies:
   - `drizzle-kit` (untuk migrasi dan manajemen schema)
   - Type definition yang relevan (jika diperlukan)

### Tahap 3: Setup Database & Drizzle ORM
1. Buat file konfigurasi Drizzle (`drizzle.config.ts`) yang mengarah ke folder schema dan database MySQL.
2. Buat koneksi database client di direktori database (misal: `src/db/index.ts`).
3. Buat contoh definisi schema tabel sederhana (misal: tabel `users` atau healthcheck table) di `src/db/schema.ts`.
4. Tambahkan script CLI di `package.json` untuk operasi database:
   - Generate migration (`db:generate`)
   - Push/migrate schema (`db:push` atau `db:migrate`)
   - Drizzle Studio (`db:studio`) jika diperlukan

### Tahap 4: Setup Server ElysiaJS
1. Buat entry point aplikasi di `src/index.ts`.
2. Inisialisasi instance Elysia dan pasang port server dari environment variable (default: `3000`).
3. Sediakan endpoint dasar:
   - Health check endpoint (`GET /` atau `GET /health`) yang mengembalikan status service.
   - Contoh endpoint sederhana yang berinteraksi dengan Drizzle ORM untuk memastikan koneksi database bekerja dengan baik.

### Tahap 5: Rekomendasi Struktur Direktori (High-Level)
Gunakan struktur modular sederhana:
```text
.
├── src/
│   ├── db/
│   │   ├── index.ts        # Inisialisasi koneksi Drizzle & MySQL
│   │   └── schema.ts       # Definisi schema tabel Drizzle
│   ├── routes/             # Handler / rute API (atau modular per fitur)
│   └── index.ts            # Entry point aplikasi Elysia
├── .env.example
├── drizzle.config.ts       # Konfigurasi Drizzle Kit
├── package.json
└── tsconfig.json
```

---

## 4. Kriteria Keberhasilan (Acceptance Criteria)
- [x] Project berhasil di-setup menggunakan Bun tanpa error dependensi.
- [x] Server ElysiaJS dapat dijalankan dengan perintah `bun run dev` (atau `bun --watch src/index.ts`).
- [x] Endpoint health check merespons dengan status OK / HTTP 200.
- [x] Konfigurasi Drizzle terhubung ke MySQL dan siap menjalankan migrasi schema via `drizzle-kit`.
