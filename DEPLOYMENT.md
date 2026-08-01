# Deployment Instructions for GitHub Pages

## Setup Steps

### 1. Install Git (if not already installed)
Download and install Git from: https://git-scm.com/download/win

### 2. Create a GitHub Repository
1. Go to https://github.com/new
2. Create a new repository (can be public or private)
3. **Do NOT initialize with README, .gitignore, or license** (since you already have a local repo)

### 3. Push Your Code to GitHub
Open PowerShell or Command Prompt in your project folder and run:

```powershell
# Add all your files
git add .

# Commit your changes
git commit -m "Initial commit: Romantic proposal website"

# Add your GitHub repository as remote (replace with your actual repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Note:** If your default branch is `master` instead of `main`, use:
```powershell
git branch -M main
git push -u origin main
```

### 4. Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source", select **GitHub Actions**
5. The deployment will start automatically

### 5. Access Your Website
After the deployment completes (check the **Actions** tab), your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
```

If you set up a custom domain, it will be available there instead.

## Local Development

To run the website locally:

```powershell
# Set environment variables and start dev server
$env:PORT=3000; $env:BASE_PATH='/'; pnpm --filter @workspace/girlfriend-proposal run dev
```

Or simply:
```powershell
cd artifacts/girlfriend-proposal
pnpm run dev
```

The site will be available at: http://localhost:3000/

## Making Updates

After making changes to your website:

```powershell
git add .
git commit -m "Description of your changes"
git push
```

The GitHub Action will automatically rebuild and redeploy your site!

## Troubleshooting

### If the deployment fails:
1. Check the **Actions** tab in your GitHub repository
2. Click on the failed workflow to see error details
3. Common issues:
   - Missing pnpm version in package.json
   - Node version compatibility
   - Build errors (test locally first with `pnpm run build`)

### If you need to rebuild without changes:
1. Go to **Actions** tab
2. Click on "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button

## Custom Domain (Optional)

To use a custom domain (e.g., myproposal.com):
1. Go to your repository Settings → Pages
2. Enter your custom domain
3. Add DNS records as instructed by GitHub
4. Wait for DNS propagation (can take up to 24 hours)

---

Your romantic proposal website is now ready to share! ❤️
