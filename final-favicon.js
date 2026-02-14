import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, 'public', 'logo.png');
const svgPath = path.join(__dirname, 'public', 'favicon.svg');

try {
    const data = fs.readFileSync(logoPath).toString('base64');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <image href="data:image/png;base64,${data}" x="-10" y="16.7" width="120" height="66.6" preserveAspectRatio="xMidYMid meet" />
</svg>`;
    fs.writeFileSync(svgPath, svg);
    console.log('Successfully generated favicon.svg');
} catch (err) {
    console.error('Error:', err);
    process.exit(1);
}
