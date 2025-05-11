# Next.js Colocation Architecture Template

Structure your Next.js apps the right way — modular, clean, and colocated.

This folder structure is based on a practical design pattern for the Next.js App Router. It encourages keeping related components, layouts, and logic grouped by context, making the project easier to scale, maintain, and onboard across teams.

For example, the `auth/login` page includes its own `components/` folder. Server logic stays in `page.tsx`, while client-facing interactions are isolated in `LoginForm.tsx`, marked with `"use client"`. Shared UI like GitHub sign-in lives in the parent `auth/components` folder and is reused across `login` and `register`.

To keep things organized, the app uses two top-level route groups inside the `app/` directory:

- `(main)` for core application logic
- `(external)` for public-facing pages

These are isolated using Next.js’s App Router group segment feature, which allows structuring routes without affecting the URL path.

This avoids the clutter of global component folders by colocating logic where it’s needed. Server logic remains server-only by default, and interactive UI is clearly marked with `"use client"` at the leaf level, as recommended by Next.js. This separation also improves rendering performance and code readability.

Reusable components used across multiple parts of the app live in `common/` or `ui/` folders. This minimizes over-abstraction and keeps the project modular and easy to navigate.

For shared logic like API utilities or custom hooks, `lib/` and `hooks/` are kept at the root level inside `src/` for clarity and reusability.

This pattern also works well with nested layouts in the App Router, allowing you to colocate shared shells like sidebars or tab bars per route section without making the structure feel rigid or overwhelming.

Try adapting this structure to your workflow and team setup. It's not a rulebook. It's a starting point that has worked well in real projects. This pattern has been used in large-scale applications with 50+ routes and has consistently proven more manageable than approaches like Atomic Design, where the `components/` folder can become bloated and overly abstract.

This colocation-first structure helps keep related code together and avoids the complexity of deeply nested reusable components and excessive prop drilling.

See the file tree below for a visual understanding of how this architecture is structured.

This example uses the `src/` directory structure. If you don't use `src`, all related folders like `app/`, `lib/`, `hooks/`, and `middleware.ts` will appear directly at the project root.

```code
src/  
├── app/  
│   ├── (external)/  — Publicly accessible pages (e.g., feedback forms, landing pages)  
│   │   ├── components/  — Scoped UI components specific to external pages  
│   │   └── page.tsx  — Public landing page  
│  
│   ├── (main)/  — Main application logic  
│   │   ├── auth/  — Auth routes including login, register, layout, and shared components.  
│   │   │   ├── components/  — Shared components used across auth routes like GitHub or Microsoft sign-in.  
│   │   │   ├── login/  — Login route  
│   │   │   │   ├── components/  — Components specific to the login page (e.g., LoginForm).  
│   │   │   │   └── page.tsx  — Login page  
│   │   │   ├── register/  — Register route  
│   │   │   │   ├── components/  — Components specific to the register page (e.g., RegisterForm).  
│   │   │   │   └── page.tsx  — Register page  
│   │   │   └── layout.tsx  — Layout specific to auth pages  
│   │   ├── dashboard/  — Dashboard route with layout, UI components, and supporting pages  
│   │   │   ├── [...not-found]/  — Handles unmatched dashboard routes with a not found page.  
│   │   │   ├── components/  — Scoped UI components for dashboard features like sidebar, navigation, and the root dashboard route.  
│   │   │   ├── layout.tsx  — Layout specific to dashboard pages  
│   │   │   └── page.tsx  — Dashboard page  
│  
├── components/  — Top-level components directory containing UI, common elements, and shared building blocks used throughout the app.  
│   ├── ui/  — UI primitives like buttons, inputs, selects, and other base elements used throughout the app.  
│   └── common/  — Shared components used across multiple features or routes where colocation isn’t practical.  
│  
├── config/  — Application-wide configuration files and settings (e.g., project config, theme, etc.)  
├── hooks/  — Custom React hooks used across the application  
├── lib/  — Helper functions, utilities, or modules used across the application.  
├── navigation/  — Configuration or components related to navigation (e.g., sidebar structure or nav items).  
├── constants/  — App-wide constant values such as enums, static options, or config objects.  
```

Feel free to open discussions or contribute to this project if you find it helpful or have suggestions.  
This colocation-first pattern can also be adapted to other frontend frameworks.
