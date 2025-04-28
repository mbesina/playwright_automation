import { Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage'

export class HomePage extends BasePage{
    readonly homepageHeading: Locator
    readonly loginLink: Locator
    readonly logoutLink: Locator
    readonly productLink: Locator

    constructor(page:Page){
        super(page)
        this.homepageHeading = this.page.getByRole('heading', {name:'AutomationExercise'})
        this.loginLink = this.page.getByRole('link', {name: ' Signup / Login'})
        this.logoutLink = this.page.getByRole('link').filter({ hasText: 'Logout' })
        this.productLink = this.page.getByRole('link').filter({ hasText: 'Products' })
    }

    async navigateToHomepage(){
        await this.navigate()
        await this.waitForPageLoad()
    }
    async headingValue(): Promise<boolean>{
        return await this.homepageHeading.isVisible()
    }

    async clickLoginLink(){
        await this.loginLink.click()
        await this.waitForPageLoad()
    }

    async clickLogoutLink(){
        await this.logoutLink.click()
        await this.waitForPageLoad()
    }

    async clickProductLink(){
        await this.productLink.click()
        await this.waitForPageLoad()
    }
}