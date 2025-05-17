import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const PROJECT_CONFIG = {
  name: "Next.js Colocation Template - Scalable Folder Structure Guide",
  description:
    "A modular and practical Next.js template demonstrating a colocated, feature-first folder structure powered by the App Router and TypeScript.",
  version: packageJson.version,
  copyright: `© ${currentYear}, All Rights Reserved.`,
};
