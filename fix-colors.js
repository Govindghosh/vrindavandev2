const fs = require('fs');
const path = require('path');

function processDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDir(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace text-white with text-primary mapped to tailwind, or just remove text-white where redundant.
      // Actually, since we want text to be dark, let's replace `text-white` with `text-[var(--text-primary)]`.
      if (content.includes('text-white')) {
        content = content.replace(/text-white/g, 'text-slate-900');
        changed = true;
      }
      
      // bg-[rgba(255,255,255,...)] -> bg-[rgba(0,0,0,...)]
      if (content.includes('bg-[rgba(255,255,255,')) {
        content = content.replace(/bg-\[rgba\(255,255,255,/g, 'bg-[rgba(0,0,0,');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDir(path.join(__dirname, 'src'));
console.log('Done');
