exports.LunchStartPage = class LunchStartPage {
    constructor(page) {
        this.page = page;}
    await this.page.goto('https://lunch.devbstaging.com/login-password');
    await this.page.fill('[aria-label="Email"]', 'admin10@sourceryacademy.com');
    await this.page.fill('[aria-label="Password"]', 'nera svarbus62');
    await this.page.click('.v-btn__content');
    await this.page.click('text=Patiekalų Redagavimas');
    await this.page.hover('button:has-text("buildclose")');
    await this.page.click('button:has-text("link")');
    }
}