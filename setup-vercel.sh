#!/bin/bash

echo "🚀 Setting up Laravel project for Vercel deployment..."

# Check if we're in a Laravel project
if [ ! -f "artisan" ]; then
    echo "❌ Error: This doesn't appear to be a Laravel project (artisan file not found)"
    exit 1
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "📝 Creating .env file from .env.example..."
    cp .env.example .env
fi

# Generate APP_KEY if not exists
if ! grep -q "APP_KEY=base64:" .env; then
    echo "🔑 Generating APP_KEY..."
    if command -v php &> /dev/null; then
        php generate-app-key.php >> .env
    else
        echo "⚠️  PHP not found. Please generate APP_KEY manually:"
        echo "   php generate-app-key.php"
    fi
fi

# Install dependencies
echo "📦 Installing PHP dependencies..."
if command -v composer &> /dev/null; then
    composer install --no-dev --optimize-autoloader
else
    echo "⚠️  Composer not found. Please install dependencies manually:"
    echo "   composer install --no-dev --optimize-autoloader"
fi

echo "📦 Installing Node.js dependencies..."
if command -v npm &> /dev/null; then
    npm ci
else
    echo "⚠️  npm not found. Please install dependencies manually:"
    echo "   npm ci"
fi

# Build assets
echo "🔨 Building assets..."
if command -v npm &> /dev/null; then
    npm run build
else
    echo "⚠️  npm not found. Please build assets manually:"
    echo "   npm run build"
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p storage/framework/cache
mkdir -p storage/framework/sessions
mkdir -p storage/framework/views
mkdir -p storage/logs
mkdir -p bootstrap/cache

# Set permissions
echo "🔐 Setting permissions..."
chmod -R 775 storage
chmod -R 775 bootstrap/cache

# Make scripts executable
echo "🔧 Making scripts executable..."
chmod +x vercel-build.sh
chmod +x deploy-to-vercel.sh

echo "✅ Setup completed!"
echo ""
echo "📋 Next steps:"
echo "1. Set up your database"
echo "2. Configure environment variables in Vercel dashboard"
echo "3. Deploy using: ./deploy-to-vercel.sh"
echo ""
echo "📚 For detailed instructions, see README_VERCEL.md"