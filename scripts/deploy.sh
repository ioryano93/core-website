#!/bin/bash

# Deploy script for local testing
# Usage: ./scripts/deploy.sh [bucket-name] [region]

set -e

BUCKET_NAME=${1:-"www.ryanoxtoby.io"}
AWS_REGION=${2:-"eu-west-1"}

echo "🚀 Starting deployment to S3..."

# Check if AWS CLI is installed
if ! command -v aws &> /dev/null; then
    echo "❌ AWS CLI is not installed. Please install it first."
    exit 1
fi

# Check if bucket name is provided
if [ "$BUCKET_NAME" = "www.ryanoxtoby.io" ]; then
    echo "❌ Please provide a bucket name: ./scripts/deploy.sh my-bucket-name"
    exit 1
fi

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed. dist directory not found."
    exit 1
fi

# Deploy to S3
echo "☁️  Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync dist/ s3://$BUCKET_NAME --delete --exact-timestamps

# Get the website URL
WEBSITE_URL="http://$BUCKET_NAME.s3-website-$AWS_REGION.amazonaws.com"
echo "✅ Deployment completed successfully!"
echo "🌐 Your site is available at: $WEBSITE_URL"

# Optional: Open in browser (macOS/Linux)
if command -v open &> /dev/null; then
    open $WEBSITE_URL
elif command -v xdg-open &> /dev/null; then
    xdg-open $WEBSITE_URL
fi
