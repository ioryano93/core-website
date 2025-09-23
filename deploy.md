# Deployment Guide

This project is configured to automatically deploy to AWS S3 using GitHub Actions.

## Prerequisites

1. **AWS Account** with S3 and CloudFront access
2. **S3 Bucket** for hosting the static site
3. **CloudFront Distribution** (optional, for CDN)
4. **GitHub Secrets** configured

## Setup Instructions

### 1. Create S3 Bucket

```bash
# Create S3 bucket for static website hosting
aws s3 mb s3://your-portfolio-bucket-name

# Enable static website hosting
aws s3 website s3://your-portfolio-bucket-name --index-document index.html --error-document index.html
```

### 2. Configure Bucket Policy

Create a bucket policy to allow public read access:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::your-portfolio-bucket-name/*"
        }
    ]
}
```

### 3. Set up CloudFront (Optional)

1. Create a CloudFront distribution
2. Set the origin to your S3 bucket
3. Configure custom error pages (404 → index.html for SPA routing)
4. Note the Distribution ID

### 4. Configure GitHub Secrets

Go to your GitHub repository → Settings → Secrets and variables → Actions

Add the following secrets:

- `AWS_ACCESS_KEY_ID`: Your AWS access key
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret key
- `S3_BUCKET_NAME`: Your S3 bucket name (e.g., `your-portfolio-bucket-name`)
- `CLOUDFRONT_DISTRIBUTION_ID`: Your CloudFront distribution ID (optional)

### 5. Deploy

The deployment will automatically trigger when you push to the `main` branch.

## Manual Deployment

You can also deploy manually:

```bash
# Build the project
npm run build

# Deploy to S3
aws s3 sync dist/ s3://your-bucket-name --delete

# Invalidate CloudFront (if using)
aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"
```

## Environment Variables

The workflow uses the following environment variables:

- `AWS_ACCESS_KEY_ID`: AWS access key for authentication
- `AWS_SECRET_ACCESS_KEY`: AWS secret key for authentication
- `S3_BUCKET_NAME`: Target S3 bucket name
- `CLOUDFRONT_DISTRIBUTION_ID`: CloudFront distribution ID for cache invalidation

## Workflow Features

- **Automatic builds** on push to main branch
- **S3 sync** with `--delete` flag to remove old files
- **CloudFront invalidation** to clear CDN cache
- **Node.js caching** for faster builds
- **Security** using GitHub secrets for sensitive data
