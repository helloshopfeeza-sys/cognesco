import puppeteer from 'puppeteer';

(async () => {
    const browser = await puppeteer.launch();
    try {
        const page = await browser.newPage();
        await page.setViewport({ width: 1440, height: 2000 });
        await page.goto('http://localhost:5173/about', { waitUntil: 'networkidle0' });

        // Let it scroll a bit so IntersectionObserver triggers
        await page.evaluate(() => window.scrollBy(0, 500));
        await new Promise(r => setTimeout(r, 1000));
        await page.evaluate(() => window.scrollBy(0, 500));
        await new Promise(r => setTimeout(r, 1000));

        await page.screenshot({ path: 'public/about-screenshot.png', fullPage: true });
        console.log('about page captured');
    } catch (error) {
        console.error(error);
    } finally {
        await browser.close();
    }
})();
