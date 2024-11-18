import { test, expect } from '@playwright/test'
import { LoginSteps } from '../steps/LoginSteps'
import { loginData } from '../const/loginData.const'

// test without POM structure
test('First test', async ({ page }) => {
  await page.goto('/')
  const formTitle = await page.locator('h4')
  await expect(formTitle).toContainText('Login Form')
})

//  Test with POM structure
// any password can be used for valid login on the test website, hence, Chance libray
// is used to incorporate random string generation
test.describe('Login', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginSteps = new LoginSteps(page)
    await loginSteps.login(
      loginData.validUser.username,
      loginData.validUser.randomPassword,
    )
  })
})
