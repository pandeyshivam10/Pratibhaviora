import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, 'public', 'logo.png');
const svgPath = path.join(__dirname, 'public', 'favicon.svg');

try {
    const data = fs.readFileSync(logoPath).toString('base64');
    // Using a slightly more conservative zoom (120%) to avoid any clipping
    // logo is 321x178 (Aspect Ratio 1.8)
    // Scale 1.2: width=120, height = 120/1.8 = 66.6
    // x = (100 - 120) / 2 = -10
    // y = (100 - 66.6) / 2 = 16.7
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <image href="data:image/png;base64,${data}" x="-10" y="16.7" width="120" height="66.6" preserveAspectRatio="xMidYMid meet" />
</svg>`;
    fs.writeFileSync(svgPath, svg);
    console.log('Successfully generated 120% zoom favicon.svg');
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
