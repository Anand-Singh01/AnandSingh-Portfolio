#!/bin/bash

# Exit on any error
set -e

echo "▶Building the site with Vite..."
bun run build

echo "Moving build to docs/..."
rm -rf docs
mv dist docs

echo "Committing changes to Git..."
git add .
git commit -m "Deploy: $(date +'%Y-%m-%d %H:%M:%S')"
echo "Pushing changes to GitHub..."
git push origin main

echo "Deployed successfully to GitHub Pages!"