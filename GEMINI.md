# Project: some19ice-portfolio

## Project Overview

This is a modern, responsive portfolio website for Yakubu T. Umar, a Full Stack Developer and Entrepreneur. It's built with Next.js, React, and Tailwind CSS, and showcases his work, services, and contact information. The portfolio dynamically fetches featured projects from the owner's GitHub profile, combining them with a curated list of projects defined locally. It features a clean, modern design with dark mode, smooth animations, and a professional layout.

## Technologies Used

*   **Framework**: Next.js
*   **UI Library**: React
*   **Styling**: Tailwind CSS
*   **Icons**: React Icons
*   **Deployment**: GitHub Pages, Vercel

## Building and Running

To get the development environment running, use the following commands:

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

The application will be available at `http://localhost:3000`.

### Other Scripts

*   `npm run build`: Builds the application for production.
*   `npm run start`: Starts a production server.
*   `npm run lint`: Lints the codebase using ESLint.
*   `npm run deploy`: Deploys the application to GitHub Pages.

## Development Conventions

*   **Styling**: The project uses Tailwind CSS for styling. Configuration can be found in `tailwind.config.js`. Global styles are in `styles/globals.css`.
*   **Components**: Reusable React components are located in the `components/` directory.
*   **Data**: Portfolio project data is stored in `data/portfolio.js`. This file can be edited to add or modify projects.
*   **Configuration**: The main configuration is in `config.js`, which includes social media links and other settings. Next.js specific configuration is in `next.config.js`.
*   **Deployment**: The project is configured for deployment on GitHub Pages and Vercel. The `next.config.js` file is set up for static export to GitHub Pages.

## Adding New Projects

There are two ways to add projects to the portfolio:

1.  **Local Projects**: Add a new project object to the `portfolioProjects` array in `data/portfolio.js`. This is ideal for projects that are not on GitHub.
2.  **GitHub Projects**: The portfolio automatically fetches your public repositories from GitHub. You can configure which repositories are fetched in the `config.js` file. The `getStaticProps` function in `pages/index.js` contains the logic for fetching and filtering the repositories.