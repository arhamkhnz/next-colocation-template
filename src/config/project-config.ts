import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const PROJECT_CONFIG = {
  name: "Next Colocation Template",
  description: "A Next.js template showcasing a clean colocation-based folder structure using the App Router.",
  version: packageJson.version,
  copyright: `© ${currentYear}, All Rights Reserved.`,
};
