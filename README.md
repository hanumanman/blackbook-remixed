# Blackbook

A modern novel reading platform built with React Router and TypeScript.

## Features

- 🚀 Server-side rendering for fast page loads
- ⚡️ Hot Module Replacement (HMR) for rapid development
- 📚 Rich novel reading experience
- 🔒 TypeScript for type safety
- 🎨 Tailwind CSS with custom theming for dark/light modes
- 📱 Responsive design for all devices

## Tech Stack

- [React 19](https://react.dev/)
- [React Router 7](https://reactrouter.com/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Radix UI](https://www.radix-ui.com/) for accessible UI components
- [Vite](https://vitejs.dev/) for fast development and optimization
- [Bun](https://bun.sh/) for package management and runtime

## Getting Started

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
bun build
```

## Scripts

Formatting

```bash
bun format
```

Linting

```bash
bun lint
```

## Deployment

### Docker Deployment

To build and run using Docker:

```bash
docker build -t my-app .

# Run the container
docker run -p 3000:3000 my-app
```

The containerized application can be deployed to any platform that supports Docker, including:

- AWS ECS
- Google Cloud Run
- Azure Container Apps
- Digital Ocean App Platform
- Fly.io
- Railway

### DIY Deployment

If you're familiar with deploying Node applications, the built-in app server is production-ready.

Make sure to deploy the output of `bun run build`

```
├── package.json
├── bun.lock
├── build/
│   ├── client/    # Static assets
│   └── server/    # Server-side code
```

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever CSS framework you prefer.

---

Built with ❤️ using React Router.
