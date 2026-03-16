# livoiAI

A lightweight React + TypeScript app scaffolded with Vite, designed as a foundation for build-first UI experience and fast iteration.

## 🧩 Tech stack

- React 18+ (JSX + Components)
- TypeScript
- Vite (fast HMR, build + preview)
- ESLint (recommended for code quality)

## 📁 Project layout

- `src/main.tsx`: application entrance
- `src/App.tsx`: app root
- `src/index.css` + `src/App.css`: base styles
- `src/component/Navbar.tsx`: navbar component
- `src/component/HeroSection.tsx`: hero section component

## 🚀 Getting started

```bash
git clone https://github.com/your-org/livoai.git
cd livoiAI
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## 📦 Scripts

- `npm run dev` - development server
- `npm run build` - production bundle (`dist/`)
- `npm run preview` - serve production build locally
- `npm run lint` - run ESLint (when configured)

## ✅ Recommended setup

1. Enable type-aware ESLint rules in `eslint.config.js`:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      // or tseslint.configs.strictTypeChecked
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

2. Add optional React lint plugins:

```js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

exte```nds: [
  reactX.configs['recommended-typescript'],
  reactDom.configs.recommended,
]
```


## 🌐 Deployment

### Vercel
- Build command: `npm run build`
- Output dir: `dist`



## 🙌 Contributing

1. Fork repository
2. Create branch: `feature/your-feature`
3. `npm install`
4. `npm run lint` + `npm run test`
5. Open PR to `main`


# livoai
# livoai
# livoai
# livoai
# livoai
# livoai
