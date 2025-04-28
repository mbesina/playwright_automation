import { expect, Page, Locator } from '@playwright/test'
import { BasePage } from './BasePage'

export class LoginPage extends BasePage{
  readonly usernameField: Locator
  readonly passwordField: Locator
  readonly loginLink: Locator
  readonly signupNameField: Locator
  readonly signupEmailField: Locator

  constructor(page: Page) {
    super(page)
    this.usernameField = this.page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    this.passwordField = this.page.getByRole('textbox', {name: 'Password'})
    this.loginLink = this.page.getByRole('button', { name: 'Login' })
    this.signupNameField = this.page.getByRole('textbox', {name: 'Name'})
    this.signupEmailField = this.page.locator('form').filter({ hasText: 'Signup' }).getByRole('textbox', {name: 'Email Address'})


  }

  async login(username: string, password: string) {
    await expect(this.usernameField).toBeVisible()
    await this.usernameField.fill(username)
    await this.passwordField.fill(password)
    await this.loginLink.click()
    await this.waitForPageLoad()
  }

  async signup(name: string, email: string){
    await this.signupEmailField.fill(name)
    await this.signupEmailField.fill(email)
  }
}
