#!/bin/bash

echo "🚀 Redeploying to Vercel with updated PHP runtime configuration..."

# Remove existing .vercel directory if it exists
if [ -d ".vercel" ]; then
    echo "📁 Removing existing .vercel directory..."
    rm -rf .vercel
fi

# Remove existing vercel deployment
echo "🗑️  Removing existing Vercel project link..."
vercel remove topup-app --yes

# Link to the project again
echo "🔗 Linking to Vercel project..."
vercel link

# Deploy to production
echo "🚀 Deploying to production..."
vercel --prod

echo "✅ Deployment completed!"
echo "🌐 Your app should now be available at the provided URL"