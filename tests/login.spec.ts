import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { email, password } from '../const'

  test('Login with valid credentials', async ({ page }) => {
    const homepage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homepage.navigateToHomepage()
    expect(await homepage.getTitle()).toEqual("Automation Exercise")
    expect(await homepage.headingValue()).toBeTruthy()
    
    await homepage.clickLoginButton()
    expect(await loginPage.getTitle()).toEqual("Automation Exercise - Signup / Login")

    await loginPage.login(email, password)
    expect(await homepage.getTitle()).toEqual("Automation Exercise")
    expect(await homepage.headingValue()).toBeTruthy()
    await expect(homepage.logoutLink).toBeVisible()
   
  })
