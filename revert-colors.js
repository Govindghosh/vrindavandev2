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

      // Revert text-slate-900 back to text-white
      if (content.includes('text-slate-900')) {
        content = content.replace(/text-slate-900/g, 'text-white');
        changed = true;
      }
      
      // Revert bg-[rgba(0,0,0,...)] to bg-[rgba(255,255,255,...)] for glassmorphism
      if (content.includes('bg-[rgba(0,0,0,')) {
        content = content.replace(/bg-\[rgba\(0,0,0,/g, 'bg-[rgba(255,255,255,');
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
console.log('Done reverting colors');
