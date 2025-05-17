# Next Colocation Template

Structure your Next.js apps with a colocation-first approach for cleaner, modular, and maintainable code.

Colocation means placing components, pages, and related logic together within their route folders. This approach aligns with the Next.js App Router's design, making features self-contained and easier to manage without navigating multiple directories.

The `app/` directory enables file-based routing, layouts, and nested segments in Next.js. This template uses its structure to colocate files by feature.

## Colocation Principles

### File Structure and Colocation Strategy

This folder structure follows a colocation-first approach consistent with the [Next.js App Router](https://nextjs.org/docs/app/building-your-application/routing). Related components, layouts, and logic are placed together inside their route segments to improve maintainability and clarity as your app grows.

For example, the `auth/login` route includes its own `_components/` folder containing UI elements like `LoginForm.tsx`, which are specific to the login page. Since `LoginForm.tsx` handles interactive behavior such as state and events, it's marked with `"use client"`, as recommended by Next.js for client-side logic at the leaf level. If a file doesn’t explicitly use `"use client"`, it runs as a Server Component by default.

Shared components that are reused across multiple routes within the `auth/` segment, such as GitHub sign-in buttons are placed in the parent route's `_components/` folder (e.g., `auth/_components/`). This keeps reusable logic colocated at the appropriate scope, without polluting global folders.

Using colocated folders also improves developer experience in code editors, as you can work within a single folder for an entire route, reducing context switching and improving flow while building features.

You can view the file tree below to get a better understanding of how this setup is structured in practice.

Want to try this structure in your own project? [Clone the repo](https://github.com/arhamkhnz/next-colocation-template) and use it as a starting point. It comes with a starter dashboard page and is built using `TypeScript` and [Shadcn UI](https://ui.shadcn.com), so you can start prototyping with real components right away.

### Using Private Folders (`_components/`)

Prefixing folders with an underscore, like `_components`, opts them out of the routing system. This follows the [Next.js private folders convention](https://nextjs.org/docs/app/getting-started/project-structure#private-folders), helping keep routing logic separate from UI components.

Although colocation is safe by default within the `app/` directory, using private folders improves organization, editor navigation, and prevents conflicts with future Next.js features.

> Tip: This pattern promotes clarity and consistency, especially in larger projects where structure matters.  
> 💡 While optional, using the `src/` directory is a common convention that keeps your project root clean and separates application logic from configuration files.

### Top-Level Routing Groups

Route groups are optional folders that help organize routes without affecting the URL path. For example, this structure uses groups like `(main)` and `(external)` to separate core app logic from public-facing pages.

- `(main)`: Core application logic
- `(external)`: Public-facing routes such as marketing pages or standalone forms

These groups help keep your project organized while preserving clean URL structures.

### Rationale

Colocating route-specific logic avoids cluttering a global `components/` folder and reduces cognitive overhead. Shared utilities like `hooks/`, `lib/`, or `constants/` remain at the top level inside `src/`, keeping them decoupled from specific routes.

This structure integrates well with nested layouts, enabling shared UI elements like sidebars or headers within each route group.

If needed, route-specific logic like schema validation (e.g., using Zod) or input types can also live alongside the route in a colocated `schema.ts` file. When such logic is reused across multiple routes, it’s better placed in a shared top-level folder like `lib/` to maintain separation and avoid duplication.

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
If you find this project helpful, consider giving it a ⭐ on GitHub - it helps others discover it too.
