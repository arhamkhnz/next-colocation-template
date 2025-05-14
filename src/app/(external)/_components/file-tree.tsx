"use client";

import { useState } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";

type TreeNode = {
  name: string;
  type: "file" | "folder";
  description?: string;
  children?: TreeNode[];
  expanded?: boolean;
};

export default function FileTree() {
  const [tree, setTree] = useState<TreeNode[]>([
    {
      name: "src",
      type: "folder",
      description: "Source directory containing app router, components, lib, hooks, constants, etc.",
      expanded: true,
      children: [
        {
          name: "app",
          type: "folder",
          description: "App directory for defining route groups, layouts, and pages using the Next.js App Router.",
          expanded: true,
          children: [
            {
              name: "(external)",
              type: "folder",
              description: "Publicly accessible pages (e.g., feedback forms, landing pages)",
              expanded: true,
              children: [
                {
                  name: "_components",
                  type: "folder",
                  description: "Scoped UI components specific to external pages",
                },
                { name: "page.tsx", type: "file", description: "Public landing page" },
              ],
            },
            {
              name: "(main)",
              type: "folder",
              description: "Main application logic",
              expanded: true,
              children: [
                {
                  name: "auth",
                  type: "folder",
                  description: "Auth routes including login, register, layout, and shared components.",
                  expanded: true,
                  children: [
                    {
                      name: "_components",
                      type: "folder",
                      description: "Shared components used across auth routes like GitHub or Microsoft sign-in.",
                    },
                    {
                      name: "login",
                      type: "folder",
                      expanded: true,
                      description: "Login route",
                      children: [
                        {
                          name: "_components",
                          type: "folder",
                          description: "Components specific to the login page (e.g., LoginForm).",
                        },
                        { name: "page.tsx", type: "file", description: "Login page" },
                      ],
                    },
                    {
                      name: "register",
                      type: "folder",
                      expanded: true,
                      description: "Register route",
                      children: [
                        {
                          name: "_components",
                          type: "folder",
                          description: "Components specific to the register page (e.g., RegisterForm).",
                        },
                        { name: "page.tsx", type: "file", description: "Register page" },
                      ],
                    },
                    { name: "layout.tsx", type: "file", description: "Layout specific to auth pages" },
                  ],
                },
                {
                  name: "dashboard",
                  type: "folder",
                  expanded: true,
                  description: "Dashboard route with layout, UI components, and supporting pages",
                  children: [
                    {
                      name: "[...not-found]",
                      type: "folder",
                      description: "Handles unmatched dashboard routes with a not found page.",
                    },
                    {
                      name: "_components",
                      type: "folder",
                      description:
                        "Scoped UI components for dashboard features like sidebar, navigation, and the root dashboard route.",
                    },
                    { name: "layout.tsx", type: "file", description: "Layout specific to dashboard pages" },
                    { name: "page.tsx", type: "file", description: "Dashboard page" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "components",
          type: "folder",
          description:
            "Top-level components directory containing UI, common elements, and shared building blocks used throughout the app.",
          expanded: true,
          children: [
            {
              name: "ui",
              type: "folder",
              description:
                "UI primitives like buttons, inputs, selects, and other base elements used throughout the app.",
            },
            {
              name: "common",
              type: "folder",
              description:
                "Shared components used across multiple features or routes where colocation isn’t practical.",
            },
          ],
        },
        {
          name: "config",
          type: "folder",
          description: "Application-wide configuration files and settings (e.g., project config, theme, etc.)",
        },
        {
          name: "hooks",
          type: "folder",
          description: "Custom React hooks used across the application",
        },
        {
          name: "lib",
          type: "folder",
          description: "Helper functions, utilities, or modules used across the application.",
        },
        {
          name: "navigation",
          type: "folder",
          description: "Configuration or components related to navigation (e.g., sidebar structure or nav items).",
        },
        {
          name: "constants",
          type: "folder",
          description: "App-wide constant values such as enums, static options, or config objects.",
        },
      ],
    },
  ]);

  const toggleFolder = (path: string[]) => {
    const newTree = [...tree];
    let current = newTree;

    for (const segment of path) {
      const index = current.findIndex((node) => node.name === segment);
      if (index === -1 || !current[index].children) break;

      if (path[path.length - 1] === segment) {
        current[index].expanded = !current[index].expanded;
      }

      current = current[index].children!;
    }

    setTree(newTree);
  };

  const renderTree = (nodes: TreeNode[], path: string[] = []) => {
    return (
      <ul className="pl-4 text-white">
        {nodes.map((node, index) => {
          const currentPath = [...path, node.name];

          return (
            <li key={index} className="py-1">
              <div className="group flex items-start text-left font-mono text-sm">
                <div className="flex min-w-auto items-center md:min-w-46">
                  {node.type === "folder" ? (
                    <button
                      onClick={() => toggleFolder(currentPath)}
                      className="flex items-center transition-colors hover:text-gray-300"
                    >
                      {node.expanded ? (
                        <ChevronDown className="mr-1 h-3 w-3 text-gray-400" />
                      ) : (
                        <ChevronRight className="mr-1 h-3 w-3 text-gray-400" />
                      )}
                      <span>{node.name}</span>
                    </button>
                  ) : (
                    <div className="flex items-center pl-4">
                      <span>{node.name}</span>
                    </div>
                  )}
                </div>

                {node.description && (
                  <div className="ml-2 flex-1 pt-0.5 text-xs text-gray-400 opacity-80 group-hover:opacity-100">
                    {node.description}
                  </div>
                )}
              </div>

              {node.type === "folder" && node.expanded && node.children && renderTree(node.children, currentPath)}
            </li>
          );
        })}
      </ul>
    );
  };

  return <div className="overflow-auto text-left">{renderTree(tree)}</div>;
}
