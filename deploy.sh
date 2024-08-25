#!/bin/bash
set -e
set -x

# 確保我們在正確的目錄中
cd ~/cloudbuild_test_control_VM

# 安裝依賴
npm install

# 停止所有正在運行的 PM2 進程
pm2 stop all || true

# 啟動應用
pm2 start app.js --name "cloud-run-demo"

# 保存 PM2 進程列表，以便在系統重啟時自動啟動
pm2 save

