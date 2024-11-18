import { expect, Page, Locator } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly loginLink: Locator

  constructor(page: Page) {
    this.page = page
    this.usernameField = page.locator('#username')
    this.passwordField = page.locator('#password')
    this.loginLink = page.locator('#log-in')
  }

  async navigateTo() {
    await this.page.goto('/')
  }

  async enterUsername(username: string) {
    await expect(this.usernameField).toBeVisible()
    await this.usernameField.fill(username)
  }

  async enterPassword(password: string) {
    await expect(this.passwordField).toBeVisible()
    await this.passwordField.fill(password)
  }

  async clickLogin() {
    await expect(this.loginLink).toBeVisible()
    await this.loginLink.click()
  }
}
