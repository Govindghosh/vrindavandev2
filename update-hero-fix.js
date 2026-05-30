const fs = require('fs');
const file = 'src/components/sections/Hero.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('SquigglyText')) {
  content = content.replace(
    "import { useTypewriter } from '@/hooks/useTypewriter'",
    "import { useTypewriter } from '@/hooks/useTypewriter'\nimport { SquigglyText } from '@/components/ui/squiggly-text'"
  );

  content = content.replace(
    '<span className="block bg-gradient-to-r from-gold-primary via-gold-light to-gold-primary bg-clip-text text-transparent">DEV</span>',
    '<SquigglyText scale={[2, 4]} stepDuration={80} className="block text-gold-primary glow-gold">DEV</SquigglyText>'
  );

  fs.writeFileSync(file, content);
  console.log('Hero.tsx updated.');
}
