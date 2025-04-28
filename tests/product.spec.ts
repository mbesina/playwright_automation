import test, { expect } from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { ProductPage } from "../pages/ProductPage"

test('Search for tshirt', async({page}) =>{
    const homePage = new HomePage(page)
    const productPage = new ProductPage(page)

    await homePage.navigateToHomepage()
    expect(await homePage.getTitle()).toEqual('Automation Exercise')

    await homePage.clickProductLink()
    expect(await productPage.getTitle()).toEqual('Automation Exercise - All Products')

    await productPage.searchProduct('tshirt')
    expect(await productPage.isTextVisible('p','Green Side Placket Detail T-Shirt')).toBeTruthy()
})