const { test, expect } = require('@playwright/test');
const { LunchStartPage } = require('../lunchStartPage');
const randomStrings = (length = 8) => {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789,./[]()"{}';
        for ( let i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
    return result;
};
test.describe('Lunch app test suite', () => {
    let page;
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        startPage = new LunchStartPage(page);
    });
    test.beforeEach(async () => {
    await startPage.goto();
    });
    test('Go to start page', async () => {
    })
    test('Test if all week days can be clicked', async () => {
        await page.click('text=check_box_outline_blankPirmadienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankAntradienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankTrečiadienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankKetvirtadienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankPenktadienis >> :nth-match(div, 2)');
    });
    test('Is URL created', async () => {
        await page.fill('[aria-label="Tiekėjo Pavadinimas"]', randomStrings());
        await page.click('text=arrow_drop_down');
        await page.click('text=Red');
        await page.click('text=check_box_outline_blankPirmadienis >> :nth-match(div, 2)');
        await page.click('[aria-label="Parinkta savaitė"]');
        await page.click('button:has-text("30")');
        await page.click('button:has-text("Generuoti Nuorodą")');
        const nuoroda=await page.inputValue('[aria-label="Nuoroda"]');
        await page.goto(nuoroda);
    });
    test('Submit dish without name', async () => {
        await page.fill('[aria-label="Tiekėjo Pavadinimas"]', randomStrings());
        await page.click('text=arrow_drop_down');
        await page.click('text=Red');
        await page.click('text=check_box_outline_blankPirmadienis >> :nth-match(div, 2)');
        await page.click('[aria-label="Parinkta savaitė"]');
        await page.click('button:has-text("30")');
        await page.click('button:has-text("Generuoti Nuorodą")');
        const nuoroda=await page.inputValue('[aria-label="Nuoroda"]');
        await page.goto(nuoroda);
        await page.fill('[aria-label="Patiekalo Pavadinimas"]', randomStrings());
        await page.click('button:has-text("Pateikti Patiekalus")');
        const ErrorVisible=await page.isVisible('text=Įvestuose patiekaluose rasta klaidų arba ne visi laukai buvo užpildyti.');
        expect(ErrorVisible).toBe(true);
    });
});
