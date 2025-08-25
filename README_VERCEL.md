# 🚀 Deploy Laravel + Inertia.js + React ke Vercel

Panduan lengkap untuk men-deploy aplikasi Laravel dengan Inertia.js dan React ke Vercel.

## 📋 Prerequisites

- ✅ Akun Vercel
- ✅ Git repository (GitHub, GitLab, atau Bitbucket)
- ✅ Database (Vercel Postgres, PlanetScale, Railway, dll)

## 🛠️ Quick Start

### 1. Clone dan Setup Project

```bash
# Clone repository
git clone <your-repo-url>
cd <your-project>

# Install dependencies
composer install
npm install

# Copy environment file
cp .env.example .env
```

### 2. Generate APP_KEY

```bash
# Generate APP_KEY
php generate-app-key.php
```

### 3. Deploy ke Vercel

#### Option A: Menggunakan Script Otomatis
```bash
# Make script executable
chmod +x deploy-to-vercel.sh

# Run deployment script
./deploy-to-vercel.sh
```

#### Option B: Manual Deployment
```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel --prod
```

## ⚙️ Environment Variables

Set environment variables berikut di Vercel dashboard:

### Required Variables
```bash
APP_KEY=base64:your-generated-key
APP_NAME="Your App Name"
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.vercel.app

# Database
DB_CONNECTION=mysql
DB_HOST=your-db-host
DB_PORT=3306
DB_DATABASE=your-database
DB_USERNAME=your-username
DB_PASSWORD=your-password
```

### Optional Variables
```bash
# Cache & Session
CACHE_DRIVER=array
SESSION_DRIVER=cookie
SESSION_LIFETIME=120

# Queue
QUEUE_CONNECTION=sync

# Mail (optional)
MAIL_MAILER=smtp
MAIL_HOST=your-mail-host
MAIL_PORT=587
MAIL_USERNAME=your-mail-username
MAIL_PASSWORD=your-mail-password
MAIL_ENCRYPTION=tls

# Logging
LOG_CHANNEL=stderr
LOG_LEVEL=debug
```

## 🗄️ Database Setup

### Option 1: Vercel Postgres
1. Buat database di Vercel dashboard
2. Copy connection string ke environment variables
3. Update `DB_CONNECTION=pgsql`

### Option 2: External Database
- **PlanetScale**: MySQL-compatible
- **Railway**: PostgreSQL/MySQL
- **Supabase**: PostgreSQL
- **Neon**: PostgreSQL

## 🔄 Migration

Setelah deploy, jalankan migration:

```bash
# Via URL
https://your-domain.vercel.app/migrate

# Atau via Vercel CLI
vercel env pull .env.local
php artisan migrate --force
```

## 📁 File Structure

```
├── api/
│   ├── index.php          # Main handler
│   ├── ssr.php           # SSR handler
│   ├── migrate.php       # Migration handler
│   ├── health.php        # Health check
│   └── error-handler.php # Error handling
├── public/               # Output directory
├── vercel.json          # Vercel config
├── .vercelignore        # Ignore files
├── vercel-build.sh      # Build script
├── deploy-to-vercel.sh  # Deployment script
└── generate-app-key.php # APP_KEY generator
```

## 🔍 Health Check

Cek status aplikasi:
```
https://your-domain.vercel.app/health
```

Response:
```json
{
  "status": "healthy",
  "timestamp": "2024-01-01T00:00:00+00:00",
  "environment": "production",
  "version": "1.0.0",
  "laravel": "ok",
  "app_name": "Your App Name"
}
```

## 🐛 Troubleshooting

### Common Issues

#### 1. 500 Internal Server Error
- ✅ Cek environment variables
- ✅ Pastikan APP_KEY sudah diset
- ✅ Cek database connection
- ✅ Lihat logs di Vercel dashboard

#### 2. Build Failed
- ✅ Pastikan semua dependencies terinstall
- ✅ Cek Node.js version compatibility
- ✅ Pastikan build script executable

#### 3. Assets Not Loading
- ✅ Cek Vite build output
- ✅ Pastikan public/build directory ada
- ✅ Cek route configuration di vercel.json

#### 4. Database Connection Error
- ✅ Cek database credentials
- ✅ Pastikan database accessible dari Vercel
- ✅ Cek firewall settings

### Debug Commands

```bash
# Cek logs
vercel logs

# Cek environment variables
vercel env ls

# Pull environment variables
vercel env pull .env.local

# Redeploy
vercel --prod
```

## 🚀 Performance Optimization

### 1. Caching
```bash
# Cache configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 2. Database
- ✅ Use connection pooling
- ✅ Optimize queries
- ✅ Use indexes

### 3. Assets
- ✅ Optimize images
- ✅ Use CDN (otomatis Vercel)
- ✅ Enable compression

## 🔒 Security

### 1. Environment Variables
- ✅ Never commit .env files
- ✅ Use Vercel environment variables
- ✅ Rotate secrets regularly

### 2. Application Security
- ✅ Set APP_DEBUG=false
- ✅ Use HTTPS (otomatis Vercel)
- ✅ Implement rate limiting
- ✅ Validate all inputs

### 3. Database Security
- ✅ Use strong passwords
- ✅ Enable SSL connections
- ✅ Restrict database access

## 📊 Monitoring

### 1. Vercel Analytics
- ✅ Enable Vercel Analytics
- ✅ Monitor performance metrics
- ✅ Track user behavior

### 2. Error Tracking
- ✅ Set up Sentry
- ✅ Monitor application errors
- ✅ Set up alerts

### 3. Database Monitoring
- ✅ Monitor query performance
- ✅ Track connection usage
- ✅ Set up alerts for downtime

## 🔄 CI/CD

### GitHub Actions Example
```yaml
name: Deploy to Vercel
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm install -g vercel
      - run: vercel --prod --token ${{ secrets.VERCEL_TOKEN }}
```

## 📚 Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com/)
- [Vercel PHP Runtime](https://github.com/vercel/vercel-php)

## 🤝 Support

Jika mengalami masalah:

1. 📖 Cek dokumentasi di atas
2. 🔍 Cari di GitHub Issues
3. 💬 Tanya di Laravel/Inertia.js Discord
4. 🐛 Report bug dengan detail lengkap

---

**Happy Deploying! 🚀**