import { Page } from '@playwright/test';

export class BasePage{
    readonly page: any;

    constructor(page:Page){
        this.page = page
    }

    async navigate(path: string ='' ){
        await this.page.goto('/${path')
    }

    async getTitle(){
        return await this.page.title()
    }

    async waitForPageLoad(){
        await this.page.waitForLoadState('load')
    }

    async isTextVisible(element: string, text: string): Promise<boolean>{
       return await this.page.locator(element).filter({hasText: text})
    }
}