import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class ProductPage extends BasePage{

    readonly searchField: Locator
    readonly searchButton: Locator

    constructor(page:Page){
        super(page)
        this.searchField = this.page.getByRole('textbox', {name: 'Search Product'})
        this.searchButton = this.page.locator('#submit_search')
    }

    async searchProduct(searchTerm: string){
        await this.searchField.fill(searchTerm)
        await this.searchButton.click()
        await this.waitForPageLoad()
    }
    
}