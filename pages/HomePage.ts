import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";

export class HomePage extends BasePage{
    readonly homepageHeading: Locator
    readonly loginButton: Locator
    readonly logoutLink: Locator

    constructor(page:Page){
        super(page)
        this.homepageHeading = this.page.getByRole("heading", {name:"AutomationExercise"})
        this.loginButton = this.page.getByRole('link', {name: " Signup / Login"})
        this.logoutLink = this.page.getByRole('link').filter({ hasText: 'Logout' })
    }

    async navigateToHomepage(){
        await this.navigate()
        await this.waitForPageLoad()
    }
    async headingValue(): Promise<boolean>{
        return await this.homepageHeading.isVisible()
    }

    async clickLoginButton(){
        await this.loginButton.click()
        await this.waitForPageLoad()
    }
}