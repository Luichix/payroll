const fs = require('fs');
const objectParse = require('./assets/objectParse');

const createJson = (data) => {
  const json = JSON.stringify(data, null, 2);

  fs.writeFile('./src/scripts/archive/created.json', json, 'utf8', (error) => {
    if (error) throw error;
    console.log('🎨 Custom properties created!');
  });
};

createJson(objectParse);
