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
    emailInput.value = "denis.kallcaku@hotmail.com";
    let loginBtn = document.querySelectorAll(".btn.btn-block");
    loginBtn[0].click();
    let passwordInput = document.querySelector("input.form-control");
    passwordInput.value = "1478963denisi";
    let login = document.querySelector("body > div.website-wrapper > div.container-fluid > div > div.col-12.col-sm-12.col-md-12.col-lg-12.col-xl-12.pl-0.pr-0 > section > div > div > div > div > div.ui-form > form > button");
    login.click();
    return passwordInput;
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