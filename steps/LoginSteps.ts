import { Page } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

export class LoginSteps {
  private page: Page
  private loginPage: LoginPage

  constructor(page: Page) {
    this.page = page
    this.loginPage = new LoginPage(page)
  }

  async login(username: string, password: string) {
    await this.loginPage.navigateTo()
    await this.loginPage.enterUsername(username)
    await this.loginPage.enterPassword(password)
    await this.loginPage.clickLogin()
  }
}
