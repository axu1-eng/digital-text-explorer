import fs from 'fs/promises';
import { readFileSync } from 'fs';

const targetDir = 'src/_data/api';
const outputDir = 'static/thumbnails';
const documents = JSON.parse(readFileSync(`${targetDir}/documents.json`, 'utf8'));

await fs.mkdir(outputDir, { recursive: true });

async function download(url, outputFile) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`);
  }

  const contentType = response.headers.get('content-type') || '';
  if (!contentType.startsWith('image/')) {
    const text = await response.text();
    throw new Error(`Unexpected content type ${contentType}: ${text.slice(0, 100)}`);
  }

  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  await fs.writeFile(outputFile, buffer);
}

async function main() {
  const concurrency = 10;

  for (let i = 0; i < documents.length; i += concurrency) {
    const batch = documents.slice(i, i + concurrency).map(async (doc) => {
      const url = `https://awy5mcn5cgxb3cxtpcyf7cp6pu0lgvmp.lambda-url.us-east-1.on.aws/iiif/3/${doc.slug}/000/square/250,/0/default.jpg`;
      const file = `${outputDir}/${doc.slug}.jpg`;

      try {
        await download(url, file);
        console.log(`Downloaded thumbnail for ${doc.slug}`);
      } catch (err) {
        console.error(`Error downloading thumbnail for ${doc.slug}: ${err.message}`);
      }
    });

    await Promise.all(batch);
  }
}

await main();