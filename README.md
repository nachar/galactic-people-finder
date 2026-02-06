# 🌌 Galactic People Finder

A simple and elegant Star Wars character search application built with Lit Element and Vite.

## ✨ Features

- **Search Characters**: Find your favorite Star Wars characters by name
- **Character Details**: View detailed information including name, birth year, and gender
- **Native Dialog**: Uses HTML native `<dialog>` element for modals
- **Responsive Design**: Clean, minimalist interface that works on all devices

## 🛠️ Tech Stack

- **[Lit](https://lit.dev/)** - Fast, lightweight web components
- **[Vite](https://vitejs.dev/)** - Next generation frontend tooling
- **[SWAPI](https://swapi.dev/)** - The Star Wars API
- **ESLint + Prettier** - Code linting and formatting

## 📋 Prerequisites

- Node.js 22.x or higher

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

```bash
yarn install
```

```bash
pnpm install
```

## 📜 Available Scripts

### Development

Start the development server:

```bash
npm run dev
```

```bash
yarn dev
```

```bash
pnpm dev
```

### Build

Build for production:

```bash
npm run build
```

```bash
yarn build
```

```bash
pnpm build
```

### Preview

Preview the production build:

```bash
npm run preview
```

```bash
yarn preview
```

```bash
pnpm preview
```

### Linting & Formatting

Run ESLint:

```bash
npm run lint
```

Fix ESLint errors automatically:

```bash
npm run lint:fix
```

Format code with Prettier:

```bash
npm run format
```

Check formatting:

```bash
npm run format:check
```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── search-bar.js
│   └── character-list.js
├── pages/              # Page-level components
│   └── app-main.js
├── services/           # API services
│   └── swapi-service.js
├── controllers/        # Reactive controllers
│   └── request-controller.js
└── global/             # Global constants
    └── constants.js
```

## 🎨 Architecture

The app uses a simple component-based architecture:

1. **app-main**: Main container that manages state and coordinates components
2. **search-bar**: Input component that emits search events
3. **character-list**: Displays search results with clickable items
4. **RequestController**: Custom Lit controller for handling async requests
