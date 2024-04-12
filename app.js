import puppeteer from 'puppeteer';
import { getCredentials } from './credentials.js';

const refreshPosts = async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.merrjep.al/llogaria', {waitUntil: 'load', timeout: 300000});

  // Set screen size
  await page.setViewport({width: 1920, height: 1080});

  // Type Email
  await page.type("#EmailOrPhone", getCredentials().email)
  .then(res => {
    console.log(res)
  }).catch(err => {
    console.log('Emaili i pasakte!')
  });

  await page.click(".btn.btn-block");
  await page.waitForSelector('input[name = "IsCheckedEmailOrPhone"]', {timeout: 5000});

  // const validateEmail = function() {
  //   if(validEmail === true){
  //     console.log("Email valid")
  //   }else {
  //     console.log("Email not valid")
  //   }
  // }
  

  // validateEmail()


    // .then(()=> {
    //   const validEmail = page.evaluate(() => {
    //     let checkedEmail = document.querySelector('input[name = "IsCheckedEmailOrPhone"]');
    //     if(checkedEmail.value === 'true') {
    //       return true;
    //     }else {
    //       return false;
    //     }
    //   })

    //   if(validEmail) {
    //     return Promise.resolve('Email valid');
    //   }else {
    //     return Promise.reject('Email not valid');
    //   }
    // })
    // .catch((err) => {
    //   console.log('Email not valid');
    // });

  // Type Password
  await page.type("input.form-control", getCredentials().password);
  await page.click("body > div.website-wrapper > div.container-fluid > div > div.col-12.col-sm-12.col-md-12.col-lg-12.col-xl-12.pl-0.pr-0 > section > div > div > div > div > div.ui-form > form > button");
  

  // Wait for modal to close
  await page.waitForSelector("#modal-promotion-vip-private");
  await page.click("#modal-promotion-vip-private > div > div.modal-window > div.modal-footer > button.new-btn.btn-default");

  // Wait for main page to load and go to ads
  await page.waitForSelector("body > div.website-wrapper");
  await page.goto('https://www.merrjep.al/llogaria/njoftimet-e-mija', {waitUntil: 'load', timeout: 300000});

  // Wait for ads to load
  await page.waitForSelector("#ads-active > div.myads-published-all-items");
  const list = await page.evaluate(() => {
    let items = Array.from(document.querySelectorAll("#ads-active > div.myads-published-all-items > div.goods-card"));
    let ids = [];
    items.forEach(el => {
      ids.push(el.children[1].children[0].children[0].children[1].children[0].children[0].innerText.split(' ')[1]);
    });
    return ids; 
  });
  
  // Loop through every ad and refresh
  for(let i=0;i<list.length;i++) {

    // Go to renew page and check renewal
    await page.goto(`https://www.merrjep.al/njoftim/menaxho-njoftimin/${list[i]}`,{waitUntil: 'load', timeout: 300000 });
    await page.waitForSelector('input[value="Renewal"]');
    await page.click('input[value="Renewal"]');

    // Submit
    await page.waitForSelector('input[value="Dërgoni"]');
    await page.click('input[value="Dërgoni"]');
    // Continue
    await page.waitForSelector("body > div.website-wrapper > div.success-nopay-page.free-ad.ci-margin-b-100 > div > div > button");
    await page.click("body > div.website-wrapper > div.success-nopay-page.free-ad.ci-margin-b-100 > div > div > button");

    // Go to posts
    await page.goto('https://www.merrjep.al/llogaria/njoftimet-e-mija', {waitUntil: 'load', timeout: 300000});
  }

  await page.close();
  await browser.close();
};

refreshPosts();

setInterval(() => {
  refreshPosts();
}, 7200000);