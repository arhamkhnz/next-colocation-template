import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

function Code({ children }: { children: React.ReactNode }) {
  return <code className="rounded bg-slate-100 px-1 py-0.5 font-mono text-xs sm:px-1.5 sm:text-sm">{children}</code>;
}

export default function Home() {
  return (
    <main className="bg-background min-h-dvh">
      <section className="container mx-auto max-w-3xl space-y-12 px-4 py-8 sm:space-y-16 sm:px-6 sm:py-12 md:py-16 lg:px-8">
        <div className="space-y-6">
          <div className="flex items-center justify-between gap-4">
            <h1 className="max-w-3/4 text-2xl font-bold tracking-tight sm:max-w-full sm:text-3xl">
              Next Colocation Template
            </h1>
            <Link href="https://github.com/arhamkhnz/next-colocation-template" target="_blank">
              <Button>
                <Github />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </Link>
          </div>

          <h2 className="text-2xl leading-tight font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Structure your Next.js apps with a colocation-first approach for cleaner, modular, and maintainable code.
          </h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Colocation means placing components, pages, and related logic together within their route folders. This
            approach aligns with the Next.js App Router&apos;s design, making features self-contained and easier to
            manage without navigating multiple directories.
          </p>
        </div>

        <div className="space-y-8 sm:space-y-10">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">Colocation Principles</h3>
          <div className="space-y-6 sm:space-y-8">
            <div className="space-y-3">
              <h4 className="text-lg font-medium sm:text-xl">File Structure and Colocation Strategy</h4>
              <p className="text-sm text-slate-600 sm:text-base">
                This folder structure follows a colocation-first approach consistent with the Next.js{" "}
                <Link href="https://nextjs.org/docs/app/building-your-application/routing" className="underline">
                  App Router
                </Link>
                . Related components, layouts, and logic are placed together inside their route segments to improve
                maintainability and clarity as your app grows.
              </p>
              <p className="text-sm text-slate-600 sm:text-base">
                For instance, the <Code>auth/login</Code> route includes a <Code>_components/</Code> folder containing
                UI elements like <Code>LoginForm.tsx</Code>. Files that contain client-side interactivity, such as
                state, event handlers, or browser APIs, should be explicitly marked with{" "}
                <Code>&quot;use client&quot;</Code>, following Next.js guidelines. Server-related logic like loaders or
                form actions can remain in <Code>page.tsx</Code>. This is flexible depending on your use case. Shared UI
                components like GitHub sign-in buttons are placed in <Code>auth/_components/</Code> and can be reused
                across routes like login, register, or any other part of the auth segment.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium sm:text-xl">
                Using Private Folders (<Code>_components/</Code>)
              </h4>
              <p className="text-sm text-slate-600 sm:text-base">
                Prefixing folders with an underscore, like <Code>_components</Code>, opts them out of the routing
                system. This follows the{" "}
                <Link
                  href="https://nextjs.org/docs/app/getting-started/project-structure#private-folders"
                  className="underline"
                >
                  Next.js private folders convention
                </Link>
                , helping keep routing logic separate from UI components.
              </p>
              <p className="text-sm text-slate-600 sm:text-base">
                Although colocation is safe by default within the <Code>app/</Code> directory, using private folders
                improves organization, editor navigation, and prevents conflicts with future Next.js features.
              </p>
              <p className="text-slate-600 italic">
                Tip: This pattern promotes clarity and consistency, especially in larger projects where structure
                matters.
              </p>
              <p className="text-slate-600">
                <em>
                  ℹ️ The <Code>src/</Code> directory is optional in Next.js but is commonly used to keep the project
                  root organized.
                </em>
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium sm:text-xl">Top-Level Routing Groups</h4>
              <p className="text-sm text-slate-600 sm:text-base">
                Route groups are optional folders that help organize routes without affecting the URL path. For example,
                this structure uses groups like <Code>(main)</Code> and <Code>(external)</Code> to separate core app
                logic from public-facing pages.
              </p>
              <ul className="list-inside list-disc space-y-1 pl-4 text-slate-600">
                <li>
                  <Code>(main)</Code>, Core application logic.
                </li>
                <li>
                  <Code>(external)</Code>, Public-facing routes such as marketing pages or standalone forms.
                </li>
              </ul>
              <p className="text-sm text-slate-600 sm:text-base">
                These groups help keep your project organized while preserving clean URL structures.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium sm:text-xl">Rationale</h4>
              <p className="text-sm text-slate-600 sm:text-base">
                Colocating route-specific logic avoids cluttering a global <Code>components/</Code> folder and reduces
                cognitive overhead. Shared utilities like <Code>hooks/</Code>, <Code>lib/</Code>, or{" "}
                <Code>constants/</Code> remain at the top level inside <Code>src/</Code>, keeping them decoupled from
                specific routes.
              </p>
              <p className="text-sm text-slate-600 sm:text-base">
                This structure integrates well with nested layouts, enabling shared UI elements like sidebars or headers
                within each route group.
              </p>
              <p className="text-sm text-slate-600 sm:text-base">
                It also streamlines onboarding and enforces consistent conventions across teams.
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-medium sm:text-xl">When to Use This Pattern</h4>
              <p className="text-sm text-slate-600 sm:text-base">
                This structure is especially useful for medium to large-scale applications with dozens of routes, teams
                working in parallel, or projects where clear boundaries between server and client components are
                important. It supports better modularity, faster onboarding, and improved discoverability of related
                logic.
              </p>
              <p className="text-sm text-slate-600 sm:text-base">
                Traditional patterns like Atomic Design or feature folders can become difficult to scale, leading to
                bloated <Code>components/</Code> trees and tight coupling. This approach keeps logic close to where it’s
                used while supporting global reuse where appropriate.
              </p>
            </div>
          </div>
        </div>

        {/* File Structure Example */}
        <div className="space-y-4 sm:space-y-6">
          <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
            See the file tree below for a visual overview of this pattern.
          </h3>
          <p>
            📁 This example uses the <Code>src/</Code> directory. If you don’t use <Code>src/</Code>, folders like{" "}
            <Code>app/</Code>, <Code>lib/</Code>, <Code>hooks/</Code>, and <Code>middleware.ts</Code> (or{" "}
            <Code>middleware.js</Code>) will exist directly at the project root.
          </p>
          <div className="overflow-hidden rounded-lg bg-slate-900 font-mono text-xs text-white shadow-md sm:text-sm">
            <div className="overflow-x-auto">
              <pre className="p-3 leading-relaxed sm:p-6">
                {`
app/
├── auth/                      # Auth Routes & Layout
│   ├── login/                 # Login Page
│   │   ├── page.tsx           # Route entry point for login
│   │   └── _components/       # UI components for login
│   ├── register/              # Register Page
│   │   ├── page.tsx           # Route entry point for register
│   │   └── _components/       # UI components for register
│   ├── _components/           # Shared auth components
│   └── layout.tsx             # Layout used by auth pages (e.g. GitHub sign-in)
├── dashboard/                 # Dashboard
│   ├── page.tsx               # Route entry point for dashboard
│   ├── layout.tsx             # Dashboard layout
│   └── _components/           # Dashboard UI components`}
              </pre>
            </div>
          </div>
          <p className="text-sm text-slate-600 sm:text-base">
            This is a basic structure for organizing files using colocation. If you want to explore the full project
            structure, visit the{" "}
            <Link href="https://github.com/arhamkhnz/next-colocation-template" className="underline">
              GitHub repository
            </Link>
            . You can also check out my{" "}
            <Link href="https://github.com/arhamkhnz/next-shadcn-admin-dashboard" className="underline">
              Next Shadcn Admin Dashboard
            </Link>{" "}
            project, where this pattern is implemented in a larger, real world setup.
          </p>
          <p className="text-sm text-slate-500 italic sm:text-base">
            *This project is actively being updated, so you may notice occasional inconsistencies or ongoing changes in
            the folder structure.
          </p>
        </div>

        <div className="rounded-lg bg-gradient-to-r from-slate-100 to-slate-200 p-4 text-center shadow-sm sm:p-6">
          <p className="text-sm text-slate-700 sm:text-base">
            This colocation-first pattern is built for Next.js but can be adapted to other modern frameworks that
            support modular or file-based routing. This includes frameworks like Remix, Vite with React Router, or Nuxt
            in the Vue ecosystem.
          </p>
        </div>

        <div className="border-t pt-6 text-center sm:pt-8">
          <p className="text-xs text-slate-500 sm:text-sm">
            Built by{" "}
            <Link href="https://github.com/arhamkhnz" className="font-medium text-slate-700 hover:underline">
              Arham Khan
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
