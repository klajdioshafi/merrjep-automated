import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.merrjep.al/llogaria', {waitUntil: 'load', timeout: 300000});

  // Set screen size
  await page.setViewport({width: 1920, height: 1080});

  // Type Email
  await page.type("#EmailOrPhone", "denis.kallcaku@hotmail.com");
  await page.click(".btn.btn-block");
  await page.waitForSelector("input.form-control");

  // Type Password
  await page.type("input.form-control", "1478963denisi");
  await page.click("body > div.website-wrapper > div.container-fluid > div > div.col-12.col-sm-12.col-md-12.col-lg-12.col-xl-12.pl-0.pr-0 > section > div > div > div > div > div.ui-form > form > button");
  

  // Wait for modal to close
  await page.waitForSelector("#modal-promotion-vip-private");
  await page.click("#modal-promotion-vip-private > div > div.modal-window > div.modal-footer > button.new-btn.btn-default");

  // .then(() => {
  //   page.click("#modal-promotion-vip-private > div > div.modal-window > div.modal-footer > button.new-btn.btn-default");
  //     // Click profile and wait for dropdown to open
  //   page.waitForSelector("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > button");
  //   page.click("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > button");
  //   page.waitForSelector("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > div.user-account-menu");

  // }).catch(() =>{
  //     // Click profile and wait for dropdown to open
  //   page.waitForSelector("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > button");
  //   page.click("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > button");
  //   page.waitForSelector("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > div.user-account-menu");  
  // });
  


  // await page.waitForSelector("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > button");
  // await page.click("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > button");
  // await page.waitForSelector("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > div.user-account-menu");
  
  await page.waitForSelector("body > div.website-wrapper");
  await page.goto('https://www.merrjep.al/llogaria/njoftimet-e-mija', {waitUntil: 'load', timeout: 300000});

  // Click Njoftimet e Mija and wait for posts to open
  // await page.click("body > div.website-wrapper > header > div.top-header > div > div.row > div.span7 > div > div > div > ul > li:nth-child(3) > a");
  await page.waitForSelector("#ads-active > div.myads-published-all-items");
  await page.evaluate(() => {
    let carsList = document.querySelector("#ads-active > div.myads-published-all-items").children;
    let list = [...carsList];
    return list;
  }).then(list => {
    list.pop();
    list.forEach(el => {
      console.log(el.childElementCount);
      // let adPanel = el.children[1];
      // let mainArea = adPanel.children[0];
      // let rightSide = mainArea.children[0].children[1];
      // let infoBlock = rightSide.children[0];
      // let adId = infoBlock.children[0];
      // let id = adId.innerText.split(' ')[1];

      // // Go to renew page and check renewal
      // page.goto(`https://www.merrjep.al/njoftim/menaxho-njoftimin/${id}`,{waitUntil: 'load', timeout: 300000 });
      // page.waitForSelector('input[value="Renewal"]');
      // page.click('input[value="Renewal"]');
        
      // // Submit
      // page.waitForSelector('input[value="Dërgoni"]');
      // page.click('input[value="Dërgoni"]');
        
      //   // Go to posts
      // page.goto('https://www.merrjep.al/llogaria/njoftimet-e-mija', {waitUntil: 'load', timeout: 300000});
    })
  });

  
  

  // for(let i=0;i<posts.length;i++) {
  //   let adPanel = posts[i]?.children[1];
  //   let mainArea = adPanel?.children[0];
  //   let rightSide = mainArea?.children[0].children[1];
  //   let infoBlock = rightSide?.children[0];
  //   let adId = infoBlock?.children[0];
  //   let id = adId.innerText?.split(' ')[1];
    // const id = posts[i]?.children[1].children[0].children[0].children[1].children[0].children[0].innerText.split(' ')[1];
    // console.log(id);
    // Go to renew page and check renewal
    // await page.goto(`https://www.merrjep.al/njoftim/menaxho-njoftimin/${id}`,{waitUntil: 'load', timeout: 300000 });
    // await page.waitForSelector('input[value="Renewal"]');
    // await page.click('input[value="Renewal"]');

    // Submit
    // await page.waitForSelector('input[value="Dërgoni"]');
    // await page.click('input[value="Dërgoni"]');

    // Continue
    // await page.waitForSelector('button.new-btn');
    // await page.click('button.new-btn');

    // Go to posts
    //await page.goto('https://www.merrjep.al/llogaria/njoftimet-e-mija', {waitUntil: 'load', timeout: 300000});
  // }

  // Go to renew page and check renewal
  // await page.goto(`https://www.merrjep.al/njoftim/menaxho-njoftimin/${id}`,{waitUntil: 'load', timeout: 300000 });
  // await page.waitForSelector('input[value="Renewal"]');
  // await page.click('input[value="Renewal"]');

  // // Submit
  // await page.waitForSelector('input[value="Dërgoni"]');
  // await page.click('input[value="Dërgoni"]');

  // // Continue
  // await page.waitForSelector('button.new-btn');
  // await page.click('button.new-btn');

  // // Go to posts
  // await page.goto('https://www.merrjep.al/llogaria/njoftimet-e-mija', {waitUntil: 'load', timeout: 300000});


  // let result = await page.evaluate(() => {
  //   let optionsList = document.querySelectorAll('#DoAction');
  //   return optionsList.item(2);
  //   // let check = document.querySelectorAll("#DoAction")[index];
  // });


  // const result = await page.evaluate(() => {
  //   let emailInput = document.getElementById("EmailOrPhone");
  //   emailInput.value = "denis.kallcaku@hotmail.com";
  //   let loginBtn = document.querySelectorAll(".btn.btn-block");
  //   loginBtn[0].click();
  //   let passwordInput = document.querySelector("input.form-control");
  //   passwordInput.value = "1478963denisi";
  //   let login = document.querySelector("body > div.website-wrapper > div.container-fluid > div > div.col-12.col-sm-12.col-md-12.col-lg-12.col-xl-12.pl-0.pr-0 > section > div > div > div > div > div.ui-form > form > button");
  //   login.click();
  //   return passwordInput;
  // });

  // console.log(result);

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