# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **1 Min Journal** - a Next.js 15 application for a 60-second journaling app. The project features a cinematic landing page with advanced animations, scroll-triggered effects, and a sophisticated design system built with Tailwind CSS v4.

## Project Structure

- **Framework**: Next.js 15.5.0 with App Router
- **Language**: TypeScript with strict configuration  
- **Styling**: Tailwind CSS v4 with PostCSS and custom cinematic animations
- **Fonts**: Geist Sans and Geist Mono from Google Fonts
- **Build Tool**: Turbopack (enabled via --turbopack flag)
- **Deployment**: Static export configuration for GitHub Pages

## Development Commands

```bash
# Development server with Turbopack
npm run dev

# Production build with Turbopack and static export
npm run build

# Production server (after build)
npm start

# Static export (part of build process)
npm run export

# Linting
npm run lint
```

## Key Architecture Details

### Next.js Configuration
- **Static Export**: Configured for static site generation (`output: 'export'`)
- **GitHub Pages**: Uses `/1minjournal` base path in production
- **Images**: Unoptimized for static export compatibility
- **Output Directory**: `out/` (custom distDir)

### App Router Structure
- **Main App**: `src/app/` directory with App Router
- **Layout**: `src/app/layout.tsx` with metadata and font configuration
- **Homepage**: `src/app/page.tsx` - complex landing page with animations
- **Privacy Policy**: `src/app/privacy-policy/page.tsx`

### Styling Architecture
- **Tailwind CSS v4**: Inline theme configuration in `globals.css`
- **Custom Animations**: Extensive cinematic animation system including:
  - Scroll-triggered animations with Intersection Observer
  - Complex keyframe animations for dramatic effects
  - Floating parallax elements
  - Animated journal card carousel
- **CSS Custom Properties**: For theming and dynamic values
- **Responsive Design**: Mobile-first approach with extensive mobile optimizations

### TypeScript Configuration
- **Target**: ES2017 for broader browser compatibility
- **Strict Mode**: Enabled for type safety
- **Path Aliases**: `@/*` maps to `./src/*`
- **Next.js Plugin**: Enhanced TypeScript support

### ESLint Configuration  
- **Flat Config**: Uses new ESLint flat config format
- **Next.js Rules**: Extends `next/core-web-vitals` and `next/typescript`
- **Ignores**: Standard Next.js build directories and generated files

## Component Architecture

### Landing Page Features
- **Cinematic Hero Section**: Full-viewport hero with gradient animations
- **Scroll Progress Bar**: Dynamic progress tracking
- **Animated Journal Cards**: Auto-scrolling carousel with realistic journal entries
- **Interactive Animations**: Intersection Observer-based reveal animations
- **Multi-section Layout**: Problem/Solution narrative structure

### Animation System
- **Scroll-triggered Classes**: `.cinematic-entry`, `.dramatic-scale`, `.slow-reveal`
- **CSS Custom Properties**: Dynamic values for animations
- **Performance Optimized**: Uses `transform` and `opacity` for smooth animations
- **Mobile Responsive**: Reduced motion on smaller screens

## Static Export Configuration

The project is configured for static export to work with GitHub Pages:
- Base path and asset prefix are set for production deployment
- All images are unoptimized for static hosting
- Uses `out/` directory for build output
- Trailing slashes enabled for compatibility

## Development Notes

- **Working Directory**: All commands run from the root directory (not a subdirectory)
- **Hot Reload**: Turbopack provides fast development server
- **Build Output**: Static files generated in `out/` directory
- **Browser Compatibility**: ES2017 target supports most modern browsers
- **Font Loading**: Google Fonts loaded via Next.js font optimization

## Privacy Policy
The project includes a privacy policy page at `/privacy-policy` with dedicated layout and content.