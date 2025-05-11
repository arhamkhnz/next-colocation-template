import packageJson from "../../package.json";

const currentYear = new Date().getFullYear();

export const PROJECT_CONFIG = {
  name: "Next Colocation Template",
  version: packageJson.version,
  copyright: `© ${currentYear}, All Rights Reserved.`,
};
