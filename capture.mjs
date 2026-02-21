import puppeteer from 'puppeteer';
import * as path from 'path';

(async () => {
    const browser = await puppeteer.launch();
    try {
        const page1 = await browser.newPage();
        await page1.setViewport({ width: 1440, height: 900 });
        await page1.goto(`file://${path.resolve('public/westudy.html')}`, { waitUntil: 'networkidle0' });
        await page1.screenshot({ path: 'public/westudy-raw.png' });
        console.log('WeStudy raw captured');

        const page2 = await browser.newPage();
        await page2.setViewport({ width: 1440, height: 900 });
        await page2.goto(`file://${path.resolve('public/gym.html')}`, { waitUntil: 'networkidle0' });
        await page2.screenshot({ path: 'public/gym-raw.png' });
        console.log('Gym raw captured');
    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
})();
