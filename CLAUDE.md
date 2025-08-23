# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a Next.js 15 project with TypeScript and Tailwind CSS, located in the `my-project/` subdirectory. The project uses:

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript with strict configuration
- **Styling**: Tailwind CSS v4 with PostCSS
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Linting**: ESLint with Next.js recommended rules
- **Build Tool**: Turbopack (enabled via --turbopack flag)

## Development Commands

All commands should be run from the `my-project/` directory:

```bash
# Development server with Turbopack
npm run dev

# Production build with Turbopack  
npm run build

# Production server
npm start

# Linting
npm run lint
```

## Key Architecture Details

- **App Directory Structure**: Uses Next.js App Router (`src/app/`)
- **Path Alias**: `@/*` maps to `./src/*` for imports
- **Layout System**: Root layout in `src/app/layout.tsx` with font configuration
- **Styling Architecture**: 
  - Tailwind CSS v4 with inline theme configuration
  - CSS custom properties for theming (light/dark mode support)
  - Global styles in `src/app/globals.css`

## TypeScript Configuration

- Target: ES2017
- Strict mode enabled
- Next.js plugin for enhanced TypeScript support
- Module resolution: bundler (for Next.js compatibility)

## ESLint Configuration

- Extends Next.js core web vitals and TypeScript rules
- Ignores: node_modules, .next, out, build, next-env.d.ts
- Uses flat config format with @eslint/eslintrc compatibility

## Working Directory

The main project files are in `my-project/` subdirectory, not the root directory.