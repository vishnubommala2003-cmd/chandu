# OG Streetwear Component React Project

Fresh component-based React/Vite project.

## Run

```bash
npm install
npm run dev
```

## Structure

```text
src/App.jsx
src/data/storeData.js
src/pages/HomePage.jsx
src/pages/RoutePage.jsx
src/components/layout/Header.jsx
src/components/layout/Footer.jsx
src/components/ui/SplashScreen.jsx
src/components/ui/ProductCard.jsx
src/components/ui/PageHero.jsx
src/components/sections/HeroSection.jsx
src/components/sections/PromiseStrip.jsx
src/components/sections/CollectionsSection.jsx
src/components/sections/ProductsSection.jsx
src/components/sections/LookbookSection.jsx
src/components/sections/CommunitySection.jsx
src/components/sections/NewsletterSection.jsx
```

## Add Hero Video Later

The video tag is intentionally empty in:

```text
src/components/sections/HeroSection.jsx
```

When your video is ready, put it in:

```text
public/og-vid.mp4
```

Then replace:

```jsx
<source src="" type="video/mp4" />
```

with:

```jsx
<source src="/og-vid.mp4" type="video/mp4" />
```
