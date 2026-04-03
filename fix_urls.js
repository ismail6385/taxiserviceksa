const fs = require('fs');

const routes = [
  'jeddah-to-swissotel-makkah',
  'jeddah-to-fairmont-makkah',
  'madinah-to-jeddah-airport-departures',
  'jeddah-to-pullman-makkah'
];

routes.forEach(route => {
  const filePath = `app/(main)/routes/${route}/page.tsx`;
  let content = fs.readFileSync(filePath, 'utf8');
  content = content.replace(
    new RegExp(`https://taxiserviceksa.com/${route}/`, 'g'),
    `https://taxiserviceksa.com/routes/${route}/`
  );
  fs.writeFileSync(filePath, content);
  console.log(`Updated ${filePath}`);
});
