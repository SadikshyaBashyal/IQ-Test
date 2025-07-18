# IQ Test App

A modern IQ Test web application built with React and Vite. This app features multiple cognitive test sections, beautiful UI, and is deployed to GitHub Pages.

---

## 🚀 Features
- Multiple test categories: Verbal, Logical, Memory, Spatial
- Sample and full test modes
- Responsive, modern design
- Built with React 19, Vite 7, and React Router v7
- Deployed to GitHub Pages

---

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SadikshyaBashyal/IQ-Test.git
cd IQ-Test/IQ
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run locally
```bash
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Project Structure
```
IQ/
  src/
    App.jsx           # Main app with routing
    components/       # Navbar, shared UI
    Pages/            # Landing, Contact, Test, etc.
    assets/           # Images, fonts
  public/             # Static assets
  vite.config.js      # Vite config (base set for GitHub Pages)
  package.json        # Scripts, dependencies
```

---

## 🌐 Deployment (GitHub Pages)

### 1. Vite Config
Make sure `vite.config.js` contains:
```js
export default defineConfig({
  base: '/IQ-Test/', // Required for GitHub Pages
  plugins: [react()],
})
```

### 2. React Router
Use **HashRouter** in `App.jsx`:
```jsx
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
// ...
<Router>
  {/* routes */}
</Router>
```
**Do NOT set a `basename` with HashRouter.**

### 3. package.json
Set the homepage field:
```json
"homepage": "https://sadikshyabashyal.github.io/IQ-Test/"
```

### 4. Build and Deploy
```bash
npm run build
npm run deploy
```
This uses `gh-pages` to publish the `dist` folder to GitHub Pages.

---

## ❗ Important Notes
- **Always use HashRouter for GitHub Pages** to avoid 404 errors on reloads.
- **All navigation and shared links should use the hash URL** (e.g., `https://sadikshyabashyal.github.io/IQ-Test/#/memory`).
- If you see only the background and no content, check that you have removed the `basename` from HashRouter.
- For local development, everything works as normal at `/`.

---


## AI Used
- To find the questions and understanding the sections of the IQ
- To fix errors and bugs 