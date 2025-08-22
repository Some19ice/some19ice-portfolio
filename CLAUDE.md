# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a modern portfolio website built with Next.js 15, React 19, and Tailwind CSS. The portfolio showcases the work and services of Yakubu T. Umar, a Full Stack Developer and Entrepreneur specializing in React, Node.js, and Web3 technologies.

## Commonly Used Commands

### Development
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Deployment
- `npm run deploy` - Deploy to GitHub Pages

## Code Architecture

### Project Structure
```
├── components/          # Reusable React components
│   ├── ContactSection.js
│   ├── PortfolioIntro.js
│   ├── ProjectCard.js
│   └── ServiceCard.js
├── data/               # Data files
│   └── portfolio.js    # Portfolio projects data
├── pages/              # Next.js pages
│   ├── _app.js
│   ├── _document.js
│   ├── index.js        # Main homepage
│   └── api/
├── public/             # Static assets
├── styles/             # CSS styles
│   └── globals.css
├── config.js           # Configuration file
└── next.config.js      # Next.js configuration
```

### Key Components
1. **Pages**: The main page is `pages/index.js` which contains all sections of the portfolio
2. **Components**: Reusable components are in the `components/` directory
3. **Data**: Portfolio project data is in `data/portfolio.js`
4. **Configuration**: Site configuration is in `config.js`

### Technology Stack
- **Frontend**: Next.js 15, React 19, Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Custom fonts (Burtons, Operator Mono)
- **Deployment**: GitHub Pages compatible
- **Linting**: ESLint with Next.js config and accessibility rules
- **Code Formatting**: Prettier

### Customization Points
1. **Adding New Projects**: Edit `data/portfolio.js` to add new projects
2. **Updating Configuration**: Edit `config.js` to update social media links and other settings
3. **Styling**: Uses Tailwind CSS with custom configuration in `tailwind.config.js`

### Key Features
- Dark mode toggle
- Responsive design optimized for all devices
- Portfolio showcase with project cards
- Services section with detailed offerings
- Contact section with social media integration
- SEO optimization with meta tags and Open Graph support
- Performance optimizations and security headers