---
description: Optimize app performance to reduce load time
---

# Optimize Performance Workflow

## Quick Start Implementation (Priority Order)

### Step 1: Remove Unused Imports (5 minutes)
```bash
# Edit pages/index.js and remove these unused imports:
# - import code from "../public/code.png"
# - import design from "../public/design.png"  
# - import consulting from "../public/consulting.png"
# - import PortfolioIntro from "../components/PortfolioIntro"
# - import ServiceCard from "../components/ServiceCard"
# - import { Separator } from "@/components/ui/separator"
```

### Step 2: Remove Unused Dependencies (2 minutes)
// turbo
```bash
npm uninstall react-big-calendar
```

### Step 3: Code-Split 3D Libraries (Critical - 30 minutes)

**Add dynamic imports to `pages/index.js`:**
```javascript
// At the top of pages/index.js, add:
import dynamic from 'next/dynamic'

// Replace the static Canvas import with:
const Canvas = dynamic(
  () => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })),
  { 
    ssr: false,
    loading: () => <div className="h-24 w-full animate-pulse bg-muted/20 rounded" />
  }
)

// Replace the static View import with:
const View = dynamic(
  () => import('@react-three/drei').then(mod => ({ default: mod.View })),
  { ssr: false }
)

// Replace static 3D component imports:
const CircuitLines = dynamic(
  () => import('../components/AnimatedLines').then(mod => ({ default: mod.CircuitLines })),
  { ssr: false }
)

const RadarSweep = dynamic(
  () => import('../components/AnimatedLines').then(mod => ({ default: mod.RadarSweep })),
  { ssr: false }
)

const BackgroundGrid = dynamic(
  () => import('../components/AnimatedLines').then(mod => ({ default: mod.BackgroundGrid })),
  { ssr: false }
)
```

### Step 4: Add Resource Hints (2 minutes)

**Create or edit `pages/_document.js`:**
```javascript
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://opengraph.githubassets.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
```

### Step 5: Build and Test
// turbo
```bash
npm run build
```

### Step 6: Run Local Server
```bash
npm run start
```

### Step 7: Test Performance
Open Chrome DevTools → Lighthouse → Run Performance Audit

**Expected Results:**
- First Load JS: 354 KB → ~200 KB
- Performance Score: 65 → 85+
- Load time: 6-10s → 3-4s (on 3G)

## Advanced Optimizations (Optional)

### Option 1: Cache GitHub Data Locally

Create `scripts/fetch-github-projects.js`:
```javascript
const fs = require('fs')
const path = require('path')

async function fetchGitHubProjects() {
  // Fetch from GitHub API
  const response = await fetch('https://api.github.com/users/some19ice/repos?per_page=12&sort=updated')
  const repos = await response.json()
  
  // Save to data/github-cache.json
  const cachePath = path.join(process.cwd(), 'data', 'github-cache.json')
  fs.writeFileSync(cachePath, JSON.stringify(repos, null, 2))
}

fetchGitHubProjects()
```

Run before build:
```bash
node scripts/fetch-github-projects.js
npm run build
```

### Option 2: Download GitHub OpenGraph Images

Create `scripts/download-project-images.js`:
```javascript
const fs = require('fs')
const path = require('path')
const https = require('https')

async function downloadImage(url, filepath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      const fileStream = fs.createWriteStream(filepath)
      response.pipe(fileStream)
      fileStream.on('finish', () => {
        fileStream.close()
        resolve()
      })
    }).on('error', reject)
  })
}

// Use in getStaticProps to download images to /public/project-previews/
```

## Validation Checklist

- [ ] Build succeeds without errors
- [ ] Homepage loads and displays correctly
- [ ] 3D animations appear (just later, after page load)
- [ ] No console errors
- [ ] Lighthouse score improved by 15-20 points
- [ ] First Load JS reduced by 100+ KB
- [ ] Page feels noticeably faster

## Troubleshooting

**Issue**: 3D animations don't appear
**Fix**: Check browser console for errors, ensure `ssr: false` is set

**Issue**: Build fails with "Cannot find module"
**Fix**: Clear .next folder and rebuild: `rm -rf .next && npm run build`

**Issue**: Hydration errors
**Fix**: Ensure all dynamic imports have `ssr: false`
