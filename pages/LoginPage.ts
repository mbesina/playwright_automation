import { expect, Page, Locator } from '@playwright/test'
import { BasePage } from './basePage'

export class LoginPage extends BasePage{
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly loginLink: Locator

  constructor(page: Page) {
    super(page)
    this.usernameField = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    this.passwordField = this.page.getByRole("textbox", {name: 'Password'})
    this.loginLink = this.page.getByRole('button', { name: 'Login' })

  }

  async login(username: string, password: string) {
    await expect(this.usernameField).toBeVisible()
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginLink.click()
    await this.waitForPageLoad()
  }
}
