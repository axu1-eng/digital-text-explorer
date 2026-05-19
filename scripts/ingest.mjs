// change to import 
const http = await import('https'); // or 'https' for https:// URLs
const fs = await import('fs');
// const http = require('http'); // or 'https' for https:// URLs
// const fs = require('fs');

const filesToDownload = [
  { url: 'https://ticha-zapotec.github.io/digital-text-explorer-metadata/documents.json', filename: 'documents.json' },
  { url: 'https://ticha-zapotec.github.io/digital-text-explorer-metadata/archives.json', filename: 'archives.json' },
  { url: 'https://ticha-zapotec.github.io/digital-text-explorer-metadata/towns.json', filename: 'towns.json' },
  { url: 'https://ticha-zapotec.github.io/digital-text-explorer-metadata/document_types.json', filename: 'document_types.json' }
];

filesToDownload.forEach(({ url, filename }) => {
  const file = fs.createWriteStream(`src/_data/api/${filename}`);
  http.get(url, (response) => {
    response.pipe(file);
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(`src/_data/api/${filename}`, () => {}); // Delete the file async if error
    console.error(`Error downloading ${filename}: ${err.message}`);
  });
});