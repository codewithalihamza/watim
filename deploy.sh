#!/usr/bin/env bash
# Deploy watim: pull latest main, install, build, restart the pm2 process.
# Usage: ./deploy.sh
# `set -e` aborts on the first failure, so a broken build never restarts pm2.
set -euo pipefail

APP_DIR="/var/www/my-next-app"
PM2_APP="watim"

echo "==> Deploying $PM2_APP from $APP_DIR"
cd "$APP_DIR"

echo "==> Pulling latest main"
git pull origin main

echo "==> Installing dependencies (npm ci)"
npm ci

echo "==> Building"
npm run build

echo "==> Restarting pm2 process: $PM2_APP"
pm2 restart "$PM2_APP"

echo "==> Done. Current status:"
pm2 status "$PM2_APP"
