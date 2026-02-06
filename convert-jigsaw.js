import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import ffmpegPath from 'ffmpeg-static';

const __dirname = dirname(fileURLToPath(import.meta.url));
const input = join(__dirname, 'src', 'assets', 'vecteezy_piece-of-white-jigsaw-filling-by-hand-success-concept_1622168 (1).mov');
const output = join(__dirname, 'src', 'assets', 'jigsaw-success.mp4');

execSync(`"${ffmpegPath}" -i "${input}" -c:v libx264 -preset fast -crf 23 -c:a aac "${output}"`, {
  stdio: 'inherit'
});

console.log('Done! Created:', output);
