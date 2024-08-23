#!/bin/bash
cd /path/to/deployment
npm install
pm2 stop all
pm2 start app.js --name "cloud-run-demo"
