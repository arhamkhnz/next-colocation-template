# Next Colocation Template

Structure your Next.js apps with a colocation-first approach for cleaner, modular, and maintainable code.

Colocation means placing components, pages, and related logic together within their route folders. This approach aligns with the Next.js App Router's design, making features self-contained and easier to manage without navigating multiple directories.

## Colocation Principles

### File Structure and Colocation Strategy

This folder structure follows a colocation-first approach consistent with the [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing). Related components, layouts, and logic are placed together inside their route segments to improve maintainability and clarity as your app grows.

For instance, the `auth/login` route includes a `_components/` folder containing UI elements like `LoginForm.tsx`. Files that contain client-side interactivity, such as state, event handlers, or browser APIs, should be explicitly marked with `"use client"`, following Next.js guidelines. Server-related logic like loaders or form actions can remain in `page.tsx`. This is flexible depending on your use case. Shared UI components like GitHub sign-in buttons are placed in `auth/_components/` and can be reused across routes like login, register, or any other part of the auth segment.

### Using Private Folders (`_components/`)

Prefixing folders with an underscore, like `_components`, opts them out of the routing system. This follows the [Next.js private folders convention](https://nextjs.org/docs/app/getting-started/project-structure#private-folders), helping keep routing logic separate from UI components.

Although colocation is safe by default within the `app/` directory, using private folders improves organization, editor navigation, and prevents conflicts with future Next.js features.

> Tip: This pattern promotes clarity and consistency, especially in larger projects where structure matters.    
> ℹ️ The `src/` directory is optional in Next.js but is commonly used to keep the project root organized.

### Top-Level Routing Groups

Route groups are optional folders that help organize routes without affecting the URL path. For example, this structure uses groups like `(main)` and `(external)` to separate core app logic from public-facing pages.

- `(main)`: Core application logic
- `(external)`: Public-facing routes such as marketing pages or standalone forms

These groups help keep your project organized while preserving clean URL structures.

### Rationale

Colocating route-specific logic avoids cluttering a global `components/` folder and reduces cognitive overhead. Shared utilities like `hooks/`, `lib/`, or `constants/` remain at the top level inside `src/`, keeping them decoupled from specific routes.

This structure integrates well with nested layouts, enabling shared UI elements like sidebars or headers within each route group.

It also streamlines onboarding and enforces consistent conventions across teams.

### When to Use This Pattern

This structure is especially useful for medium to large-scale applications with dozens of routes, teams working in parallel, or projects where clear boundaries between server and client components are important. It supports better modularity, faster onboarding, and improved discoverability of related logic.

Traditional patterns like Atomic Design or feature folders can become difficult to scale, leading to bloated `components/` trees and tight coupling. This approach keeps logic close to where it’s used while supporting global reuse where appropriate.

---

## See the file tree below for a visual overview of this pattern.

📁 This example uses the `src/` directory. If you don’t use `src/`, folders like `app/`, `lib/`, `hooks/`, and `middleware.ts` (or `middleware.js`) will exist directly at the project root.


```txt
src/
└── app/
│   ├── auth/                    # Auth Routes & Layout
│   │   ├── login/               # Login Page
│   │   │   ├── page.tsx         # Route entry point for login
│   │   │   └── _components/     # UI components for login
│   │   ├── register/            # Register Page
│   │   │   ├── page.tsx         # Route entry point for register
│   │   │   └── _components/     # UI components for register
│   │   ├── _components/         # Shared auth components
│   │   └── layout.tsx           # Layout used by auth pages (e.g. GitHub sign-in)
│   ├── dashboard/               # Dashboard Routes & Layout
│   │   ├── page.tsx             # Route entry point for dashboard
│   │   ├── layout.tsx           # Dashboard layout
│   │   └── _components/         # Dashboard UI components
├── components/                  # Top-level components like UI primitives and layout elements
├── config/                      # Project configuration files and settings
├── hooks/                       # Reusable custom React hooks
├── lib/                         # Shared libraries and utility functions
├── navigation/                  # Navigation-related config (e.g., sidebar items)
└── middleware.ts                # Middleware for auth, redirects, etc.
```
This is a basic structure for organizing files using colocation.  
To explore the full project structure, see the [GitHub repository](https://github.com/arhamkhnz/next-colocation-template).  
You can also check out my [Next Shadcn Admin Dashboard](https://github.com/arhamkhnz/next-shadcn-admin-dashboard), where this pattern is applied in a larger, real-world setup.

> **Note**: This project is actively being updated, so you may notice occasional inconsistencies or ongoing changes in the folder structure.

---

While this colocation-first pattern is built for Next.js but can be adapted to other modern frameworks that support modular or file-based routing. This includes frameworks like Remix, Vite with React Router, or Nuxt in the Vue ecosystem.

---

Feel free to contribute, open issues, or suggest improvements.  
If you find this project helpful, consider giving it a ⭐ on GitHub — it helps others discover it too!
