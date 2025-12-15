# Tech Stack

## Framework & Runtime
- **Application Framework:** SvelteKit
- **Language/Runtime:** TypeScript, Node.js
- **Package Manager:** npm

## Frontend
- **JavaScript Framework:** Svelte 4
- **CSS Framework:** Tailwind CSS 3.4
- **UI Components:** Custom Svelte components
- **Icons:** @phosphor-icons/svelte
- **Animation:** motion-svelte (Svelte-compatible motion library)

## Backend & API
- **API Framework:** SvelteKit API routes (+server.ts)
- **API Format:** JSON REST API
- **Video Embedding:** YouTube iframe API
- **Future:** Support for Vimeo and other platform APIs

## State Management
- **State Solution:** Svelte Stores (writable, readable, derived)
- **Store Organization:** `src/lib/stores/`
  - `themeStore.ts` - Theme preferences
  - `videoStore.ts` - Video data and metadata
  - `controlsStore.ts` - Video player controls
  - `profileStore.ts` - User profiles
  - `shortsStore.ts` - Short video content
  - `relatedVideosStore.ts` - Related videos
  - `commentsStore.ts` - Comments (if needed for future)

## Database & Storage
- **Database:** (To be determined - PostgreSQL or MongoDB recommended)
- **ORM/Query Builder:** (To be determined based on database choice)
- **File Storage:** Static files in `static/` directory
- **Future:** Cloud storage for video thumbnails and metadata

## Video & Media
- **Video Player:** Custom Svelte component with YouTube iframe API
- **Video Sources:** 
  - YouTube (primary)
  - Vimeo (future)
  - Other educational platforms (future)
- **Video Streaming:** HTTP range requests for local video files (if needed)

## Styling & Design
- **CSS Framework:** Tailwind CSS
- **PostCSS:** Autoprefixer
- **Dark Mode:** Class-based dark mode with Tailwind
- **Responsive Design:** Tailwind responsive utilities

## Development Tools
- **Build Tool:** Vite (via SvelteKit)
- **Type Checking:** TypeScript 5
- **Linting:** ESLint with Svelte plugin
- **Formatting:** Prettier with Svelte plugin
- **Package Manager:** npm

## Testing & Quality
- **Test Framework:** (To be added - Vitest recommended for SvelteKit)
- **E2E Testing:** (To be added - Playwright recommended)
- **Linting/Formatting:** ESLint, Prettier

## Deployment & Infrastructure
- **Hosting:** (To be determined - Vercel, Netlify, or self-hosted)
- **Adapter:** @sveltejs/adapter-auto (supports multiple platforms)
- **CI/CD:** (To be determined - GitHub Actions recommended)
- **Environment:** Node.js runtime

## Third-Party Services
- **Analytics:** @vercel/analytics (or alternative)
- **Video Platform:** YouTube iframe API
- **Authentication:** (To be determined - Auth0, Supabase Auth, or custom)
- **Content Moderation:** (To be determined - manual curation initially)

## Security
- **Content Security Policy:** Strict CSP for iframe embeds
- **XSS Protection:** Svelte's built-in XSS protection
- **CSRF Protection:** SvelteKit built-in CSRF protection
- **Video Embedding:** YouTube privacy-enhanced mode

## Browser Support
- **Target Browsers:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile Support:** iOS Safari, Chrome Mobile
- **Accessibility:** WCAG 2.1 AA compliance (target)

## Development Environment
- **Node.js Version:** 18+ (LTS recommended)
- **Package Manager:** npm
- **Editor Support:** VS Code with Svelte extension
- **Hot Module Replacement:** Vite HMR

## Notes
- SvelteKit provides built-in routing, SSR, and API routes
- TypeScript ensures type safety across the application
- Tailwind CSS provides utility-first styling for rapid development
- Svelte stores replace React Context for state management
- YouTube iframe API provides secure video embedding without exposing children to YouTube's interface

