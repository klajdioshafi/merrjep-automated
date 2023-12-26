import puppeteer from 'puppeteer';
import { MerrjepCredentials } from './credentials.js';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.merrjep.al/llogaria', {waitUntil: 'load', timeout: 300000});

  // Set screen size
  await page.setViewport({width: 1920, height: 1080});
  const result = await page.evaluate(() => {
    let emailInput = document.getElementById("EmailOrPhone");
    let credentials = new MerrjepCredentials();
    // emailInput.value = "klajdioshafi99@gmail.com";
    emailInput.value = credentials.email;
    let loginBtn = document.querySelectorAll(".btn.btn-block");
    loginBtn[0].click();
    return emailInput;
  });

  console.log(result);

//   await browser.waitForTarget(() => false);

//   const result = await page.evaluate(() => {
    
//   });

  // Type into search box
//   await page.type('.search-box__input', 'automate beyond recorder');

  // Wait and click on first result
//   const searchResultSelector = '.search-box__link';
//   await page.waitForSelector(searchResultSelector);
//   await page.click(searchResultSelector);

  // Locate the full title with a unique string
//   const textSelector = await page.waitForSelector(
//     'text/Customize and automate'
//   );
//   const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
//   console.log('The title of this blog post is "%s".', fullTitle);

  // await browser.close();
})();