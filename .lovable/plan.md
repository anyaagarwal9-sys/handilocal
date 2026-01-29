

# Use Hero Crafts Image for Website Icon and Social Media

## Overview
Replace the current favicon and Open Graph images with the `hero-crafts.png` image to ensure HandiLocal branding appears in browser tabs and Google search results.

## Current State
- Favicon is using an external Google storage URL pointing to `IMG_6233.JPG`
- Open Graph/Twitter images also use external storage URLs
- The `hero-crafts.png` image already exists in `public/images/hero-crafts.png`

## What Will Change

### Files to Modify

| File | Changes |
|------|---------|
| `public/favicon.png` | Copy from `public/images/hero-crafts.png` |
| `public/og-image.png` | Copy from `public/images/hero-crafts.png` for social sharing |
| `index.html` | Update favicon and image meta tag URLs to local paths |

### index.html Updates

Current external URLs will be replaced with local paths:

```text
Before:
<link rel="icon" href="https://storage.googleapis.com/..." />
<meta property="og:image" content="https://storage.googleapis.com/..." />
<meta name="twitter:image" content="https://storage.googleapis.com/..." />

After:
<link rel="icon" type="image/png" href="/favicon.png" />
<meta property="og:image" content="https://handilocal.lovable.app/og-image.png" />
<meta name="twitter:image" content="https://handilocal.lovable.app/og-image.png" />
```

## Implementation Steps

1. **Copy hero-crafts.png to favicon.png** - Place in public folder root for browser tab icon
2. **Copy hero-crafts.png to og-image.png** - Place in public folder root for social media previews
3. **Update index.html** - Change all favicon and image references to use local paths
4. **Remove old favicon.ico** - Delete the default Lovable favicon

## After Publishing

Once these changes are published:
- Browser tabs will immediately show the hero crafts image
- New social media shares will use the hero crafts image
- **Google search results will take 1-4 weeks to update** - You can speed this up by requesting re-indexing in Google Search Console

