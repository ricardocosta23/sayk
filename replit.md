# Overview

This is a modern full-stack web application built as a landing page for SAYK, a 17-year-old Brazilian singer and songwriter. The application is architected as a monorepo with a React TypeScript frontend, Express.js backend, and PostgreSQL database integration using Drizzle ORM. The landing page showcases the artist's music, biography, portfolio, and contact information with a sleek, dark theme featuring neon accents and modern UI components from shadcn/ui.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for build tooling
- **Styling**: TailwindCSS with custom CSS variables for theming, featuring a dark background with vibrant accent colors (purple, cyan, green, orange)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Form Handling**: React Hook Form with Zod validation

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Development**: Hot reloading via Vite integration in development mode
- **Build System**: esbuild for production bundling
- **API Structure**: RESTful API endpoints prefixed with `/api`

## Database & ORM
- **Database**: PostgreSQL (configured for production)
- **ORM**: Drizzle ORM for type-safe database operations
- **Schema Management**: Drizzle Kit for migrations and schema generation
- **Connection**: Neon Database serverless driver for PostgreSQL connectivity
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development and database implementation for production

## Styling & Design System
- **Theme**: Dark mode with CSS custom properties
- **Colors**: Neutral base with vibrant accent colors (primary: cyan, secondary: magenta, accent: green, orange)
- **Typography**: Inter font family for modern, clean text rendering
- **Animations**: Custom CSS animations including floating effects, neon text glow, and glass morphism
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities

## Development Tools
- **Type Safety**: Strict TypeScript configuration with path mapping
- **Code Quality**: ESM modules, strict compilation settings
- **Development Experience**: Vite plugin for runtime error overlay, Replit integration for cartographer mapping
- **Asset Management**: Structured asset organization with alias resolution

## Landing Page Structure
The application is organized into distinct sections:
- **Hero Section**: Artist photo, name, and primary call-to-action
- **About Section**: Artist biography with formatted text and quotes
- **Music Section**: Embedded Spotify players for featured tracks
- **Portfolio Section**: Photo gallery and media kit download
- **Contact Section**: Social media links and contact information
- **Navigation**: Sticky navigation with smooth scrolling between sections

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Type-safe database toolkit and query builder

## Music Integration
- **Spotify Web API**: Embedded music players for track streaming
- **Spotify Artist Profile**: Direct links to artist's Spotify profile

## UI Framework & Styling
- **Radix UI**: Unstyled, accessible UI primitives
- **shadcn/ui**: Pre-built component library
- **TailwindCSS**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional className utilities

## Development & Build Tools
- **Vite**: Frontend build tool and development server
- **esbuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with autoprefixer
- **TypeScript**: Static type checking and compilation

## Runtime & Server
- **Express.js**: Web application framework
- **connect-pg-simple**: PostgreSQL session store (configured but not actively used)
- **tsx**: TypeScript execution engine for development

## State Management & Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation library

## Utility Libraries
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **Wouter**: Lightweight routing library