# Project Rules

## Package Management & Tooling
- **Package Manager**: pnpm ONLY (never use npm, yarn, or bun)
- **Version Manager**: mise (formerly rtx) ONLY
- All package management commands must use `pnpm`
- Tool versions must be managed via `.mise.toml`

## Tech Stack Requirements
- **Framework**: SvelteKit (not Next.js)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animation**: Svelte Motion (use `svelte/motion` or `motion-svelte` - NOT Framer Motion which is React-specific)

## Code Style
- Use Svelte component syntax (`.svelte` files)
- Prefer Svelte stores over global state
- Use TypeScript for type safety
- Follow Svelte best practices for reactivity
- Use Tailwind CSS utility classes for styling

## State Management
- Use Svelte stores (`writable`, `readable`, `derived`) instead of React Context
- Keep stores in `src/lib/stores/` directory
- Prefer composition over complex store hierarchies

## Component Structure
- Keep components in `src/lib/components/`
- Use Svelte's built-in features (reactive statements, stores) instead of hooks
- Prefer props and events for component communication

## Video Player
- Use YouTube iframe API for YouTube videos
- Support other platforms via iframe embeds
- Ensure all video content is approved/curated for kids

## File Naming
- Components: PascalCase (e.g., `VideoPlayer.svelte`)
- Stores: camelCase with `.ts` extension (e.g., `videoStore.ts`)
- Utilities: camelCase with `.ts` extension
- Routes: follow SvelteKit conventions (`+page.svelte`, `+layout.svelte`)

## Git Conventions
- Follow Conventional Commits format
- Use appropriate commit types (feat, fix, refactor, etc.)
- Include scope when relevant

