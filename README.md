# gdit Documentation Website

A modern, interactive documentation website for [gdit](https://www.npmjs.com/package/gdit) — the CLI tool that brings Git-like workflows to Google Drive.

![gdit docs](https://img.shields.io/badge/gdit-docs-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- **Interactive Terminal Demo** — Try gdit commands right in the browser
- **Modern UI** — Dark theme with gradient accents and smooth animations
- **Responsive Design** — Works beautifully on desktop and mobile
- **Fast** — Built with Vite for instant HMR and optimized builds
- **Syntax Highlighting** — Beautiful code blocks with Prism

## 🚀 Tech Stack

- **React 18** — UI framework
- **TypeScript** — Type safety
- **Vite** — Build tool
- **Tailwind CSS v4** — Styling
- **Framer Motion** — Animations
- **React Router** — Routing
- **Prism React Renderer** — Syntax highlighting
- **Lucide React** — Icons

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/AnshumanMahi/gdit.site.git
cd gdit.site

# Install dependencies
npm install

# Start development server
npm run dev
```

## 🛠️ Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.tsx          # Navigation with dropdown
│   ├── Footer.tsx          # Site footer
│   ├── Terminal.tsx        # Animated terminal demo
│   ├── InteractiveTerminal.tsx  # Interactive CLI demo
│   ├── CodeBlock.tsx       # Syntax highlighted code
│   └── DocContent.tsx      # Documentation wrapper
├── pages/
│   ├── Landing.tsx         # Home page
│   ├── Docs.tsx            # Documentation layout
│   └── docs/
│       ├── Introduction.tsx
│       ├── Installation.tsx
│       ├── QuickStart.tsx
│       └── Commands.tsx
├── utils/
│   └── cn.ts               # Class name utility
├── App.tsx                 # Main app component
├── main.tsx                # Entry point
└── index.css               # Global styles
```

## 🎨 Design

The website features:

- **Bento Grid Layout** — Modern card-based feature sections
- **Gradient Accents** — Blue, purple, and pink color scheme
- **Glass Morphism** — Frosted glass effects on navbar
- **Micro Animations** — Subtle hover and scroll animations
- **Dark Theme** — Easy on the eyes

## 📖 Documentation Pages

- **Introduction** — Overview of gdit
- **Installation** — How to install gdit
- **Quick Start** — Get started in 5 minutes
- **Commands** — Complete CLI reference
- **Configuration** — Config file options
- **.gditignore** — File exclusion patterns
- **Security** — OAuth and token storage

## 🔗 Related

- [gdit on npm](https://www.npmjs.com/package/gdit)
- [gdit GitHub Repository](https://github.com/AnshumanMahi/gdit)

## 📄 License

MIT © [Anshuman Mahi](https://github.com/AnshumanMahi)
