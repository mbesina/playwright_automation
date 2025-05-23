import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/HomePage'
import { LoginPage } from '../pages/LoginPage'
import { validUserEmail, invalidUser, validPassword } from '../const'

  test('Login with valid credentials', async ({ page }) => {
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.navigateToHomepage()
    expect(await homePage.getTitle()).toEqual('Automation Exercise')
    expect(await homePage.headingValue()).toBeTruthy()
    
    await homePage.clickLoginLink()
    expect(await loginPage.getTitle()).toEqual('Automation Exercise - Signup / Login')

    await loginPage.login(validUserEmail, validPassword)
    expect(await homePage.getTitle()).toEqual('Automation Exercise')
    expect(await homePage.headingValue()).toBeTruthy()
    await expect(homePage.logoutLink).toBeVisible()

    await homePage.clickLogoutLink()
    expect(await loginPage.getTitle()).toEqual('Automation Exercise - Signup / Login')
  })

  test('Login with invalid credentials', async ({page}) =>{
    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.navigateToHomepage()
    expect(await homePage.getTitle()).toEqual('Automation Exercise')

    await homePage.clickLoginLink()
    expect(await loginPage.getTitle()).toEqual('Automation Exercise - Signup / Login')

    await loginPage.login(invalidUser.emailAddress, invalidUser.randomPassword)
    expect(await loginPage.getTitle()).toEqual('Automation Exercise - Signup / Login')
    expect(await loginPage.isTextVisible('p', 'Email Address already exist!')).toBeTruthy()
  })


  