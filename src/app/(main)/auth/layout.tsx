import type { ReactNode } from "react";
import { GalleryVerticalEnd } from "lucide-react";
import { PROJECT_CONFIG } from "@/config/project-config";

interface LayoutProps {
  readonly children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <main>
      <div className="relative container mx-auto h-dvh flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col items-center justify-center space-y-5 lg:flex">
          <div className="absolute top-5 left-5 flex justify-center gap-2 font-medium md:justify-start">
            <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
              <GalleryVerticalEnd className="size-4" />
            </div>
            {PROJECT_CONFIG.name}
          </div>

          <div className="absolute right-5 bottom-5 left-5 flex justify-between text-sm text-gray-600">
            <p>{PROJECT_CONFIG.copyright}</p>
            <p>Version {PROJECT_CONFIG.version}</p>
          </div>
        </div>
        <div className="flex h-full bg-none lg:bg-white lg:p-8">{children}</div>
      </div>
    </main>
  );
}
