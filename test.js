const imageFolder = './src/assets/images/';

const fs = require('fs');

const imgUrls = [];

fs.readdirSync(imageFolder).forEach(file => {
    imgUrls.push(file);
});

console.log(imgUrls);
