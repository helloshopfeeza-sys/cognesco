const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Jeseey Manpower
  await page.goto('https://www.jeseeymanpower.com/', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/jeseey.png' });

  // BeMuslim Playstore
  await page.goto('https://play.google.com/store/apps/details?id=com.firstapp.qadr', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/bemuslim.png' });

  await browser.close();
})();
