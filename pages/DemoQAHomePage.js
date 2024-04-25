const {chromium} = require('playwright')

class DemoQAHomePage{

    constructor(page){
        this.page = page;
    }

    async navigate(){
        await this.page.goto('https://demoqa.com/automation-practice-form');
    }

    async fillForm(firstName, lastName, email){

        await this.page.type('input[id=firstName]', firstName);
        await this.page.type('input[id=lastName]', lastName);
        await this.page.type('input[id=userEmail]', email);
        await this.page.click("input[id='gender-radio-1']");
        
        await this.page.waitForNavigation();

    }
}
module.exports = DemoQAHomePage;