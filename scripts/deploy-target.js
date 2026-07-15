const fs = require('fs');
const path = require('path');

const target = process.argv[2]; // 'root' or 'inframax'

if (!target || (target !== 'root' && target !== 'inframax')) {
  console.error("❌ Error: Please specify a valid target: 'root' or 'inframax'");
  console.error("Usage: node scripts/deploy-target.js <root|inframax>");
  process.exit(1);
}

const workspaceDir = path.resolve(__dirname, '..');
const nextConfigPath = path.join(workspaceDir, 'next.config.ts');
const srcDir = path.join(workspaceDir, 'src');

// 1. Update next.config.ts
console.log(`\n======================================================`);
console.log(`🚀 Switching Project Target to: [ ${target.toUpperCase()} ]`);
console.log(`======================================================\n`);

if (target === 'root') {
  console.log("--> [1/2] Updating next.config.ts for ROOT folder (/) ...");
  const rootConfigContent = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
};

export default nextConfig;
`;
  fs.writeFileSync(nextConfigPath, rootConfigContent, 'utf8');
} else if (target === 'inframax') {
  console.log("--> [1/2] Updating next.config.ts for INFRAMAX subfolder (/inframax) ...");
  const inframaxConfigContent = `import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true },
  basePath: '/inframax',
  assetPrefix: '/inframax',
};

export default nextConfig;
`;
  fs.writeFileSync(nextConfigPath, inframaxConfigContent, 'utf8');
}

// 2. Scan and replace static asset paths across src/ files
console.log(`--> [2/2] Updating asset & image paths across src/ directory ...`);

let modifiedFilesCount = 0;

function scanAndReplace(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      scanAndReplace(fullPath);
    } else if (/\.(tsx|ts|jsx|js|css)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let updated = content;

      if (target === 'root') {
        // Strip out any existing /inframax prefix from assets and favicons
        updated = updated.replace(/\/inframax\/assets\//g, '/assets/');
        updated = updated.replace(/\/inframax\/favicon\.ico/g, '/favicon.ico');
      } else if (target === 'inframax') {
        // First normalize to /assets/ to prevent double prefixing (e.g. /inframax/inframax/assets/)
        updated = updated.replace(/\/inframax\/assets\//g, '/assets/');
        updated = updated.replace(/\/inframax\/favicon\.ico/g, '/favicon.ico');
        
        // Now accurately prefix /assets/ and /favicon.ico with /inframax
        updated = updated.replace(/([^a-zA-Z0-9_\-\.\/])\/assets\//g, '$1/inframax/assets/');
        updated = updated.replace(/^(\/assets\/)/g, '/inframax/assets/');
        updated = updated.replace(/([^a-zA-Z0-9_\-\.\/])\/favicon\.ico/g, '$1/inframax/favicon.ico');
      }

      if (updated !== content) {
        fs.writeFileSync(fullPath, updated, 'utf8');
        modifiedFilesCount++;
        console.log(`   ✔ Updated paths in: ${path.relative(workspaceDir, fullPath)}`);
      }
    }
  }
}

scanAndReplace(srcDir);

console.log(`\n✅ Successfully switched project to [ ${target.toUpperCase()} ] hosting mode! (${modifiedFilesCount} files updated)`);
console.log(`👉 Next step: run "npm run build" to export your static site to out/`);
console.log(`======================================================\n`);
