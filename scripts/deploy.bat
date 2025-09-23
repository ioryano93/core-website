@echo off
REM Deploy script for Windows
REM Usage: deploy.bat [bucket-name] [region]

setlocal enabledelayedexpansion

set BUCKET_NAME=%1
set AWS_REGION=%2

if "%BUCKET_NAME%"=="" set BUCKET_NAME=your-portfolio-bucket
if "%AWS_REGION%"=="" set AWS_REGION=us-east-1

echo 🚀 Starting deployment to S3...

REM Check if AWS CLI is installed
aws --version >nul 2>&1
if errorlevel 1 (
    echo ❌ AWS CLI is not installed. Please install it first.
    exit /b 1
)

REM Check if bucket name is provided
if "%BUCKET_NAME%"=="your-portfolio-bucket" (
    echo ❌ Please provide a bucket name: deploy.bat my-bucket-name
    exit /b 1
)

REM Build the project
echo 📦 Building project...
call npm run build

REM Check if build was successful
if not exist "dist" (
    echo ❌ Build failed. dist directory not found.
    exit /b 1
)

REM Deploy to S3
echo ☁️  Deploying to S3 bucket: %BUCKET_NAME%
aws s3 sync dist/ s3://%BUCKET_NAME% --delete --exact-timestamps

REM Get the website URL
set WEBSITE_URL=http://%BUCKET_NAME%.s3-website-%AWS_REGION%.amazonaws.com
echo ✅ Deployment completed successfully!
echo 🌐 Your site is available at: %WEBSITE_URL%

REM Open in browser
start %WEBSITE_URL%
