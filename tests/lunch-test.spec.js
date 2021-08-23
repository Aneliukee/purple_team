const { test, expect } = require('@playwright/test');
const { LunchStartPage } = require('../pages/lunchStartPage');

test.describe('Lunch app test suite', () => {
    let page;
    
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        startPage = new LunchStartPage(page);
    });
    test.beforeEach(async () => {
    await startPage.goto();
    
});
});