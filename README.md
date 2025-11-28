# Yakubu T. Umar - Portfolio

A modern, responsive, and interactive portfolio website built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **Framer Motion**. This project showcases the work, skills, and services of Yakubu T. Umar, a Full Stack Developer and Entrepreneur.

## ✨ Features

-   **Modern Tech Stack**: Built on the latest Next.js 16 and React 19 for peak performance.
-   **Interactive UI**: Smooth animations with **Framer Motion** and 3D elements using **Three.js** / **React Three Fiber**.
-   **Dynamic Project Fetching**: Automatically showcases featured repositories from GitHub alongside manually curated projects.
-   **Responsive Design**: Fully responsive layout optimized for all devices (Mobile, Tablet, Desktop).
-   **Dark Mode Support**: Native dark mode integration with Tailwind CSS.
-   **Blog Integration**: Markdown-based blog system with syntax highlighting and reading time estimation.
-   **Performance Optimized**: Utilizing Next.js image optimization, font optimization, and static generation.
-   **SEO Ready**: Comprehensive meta tags, Open Graph support, and semantic HTML.

## 🛠 Technologies

-   **Framework**: [Next.js 16](https://nextjs.org/)
-   **Library**: [React 19](https://react.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **3D Graphics**: [Three.js](https://threejs.org/) & [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
-   **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
-   **Content**: Markdown (remark/rehype)
-   **Deployment**: Vercel / GitHub Pages

## 🚀 Getting Started

### Prerequisites

-   Node.js >= 18.17.0
-   npm >= 9.0.0

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/some19ice/some19ice-portfolio.git
    cd some19ice-portfolio
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📂 Project Structure

```
├── components/          # Reusable React components (UI, Sections, etc.)
├── data/               # Static data files
│   └── portfolio.js    # Local project definitions
├── pages/              # Next.js pages and routing
│   ├── blog/           # Blog pages
│   ├── projects/       # Project detail pages
│   └── index.js        # Landing page
├── public/             # Static assets (images, fonts, icons)
├── styles/             # Global styles and Tailwind directives
├── posts/              # Markdown blog posts
├── config.js           # Global configuration (Socials, GitHub settings)
└── tailwind.config.js  # Tailwind CSS configuration
```

## ⚙️ Configuration

### Global Settings
Edit `config.js` to update your personal information, social links, and GitHub settings:
```javascript
const config = {
    socialMedia: { ... },
    contactEmail: "some1me247@gmail.com",
    github: {
        username: "some19ice",
        selectedRepos: ["repo-name-1", "repo-name-2"], // Repos to fetch from GitHub
    },
    // ...
}
```

### Adding Projects
Projects can be added in two ways:
1.  **GitHub**: Add the repository name to `selectedRepos` in `config.js`.
2.  **Manual**: Add a new entry to the `portfolioProjects` array in `data/portfolio.js`.

## 📦 Scripts

-   `npm run dev`: Start the development server.
-   `npm run build`: Build the application for production.
-   `npm run start`: Start the production server.
-   `npm run lint`: Run ESLint checks.
-   `npm run deploy`: Deploy to GitHub Pages.

## 🌐 Deployment

The project is optimized for deployment on **Vercel** or **GitHub Pages**.

### Vercel (Recommended)
Push your code to a GitHub repository and import it into Vercel. It will automatically detect Next.js and configure the build settings.

### GitHub Pages
To deploy to GitHub Pages:
```bash
npm run deploy
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

-   **Email**: [some1me247@gmail.com](mailto:some1me247@gmail.com)
-   **LinkedIn**: [Yakubu T. Umar](https://www.linkedin.com/in/some19ice/)
-   **Twitter**: [@some19ice](https://twitter.com/some19ice)
-   **GitHub**: [@some19ice](https://github.com/some19ice)