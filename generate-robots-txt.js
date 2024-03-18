import { fs } from "fs";

const productionRobotsTxt = "User-agent: *\nDisallow:";
const nonProductionRobotsTxt = "User-agent: *\nDisallow: /";

fs.writeFileSync(
  "dist/robots.txt",
  process.env.NODE_ENV === "production"
    ? productionRobotsTxt
    : nonProductionRobotsTxt
);
