const http  = await import('https');
const fs    = await import('fs');

const baseUrl          = 'https://ticha-zapotec.github.io/digital-text-explorer-data'
const targetDir        = 'src/_data/api';
const filesToDownload  = [
  'documents.json', 
  'archives.json', 
  'towns.json', 
  'document_types.json'
];

filesToDownload.forEach((filename) => {
  const file = fs.createWriteStream(`${targetDir }/${filename}`);
  const url  = `${baseUrl}/${filename}`;

  fs.mkdir(targetDir, { recursive: true }, (err) => {
    if (err) {
      console.error(`Error creating directory: ${err.message}`);
      return;
    }
  });

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
