const { chromium } = require('playwright');

const DemoQAHomePage = require('../pages/DemoQAHomePage.js');

(async () => {
    const browser = await chromium.launch({
        headless: false,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
    });

    const page = await browser.newPage();
    const homePage = new DemoQAHomePage(page);
  
    await homePage.navigate();
    await homePage.fillForm('CrName','CrLastName','cremail@gmail.com');
  
    // Add your assertions here
  
    await browser.close();
  })();