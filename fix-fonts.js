const fs = require('fs');

const file = 'src/app/globals.css';
let css = fs.readFileSync(file, 'utf8');

css = css.replace(
  /html \{\r?\n  font-size: 16px;/g,
  'html {\n  font-size: 18px;'
);

css = css.replace(
  /line-height: 1\.55;\r?\n  font-size: 16px;/g,
  'line-height: 1.6;\n  font-size: 18px;'
);

css = css.replace(
  /\.text-body \{\r?\n  font-size: clamp\(14px, 1\.8vw, 16px\);\r?\n\}/g,
  '.text-body {\n  font-size: clamp(16px, 2vw, 18px);\n}'
);

css = css.replace(
  /\.text-small \{\r?\n  font-size: clamp\(12px, 1\.4vw, 14px\);\r?\n\}/g,
  '.text-small {\n  font-size: clamp(14px, 1.6vw, 16px);\n}'
);

fs.writeFileSync(file, css);
console.log('Font sizes updated successfully.');
