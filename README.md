# WonderWork - Kids Learning Platform

WonderWork is a safe, curated learning platform for children that allows them to view approved video content from YouTube and other platforms. Videos are embedded directly in the application, providing a distraction-free, age-appropriate learning experience.

## Tech Stack

- **Framework:** SvelteKit
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** motion-svelte
- **Icons:** @phosphor-icons/svelte

## Features

- Curated video library with pre-approved educational content
- Safe video embedding from YouTube and other platforms
- Custom video player with age-appropriate controls
- Content organized by subject, age level, and learning objectives
- Distraction-free interface (no comments, recommendations, or ads)
- Multi-user support with child profiles
- Progress tracking and learning analytics

## Getting Started

### Prerequisites

- [mise](https://mise.jdx.dev/) (tool version manager)
- pnpm (will be installed via mise)

### Setup

1. Install mise (if not already installed):
   ```bash
   curl https://mise.run | sh
   ```

2. Install tools and dependencies:
   ```bash
   mise install
   pnpm install
   ```

### Development

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

**Port Configuration:**
- Default port: `3000`
- To use a different port, set the `PORT` environment variable:
  ```bash
  PORT=4000 pnpm dev
  ```
- If the configured port is already in use, the server will automatically try the next available port

### Build

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

## Build Configuration

### Build System
- **Build Tool:** Vite 5.x
- **Framework:** SvelteKit 2.x
- **TypeScript:** Enabled with strict mode
- **CSS Processing:** PostCSS with Tailwind CSS and Autoprefixer

### Port Configuration
The development and preview servers are configured to use port `3000` by default, avoiding conflicts with pre-allocated system ports.

**Configuration:**
- Default port: `3000` (configured in `vite.config.ts`)
- Configurable via `PORT` environment variable
- Auto-fallback: If the configured port is in use, Vite will automatically try the next available port

**Usage:**
```bash
# Use default port 3000
pnpm dev

# Use custom port
PORT=4000 pnpm dev

# Preview with custom port
PORT=5000 pnpm preview
```

### Environment Variables
- `PORT` - Server port for dev/preview (default: `3000`)

### Available Scripts
- `pnpm dev` - Start development server with hot module replacement
- `pnpm build` - Build for production (outputs to `build/` directory)
- `pnpm preview` - Preview production build locally
- `pnpm check` - Run Svelte type checking
- `pnpm check:watch` - Run Svelte type checking in watch mode
- `pnpm lint` - Lint code with ESLint and Prettier
- `pnpm format` - Format code with Prettier

### Production Build
The production build creates an optimized bundle:
- Code splitting and tree-shaking
- Minified JavaScript and CSS
- Optimized assets
- SSR-ready output (via SvelteKit adapter)

Build output is located in the `build/` directory (excluded from git).

### Development Server Features
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for Svelte components
- Source maps for debugging
- Listens on all network interfaces (`host: true`) for remote access

## Project Structure

```
wonderWork/
├── src/
│   ├── lib/
│   │   ├── components/     # Svelte components
│   │   ├── stores/         # Svelte stores for state management
│   │   └── utils/          # Utility functions
│   ├── routes/             # SvelteKit routes and API endpoints
│   └── app.html            # HTML template
├── static/                 # Static assets (images, videos, etc.)
├── .cursor/               # Project documentation
└── agent-os/              # Product planning documents
```

## Product Planning

Product planning documents are available in `agent-os/product/`:

- **Mission:** `agent-os/product/mission.md` - Product vision and strategy
- **Roadmap:** `agent-os/product/roadmap.md` - Development phases and features
- **Tech Stack:** `agent-os/product/tech-stack.md` - Technical stack documentation

## Migration Status

This project has been migrated from Next.js/React to SvelteKit. See `.cursor/MIGRATION_STATUS.md` for detailed migration progress.

## Learn More

- [SvelteKit Documentation](https://kit.svelte.dev/docs)
- [Svelte Documentation](https://svelte.dev/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Version History

### v0.1.1 - Build Configuration Updates
- Configured development server to use port 3000 (configurable via PORT env var)
- Added port auto-fallback for conflict resolution
- Set up mise and pnpm as required tools
- Updated build configuration documentation
- Added comprehensive build and development server documentation

### v0.1.0 - Initial Refactoring
- Migrated from Next.js/React to SvelteKit/Svelte
- Converted React Context providers to Svelte stores
- Migrated API routes to SvelteKit format
- Created product planning documents
- Set up TypeScript and Tailwind CSS configuration
