# WonderWork - Kids Learning Platform

## Project Description
WonderWork is a web application designed as a safe, curated learning platform for children. It allows kids to view approved video content from YouTube and other platforms, with videos embedded directly in the application.

## Tech Stack
- **Framework**: SvelteKit
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Svelte Motion
- **Video**: YouTube iframe API / iframe embeds
- **Package Manager**: pnpm ONLY
- **Version Manager**: mise

## Project Structure
```
wonderWork/
├── src/
│   ├── lib/
│   │   ├── components/     # Svelte components
│   │   ├── stores/         # Svelte stores for state
│   │   └── utils/          # Utility functions
│   ├── routes/             # SvelteKit routes
│   └── app.html            # HTML template
├── static/                 # Static assets
├── .cursor/                # Project documentation
└── agent-os/              # Product planning docs
```

## Development
```bash
mise install  # Install Node.js and pnpm via mise
pnpm install  # Install dependencies
pnpm dev      # Start development server
```

## Key Features
- Curated video content for kids
- YouTube and other platform video embeds
- Custom video player controls
- Video metadata and comments
- Related videos
- Theme switching
- Picture-in-picture mode

## Migration Notes
This project was migrated from Next.js/React to SvelteKit. See `.cursor/PROJECT_CONTEXT.md` for details.

