import https from 'https';

https.get('https://www.belakrajina.si/sl/kaj-poceti/narava/reka-kolpa/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const relativeUrls = data.match(/(href|src)=["']([^"']+\.(jpg|jpeg|png|webp))["']/gi);
    console.log("Relative:", Array.from(new Set(relativeUrls)));
  });
});
