#!/bin/bash
# Script to push to GitHub after creating the repository

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}GitHub Repository Setup${NC}"
echo ""
echo "Before running this script, create a new repository on GitHub:"
echo "1. Go to https://github.com/new"
echo "2. Repository name: ielts_template (or your preferred name)"
echo "3. Choose Public or Private"
echo "4. DO NOT initialize with README, .gitignore, or license"
echo "5. Click 'Create repository'"
echo ""
read -p "Enter your GitHub username: " GITHUB_USERNAME
read -p "Enter your repository name (default: ielts_template): " REPO_NAME
REPO_NAME=${REPO_NAME:-ielts_template}

echo ""
echo -e "${GREEN}Adding remote and pushing...${NC}"

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "Remote 'origin' already exists. Updating..."
    git remote set-url origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
else
    git remote add origin "https://github.com/${GITHUB_USERNAME}/${REPO_NAME}.git"
fi

# Rename branch to main if needed
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" = "master" ]; then
    git branch -M main
fi

# Push to GitHub
git push -u origin main 2>/dev/null || git push -u origin master

echo ""
echo -e "${GREEN}Done! Your repository is now on GitHub.${NC}"
echo "Visit: https://github.com/${GITHUB_USERNAME}/${REPO_NAME}"
