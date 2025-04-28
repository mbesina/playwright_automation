import {expect, test} from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { randomName, validUserEmail } from "../const";

test('Signup with existing email address', async({page}) =>{

    const homePage = new HomePage(page)
    const loginPage = new LoginPage(page)

    await homePage.navigateToHomepage()
    expect(await homePage.getTitle()).toEqual('Automation Exercise')

    await homePage.clickLoginLink()
    expect(await loginPage.getTitle()).toEqual('Automation Exercise - Signup / Login')

    await loginPage.signup(randomName, validUserEmail)
    expect(await loginPage.isTextVisible('p', 'Email Address already exist!')).toBeTruthy()
})