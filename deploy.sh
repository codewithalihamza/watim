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

echo "==> Installing dependencies (pnpm install --frozen-lockfile)"
pnpm install --frozen-lockfile

echo "==> Building"
pnpm run build

echo "==> Restarting pm2 process: $PM2_APP"
pm2 restart "$PM2_APP" 2>/dev/null || pm2 start npm --name "$PM2_APP" -- start
pm2 save

echo "==> Done. Current status:"
pm2 status "$PM2_APP"
