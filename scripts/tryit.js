const puppeteer = require('puppeteer');

const CRED = {
  user: '1000029687737',
  pass: '5128'
};

const word = 'plethora';

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://login.ezproxy.spl.org/login?url=https://www.oed.com/');
  await page.type('input[name="user"]', CRED.user);
  await page.type('input[name="pass"]', CRED.pass);
  await Promise.all([
    page.click('input[name="Submit"]'),
    page.waitForNavigation()
  ]);
  console.log('Should be logged in');
  await page.type('#q', word);
  await Promise.all([
    page.click('input[name="_searchBtn"]'),
    page.waitForNavigation()
  ]);
  console.log('Should have navigated to entry page');
  await Promise.all([
    page.click('#viewFull'),
    page.waitForNavigation()
  ]);
  await page.screenshot({ path: 'oed-word.png' })
  const etymology = await page.evaluate(() => document.querySelector('.etymology').innerHTML);
  const definition = await page.evaluate(() => document.querySelector('h3').innerHTML);
  const quotations = await page.evaluate(() => document.querySelector('.quotationsBlock').innerHTML);
  console.log('definition', definition);
  console.log('etymology', etymology);
  console.log('quotations', quotations);
  await browser.close();
});

