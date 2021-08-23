const { test, expect } = require('@playwright/test');
const { LunchStartPage } = require('../pages/lunchStartPage');
const { randomStrings } = require('../pages/functions');
const { randomNumbers } = require('../pages/functions');

const randomString = randomStrings();
const randomNumber = randomNumbers();

test.describe('Lunch app test suite', () => {
    let page;
    
    test.beforeAll(async ({ browser }) => {
        page = await browser.newPage();
        startPage = new LunchStartPage(page);
    });
    test.beforeEach(async () => {
    await startPage.goto();
    
    });

    test('Test if all week days can be clicked', async () => {
        await page.click('text=check_box_outline_blankPirmadienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankAntradienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankTrečiadienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankKetvirtadienis >> :nth-match(div, 2)');
        await page.click('text=check_box_outline_blankPenktadienis >> :nth-match(div, 2)');
    });
    test('Is URL created', async () => {
        await page.fill('[aria-label="Tiekėjo Pavadinimas"]', randomString);
        await page.click('text=arrow_drop_down');
        await page.click('text=Red');
        await page.click('text=check_box_outline_blankPirmadienis >> :nth-match(div, 2)');
        await page.click('[aria-label="Parinkta savaitė"]');
        await page.click('button:has-text("30")');
        await page.click('button:has-text("Generuoti Nuorodą")');
        const isURLVisible = await page.isVisible('[aria-label="Nuoroda"]');
        console.log(isURLVisible);
        expect(isURLVisible).toBe(true);
    });
    test('Submit dish without price', async () => {
        await page.fill('[aria-label="Tiekėjo Pavadinimas"]', randomString);
        await page.click('text=arrow_drop_down');
        await page.click('text=Red');
        await page.click('text=check_box_outline_blankPirmadienis >> :nth-match(div, 2)');
        await page.click('[aria-label="Parinkta savaitė"]');
        await page.click('button:has-text("30")');
        await page.click('button:has-text("Generuoti Nuorodą")');
        const URL = await page.inputValue('[aria-label="Nuoroda"]');
        await page.goto(URL);
        await page.fill('[aria-label="Kaina"]', randomNumber);
        await page.click('button:has-text("Pateikti Patiekalus")');
        const isErrorVisible = await page.isVisible('text=Įvestuose patiekaluose rasta klaidų arba ne visi laukai buvo užpildyti.');
        expect(isErrorVisible).toBe(true);
    });
    test('Submit dish without name', async () => {
        await page.fill('[aria-label="Tiekėjo Pavadinimas"]', randomString);
        await page.click('text=arrow_drop_down');
        await page.click('text=Red');
        await page.click('text=check_box_outline_blankPirmadienis >> :nth-match(div, 2)');
        await page.click('[aria-label="Parinkta savaitė"]');
        await page.click('button:has-text("30")');
        await page.click('button:has-text("Generuoti Nuorodą")');
        const nuoroda=await page.inputValue('[aria-label="Nuoroda"]');
        await page.goto(nuoroda);
        await page.fill('[aria-label="Patiekalo Pavadinimas"]', randomString);
        await page.click('button:has-text("Pateikti Patiekalus")');
        const ErrorVisible=await page.isVisible('text=Įvestuose patiekaluose rasta klaidų arba ne visi laukai buvo užpildyti.');
        expect(ErrorVisible).toBe(true);
    });
});