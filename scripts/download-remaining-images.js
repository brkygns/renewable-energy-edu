const https = require('https');
const fs = require('fs');
const path = require('path');

// Resimlerin indirileceği klasör
const imagesDir = path.join(__dirname, '../public/images');

// Alternatif kaynaklar kullanarak indirme listesini güncelliyoruz
const imagesToDownload = [
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Hydrogen_Fuel_Cell_Block_Diagram.svg/1200px-Hydrogen_Fuel_Cell_Block_Diagram.svg.png',
    filename: 'hydrogen-nuclear.jpg',
    description: 'Hidrojen ve Nükleer Enerji'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Renewable_energy_sources.jpg/1200px-Renewable_energy_sources.jpg',
    filename: 'renewable-concepts.jpg',
    description: 'Yenilenebilir Enerji Kavramları'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Hydroelectric_dam.svg/1200px-Hydroelectric_dam.svg.png',
    filename: 'hero-bg.jpg',
    description: 'Ana Sayfa Arkaplan'
  },
  {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Infographic_-_renewable_energy.png/1200px-Infographic_-_renewable_energy.png',
    filename: 'quiz-bg.jpg',
    description: 'Test Sayfası Arkaplanı'
  }
];

// Klasörün var olduğundan emin ol
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Resimleri indir
imagesToDownload.forEach(image => {
  const filePath = path.join(imagesDir, image.filename);
  const file = fs.createWriteStream(filePath);
  
  console.log(`Downloading: ${image.description} (${image.filename})`);
  
  https.get(image.url, response => {
    if (response.statusCode !== 200) {
      console.error(`Failed to download ${image.filename}: HTTP ${response.statusCode}`);
      file.close();
      fs.unlinkSync(filePath); // Başarısız indirme durumunda dosyayı sil
      return;
    }
    
    response.pipe(file);
    
    file.on('finish', () => {
      file.close();
      console.log(`Downloaded: ${image.filename}`);
    });
  }).on('error', err => {
    fs.unlinkSync(filePath); // Hata durumunda dosyayı sil
    console.error(`Error downloading ${image.filename}: ${err.message}`);
  });
});

console.log('Image download initiated. Please wait for completion messages...'); 