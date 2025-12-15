# Project Context

## Overview
WonderWork is a Kids Learning Platform that allows children to view approved video content from YouTube and other platforms. Videos are played as embeds within the web application, providing a safe and curated learning environment.

## Current State (Pre-Refactor)
- **Framework**: Next.js 15.3.1 with React 19
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Motion (Framer Motion)
- **Video Player**: react-player
- **State Management**: React Context API
- **Project Name**: youtube-video-view (legacy name)

## Target State (Post-Refactor)
- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Svelte Motion (svelte/motion or motion-svelte)
- **Video Player**: YouTube iframe API or Svelte-compatible player
- **State Management**: Svelte Stores
- **Package Manager**: pnpm ONLY (enforced via packageManager field)
- **Version Manager**: mise (tool versions managed via .mise.toml)

## Key Features
1. Video playback with custom controls
2. Video metadata display
3. Comments system
4. Related videos sidebar
5. Shorts/video shorts support
6. Video tags/categories
7. Theme switching (dark/light mode)
8. Picture-in-picture mode
9. Mini player
10. User authentication/profile

## Architecture
- Multiple context providers for state management (Theme, User, Video, Shorts, Related Videos, Comments, Controls)
- Custom hooks for component logic
- API routes for mock data
- Component-based architecture

## Migration Strategy
1. Convert React components to Svelte components
2. Replace React Context with Svelte stores
3. Migrate React hooks to Svelte reactive statements
4. Replace react-player with YouTube iframe API or compatible solution
5. Convert Next.js API routes to SvelteKit API routes
6. Update build configuration

## Development Server
- **Default Port:** 3000 (configurable via PORT environment variable)
- **Configuration:** Set in `vite.config.ts`
- **Fallback:** If port 3000 is in use, Vite will automatically try the next available port

