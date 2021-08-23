xports.LunchStartPage = class LunchStartPage {
    constructor(page) {
        this.page = page;}

    async goto() {
    await this.page.goto('https://lunch.devbstaging.com/dishes/monday/Talutti');
    }
}