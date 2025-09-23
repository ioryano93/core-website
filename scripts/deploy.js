#!/usr/bin/env node

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

const BUCKET_NAME = process.argv[2];
const AWS_REGION = process.argv[3] || 'us-east-1';

if (!BUCKET_NAME || BUCKET_NAME === 'your-portfolio-bucket') {
  console.error('❌ Please provide a bucket name: npm run deploy my-bucket-name');
  process.exit(1);
}

console.log('🚀 Starting deployment to S3...');

// Check if AWS CLI is installed
try {
  execSync('aws --version', { stdio: 'pipe' });
} catch (error) {
  console.error('❌ AWS CLI is not installed. Please install it first.');
  process.exit(1);
}

// Build the project
console.log('📦 Building project...');
try {
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Build failed.');
  process.exit(1);
}

// Check if build was successful
if (!existsSync('dist')) {
  console.error('❌ Build failed. dist directory not found.');
  process.exit(1);
}

// Deploy to S3
console.log(`☁️  Deploying to S3 bucket: ${BUCKET_NAME}`);
try {
  execSync(`aws s3 sync dist/ s3://${BUCKET_NAME} --delete --exact-timestamps`, { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Deployment failed.');
  process.exit(1);
}

const websiteUrl = `http://${BUCKET_NAME}.s3-website-${AWS_REGION}.amazonaws.com`;
console.log('✅ Deployment completed successfully!');
console.log(`🌐 Your site is available at: ${websiteUrl}`);

// Try to open in browser
try {
  const { platform } = process;
  if (platform === 'darwin') {
    execSync(`open ${websiteUrl}`);
  } else if (platform === 'win32') {
    execSync(`start ${websiteUrl}`);
  } else {
    execSync(`xdg-open ${websiteUrl}`);
  }
} catch (error) {
  // Ignore browser opening errors
}
