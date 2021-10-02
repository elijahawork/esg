import express from 'express'
const app = express();

const PORT = 5000;

// app.listen(PORT, () => {
//   console.log('Listening on', PORT);
// });
import got from 'got'
import jsdom from 'jsdom'
const { JSDOM } = jsdom;

const vgmUrl= 'https://stockanalysis.com/stocks/';

got(vgmUrl).then(response => {
  const dom = new JSDOM(response.body);
  console.log(dom.window.document.querySelectorAll('td a'));
}).catch(err => {
  console.log(err);
});
