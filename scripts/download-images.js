const https = require('https');
const fs = require('fs');
const path = require('path');

// Resimlerin indirileceği klasör
const imagesDir = path.join(__dirname, '../public/images');

// İndirilecek resimlerin listesi
const imagesToDownload = [
  {
    url: 'https://www.eia.gov/energyexplained/hydropower/images/dam_illustration.jpg',
    filename: 'hydro-energy.jpg',
    description: 'Hidroelektrik Enerji'
  },
  {
    url: 'https://www.eia.gov/energyexplained/solar/images/types-of-solar.jpg',
    filename: 'solar-energy.jpg',
    description: 'Güneş Enerjisi'
  },
  {
    url: 'https://www.eia.gov/energyexplained/wind/images/wind-turbine-illustration.jpg',
    filename: 'wind-energy.jpg',
    description: 'Rüzgar Enerjisi'
  },
  {
    url: 'https://www.eia.gov/energyexplained/biomass/images/biomass-path.jpg',
    filename: 'biomass-energy.jpg',
    description: 'Biyokütle Enerjisi'
  },
  {
    url: 'https://www.eia.gov/energyexplained/geothermal/images/geothermal-plant-illustration.jpg',
    filename: 'geothermal-energy.jpg',
    description: 'Jeotermal Enerji'
  },
  {
    url: 'https://www.energy.gov/sites/default/files/styles/full_article_width/public/hydrogen-use-980x300.jpg',
    filename: 'hydrogen-nuclear.jpg',
    description: 'Hidrojen ve Nükleer Enerji'
  },
  {
    url: 'https://www.eia.gov/energyexplained/hydropower/images/waves_ocean.jpg', 
    filename: 'wave-energy.jpg',
    description: 'Dalga ve Okyanus Enerjisi'
  },
  {
    url: 'https://www.energy.gov/sites/default/files/styles/full_article_width/public/2022-07/aerial-view-of-hydroelectric-dam-EERE-980x300.jpg',
    filename: 'hero-bg.jpg',
    description: 'Ana Sayfa Arkaplan'
  },
  {
    url: 'https://www.energy.gov/sites/default/files/styles/full_article_width/public/2021-11/solar-panel-illustration-980x300.jpg',
    filename: 'renewable-concepts.jpg',
    description: 'Yenilenebilir Enerji Kavramları'
  },
  {
    url: 'https://www.energy.gov/sites/default/files/styles/full_article_width/public/2021-12/DOE%20Quiz%20Time%20-%20980x300.png',
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