#!/bin/bash

# Install PHP dependencies
composer install --no-dev --optimize-autoloader

# Install Node.js dependencies
npm ci

# Build assets
npm run build

# Create necessary directories
mkdir -p storage/framework/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/logs
mkdir -p bootstrap/cache

# Set permissions
chmod -R 775 storage
chmod -R 775 bootstrap/cache

# Generate application key if not exists
php artisan key:generate --force

# Cache configuration for Vercel
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Copy public assets to the correct location
cp -r public/* public/

echo "Build completed successfully!"