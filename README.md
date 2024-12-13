# Jian Liao's Blog

This repository contains the source code for Jian Liao's personal blog. The blog showcases various technical articles, tutorials, and projects related to full-stack development, DevOps, and GenAI.

## Tech Stack

- **Next.js**: 15.1.0 - A React framework for building static and server-rendered applications.
- **TypeScript**: 5.7.2 - A strongly typed programming language that builds on JavaScript.
- **MDX**: 3.1.0 - A format that lets you seamlessly write JSX in your Markdown documents.
- **Tailwind CSS**: 4.0.0-beta.6 - A utility-first CSS framework for rapid UI development.
- **React**: 19.0.1 - A JavaScript library for building user interfaces.
- **Next Themes**: 0.4.4 - A library for managing themes in Next.js applications.
- **KaTeX**: 0.16.15 - A library for rendering LaTeX math in web pages.
- **React Icons**: 5.3.0 - A collection of popular icons for React applications.

## Features

- **MDX Support**: Write blog posts using MDX, allowing for rich content with React components.
- **Dark Mode**: Toggle between light and dark themes.
- **Responsive Design**: Optimized for various screen sizes and devices.
- **SEO Optimized**: Metadata and Open Graph tags for better search engine visibility.
- **Syntax Highlighting**: Code blocks with syntax highlighting and line numbers.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/jianliao/jianliao.github.io.git
cd jianliao.github.io
npm install
```

## Running the Development Server

To run the development server, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```

This will create an optimized production build in the `.next` directory.

## Deployment

The site is deployed using GitHub Pages. Follow these steps to deploy:

1. Ensure the repository is up-to-date with the latest changes.
2. Build the project for production using `npm run build`.
3. Export the static site using `npm run export`.
4. Commit and push the changes to the `main` branch.
5. GitHub Pages will automatically deploy the site from the `main` branch via Github action.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
