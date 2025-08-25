# Deployment Laravel ke Vercel

Panduan ini menjelaskan cara men-deploy aplikasi Laravel dengan Inertia.js dan React ke Vercel.

## Prerequisites

1. Akun Vercel
2. Vercel CLI (opsional)
3. Git repository yang sudah terhubung dengan Vercel

## Konfigurasi Environment Variables

Sebelum deploy, pastikan untuk mengatur environment variables berikut di dashboard Vercel:

### Required Variables
- `APP_KEY` - Laravel application key (generate dengan `php artisan key:generate`)
- `APP_NAME` - Nama aplikasi
- `APP_URL` - URL aplikasi (akan otomatis terisi oleh Vercel)
- `DB_CONNECTION` - Database connection (pilih salah satu: mysql, pgsql, sqlite)
- `DB_HOST` - Database host
- `DB_PORT` - Database port
- `DB_DATABASE` - Database name
- `DB_USERNAME` - Database username
- `DB_PASSWORD` - Database password

### Optional Variables
- `CACHE_DRIVER` - Cache driver (default: array)
- `SESSION_DRIVER` - Session driver (default: cookie)
- `QUEUE_CONNECTION` - Queue connection (default: sync)
- `MAIL_MAILER` - Mail driver
- `MAIL_HOST` - Mail host
- `MAIL_PORT` - Mail port
- `MAIL_USERNAME` - Mail username
- `MAIL_PASSWORD` - Mail password
- `MAIL_ENCRYPTION` - Mail encryption

## Database Setup

### Option 1: Vercel Postgres
1. Buat database Postgres di Vercel dashboard
2. Set environment variables sesuai dengan kredensial database
3. Jalankan migration: `php artisan migrate`

### Option 2: External Database
1. Gunakan layanan database eksternal (PlanetScale, Railway, dll)
2. Set environment variables sesuai dengan kredensial database
3. Jalankan migration: `php artisan migrate`

## Deployment Steps

### Method 1: Vercel Dashboard
1. Buka [Vercel Dashboard](https://vercel.com/dashboard)
2. Klik "New Project"
3. Import repository dari GitHub/GitLab/Bitbucket
4. Set environment variables
5. Deploy

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Untuk production
vercel --prod
```

## Build Process

Vercel akan menjalankan script build berikut secara otomatis:

1. `composer install --no-dev --optimize-autoloader`
2. `npm ci`
3. `npm run build`
4. Generate application key
5. Cache configuration, routes, dan views

## File Structure

```
├── api/
│   ├── index.php          # Main handler untuk semua request
│   └── ssr.php           # Handler untuk SSR
├── public/               # Output directory
├── vercel.json          # Vercel configuration
├── .vercelignore        # Ignore files
└── vercel-build.sh      # Build script
```

## Troubleshooting

### Common Issues

1. **500 Error**: Cek environment variables dan database connection
2. **Build Failed**: Pastikan semua dependencies terinstall dengan benar
3. **SSR Not Working**: Pastikan Node.js runtime tersedia dan SSR path dikonfigurasi dengan benar

### Debug Commands

```bash
# Cek logs di Vercel dashboard
# Atau gunakan Vercel CLI
vercel logs

# Cek environment variables
vercel env ls
```

## Performance Optimization

1. **Caching**: Gunakan Redis atau Memcached untuk caching
2. **CDN**: Vercel menyediakan CDN global secara otomatis
3. **Database**: Gunakan connection pooling untuk database
4. **Assets**: Optimize images dan assets

## Monitoring

1. Gunakan Vercel Analytics untuk monitoring performa
2. Set up error tracking (Sentry, Bugsnag, dll)
3. Monitor database performance

## Security

1. Set `APP_DEBUG=false` di production
2. Gunakan HTTPS (otomatis disediakan Vercel)
3. Set secure session configuration
4. Implement rate limiting jika diperlukan