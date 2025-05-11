import Link from "next/link";
import FileTree from "./components/file-tree";
import { Github } from "lucide-react";

function Code({ children }: { children: React.ReactNode }) {
  return <code className="bg-muted rounded px-1 py-0.5 text-xs">{children}</code>;
}

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <div className="bg-accent sticky top-0 z-50 flex items-center justify-between px-6 py-4">
        <h1 className="text-accent-foreground text-lg font-bold text-balance">
          Welcome to the <span className="underline">Next Colocation Template</span> ✌️
        </h1>
        <Link
          href="https://github.com/arhamkhnz/next-colocation-template"
          className="bg-foreground text-background hover:bg-muted hover:text-foreground inline-flex items-center gap-2 rounded-md px-3 py-1.5 text-sm font-medium shadow-sm transition-colors duration-300 ease-in-out"
          target="_blank"
        >
          <Github className="size-4" />
          <span className="hidden sm:inline">View Repo</span>
        </Link>
      </div>

      <div className="space-y-6 px-6 py-4">
        <div className="space-y-4">
          <h2 className="text-foreground text-2xl leading-tight font-bold md:text-3xl">
            Structure your Next.js apps the right way — <span className="underline">modular, clean, and colocated</span>
          </h2>
          <p className="text-foreground">
            This folder structure is based on a practical design pattern for the Next.js App Router. It encourages
            keeping related components, layouts, and logic grouped by context, making the project easier to scale,
            maintain, and onboard across teams. For example, the <Code>auth/login</Code> page includes its own{" "}
            <Code>components/</Code> folder. Server logic stays in <Code>page.tsx</Code>, while client-facing
            interactions are isolated in <Code>LoginForm.tsx</Code>, marked with <Code>&quot;use client&quot;</Code>.
            Shared UI like GitHub sign-in lives in the parent <Code>auth/components</Code> folder and is reused across
            login and register.
          </p>
          <p className="text-foreground">
            To keep things organized, the app uses two top-level route groups inside the <Code>app/</Code> directory:{" "}
            <Code>(main)</Code> for core application logic and <Code>(external)</Code> for public-facing pages. These
            are isolated using Next.js’s <strong>App Router group segment</strong> feature, which allows structuring
            routes without affecting the URL path.
          </p>
          <p className="text-foreground">
            This avoids the clutter of global component folders by colocating logic where it’s needed. Server logic
            remains server-only by default, and interactive UI is clearly marked with{" "}
            <Code>&quot;use client&quot;</Code> at the leaf level, as recommended by Next.js. This separation also
            improves rendering performance and code readability.
          </p>
          <p className="text-foreground">
            Reusable components used across multiple parts of the app live in <Code>common/</Code> or <Code>ui/</Code>{" "}
            folders. This minimizes over-abstraction and keeps the project modular and easy to navigate. For shared
            logic like API utilities or hooks, we keep <Code>lib</Code> and <Code>hooks</Code> at the root level inside{" "}
            <Code>src/</Code> for clarity and reusability.
          </p>
          <p className="text-foreground">
            This pattern also works well with <strong>nested layouts</strong> in the App Router, allowing you to
            colocate shared shells like sidebars or tab bars per route section, without making the structure feel rigid
            or overwhelming.
          </p>
          <p className="text-foreground">
            Try adapting this structure to your workflow and team setup. It&apos;s not a rulebook. It&apos;s a starting
            point that has worked well in real projects. I&apos;ve used this pattern in large-scale applications with
            50+ routes, and it has consistently proven more manageable than approaches like Atomic Design, where the
            components folder can become bloated and overly abstract. This colocation-first structure helps keep related
            code together and avoids the complexity of deeply nested reusable components and excessive prop drilling.
          </p>

          <p className="text-foreground">
            See the file tree below for a visual understanding of how this architecture is structured.
          </p>
          <p className="text-foreground">
            This example uses the <Code>src</Code> directory structure. If you don&apos;t use <Code>src</Code>, all
            related folders like <Code>app</Code>, <Code>lib</Code>, <Code>hooks</Code>, and <Code>middleware</Code>{" "}
            will appear directly at the project root.
          </p>
        </div>

        <div>
          <div className="bg-foreground w-full space-y-4 rounded-xl p-6">
            <h3 className="text-sm text-white">App Folder Structure (Colocation Pattern)</h3>
            <FileTree />
            <p className="text-muted text-sm italic">
              *The project is still being updated, so you might notice a few inconsistencies or ongoing changes in the
              folder structure.
            </p>
          </div>
        </div>

        <div className="mb-6 space-y-4">
          <div>
            <p className="text-sm text-gray-500">Built by:</p>
            <p className="text-foreground text-sm font-medium">Arham Khan</p>
            <p className="text-muted-foreground mt-1 text-sm">
              This structure is based on personal experience building React & Next.js apps. Feel free to open
              discussions or contribute on GitHub if you find it helpful or have suggestions.
            </p>
          </div>

          <div>
            <p className="text-sm text-gray-500">GitHub:</p>
            <Link href="https://github.com/arhamkhnz" className="text-foreground text-sm underline" target="_blank">
              github.com/arhamkhnz
            </Link>
          </div>

          <div>
            <p className="text-sm text-gray-500">Project Repository:</p>
            <Link
              href="https://github.com/arhamkhnz/next-colocation-template"
              className="text-foreground text-sm underline"
              target="_blank"
            >
              next-colocation-template on GitHub
            </Link>
          </div>

          <div>
            <p className="text-muted-foreground text-sm">Framework Agnostic</p>
            <p className="text-muted-foreground text-sm">
              This colocation-first pattern can be adapted to other frontend frameworks as well.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
