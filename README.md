# Portfolio - Yakubu T. Umar

A modern, responsive portfolio website built with Next.js 16, React 19, and Tailwind CSS. This portfolio showcases the work and services of Yakubu T. Umar, a Full Stack Developer and Entrepreneur specializing in React, Node.js, and Web3 technologies.

## ✨ Features

- **Modern Stack**: Built with Next.js 16, React 19, and Tailwind CSS
- **Stunning Visual Design**: Clean, modern interface with gradient accents and smooth animations
- **Fixed Navigation**: Glassmorphism navigation bar with backdrop blur effects
- **Hero Section**: Split-screen layout with animated floating elements and gradient borders
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Seamless toggle between light and dark themes
- **Interactive Cards**: Hover effects with transforms, shadows, and color transitions
- **Portfolio Showcase**: Grid layout with image overlays and action buttons on hover
- **Services Section**: Modern card design with gradient icons and tool tags
- **Contact Integration**: Professional contact section with social media integration
- **Smooth Scrolling**: Enhanced UX with smooth scroll behavior
- **Performance Optimized**: Fast loading with optimized images and fonts
- **Security Headers**: Enhanced security with proper HTTP headers
- **SEO Optimized**: Comprehensive meta tags and Open Graph support

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

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

## 🛠️ Technologies Used

- **Frontend**: Next.js 16, React 19, Tailwind CSS
- **Icons**: React Icons
- **Fonts**: Custom fonts (Burtons, Operator Mono)
- **Deployment**: GitHub Pages compatible
- **Linting**: ESLint with Next.js config and accessibility rules
- **Code Formatting**: Prettier

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 🎨 Customization

### Adding New Projects

Edit `data/portfolio.js` to add new projects:

```javascript
{
    id: 7,
    title: "Your Project Name",
    description: "Project description...",
    image: "/your-image.png",
    technologies: ["React", "Node.js"],
    demoUrl: "https://your-demo.com",
    codeUrl: "https://github.com/your-repo",
    category: "Web App"
}
```

### Updating Configuration

Edit `config.js` to update social media links and other settings:

```javascript
const config = {
    socialMedia: {
        twitter: "https://twitter.com/yourusername",
        linkedin: "https://linkedin.com/in/yourusername",
        github: "https://github.com/yourusername",
    },
    resumeUrl: "your-resume-url",
    fundMeUrl: "your-funding-url"
}
```

## 🔧 Recent Improvements

- ✅ Updated to Next.js 16 and React 19
- ✅ Fixed all ESLint warnings and errors
- ✅ Added comprehensive portfolio projects section
- ✅ Implemented contact section with social links
- ✅ Added security headers and performance optimizations
- ✅ Fixed deprecated Image component usage
- ✅ Enhanced SEO and accessibility
- ✅ Resolved all security vulnerabilities

## 🌐 Deployment

### GitHub Pages

```bash
npm run deploy
```

### Vercel (Recommended)

Deploy easily on [Vercel Platform](https://vercel.com/new) - the platform made by the creators of Next.js.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📧 Contact

- **Email**: some19ice@example.com
- **LinkedIn**: [some19ice](https://linkedin.com/in/some19ice)
- **Twitter**: [@some19ice](https://twitter.com/some19ice)
- **GitHub**: [some19ice](https://github.com/some19ice)
