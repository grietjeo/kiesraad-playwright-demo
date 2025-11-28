import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ProductOverviewPage } from './pages/productOverviewPage';
import { AddProductPage } from './pages/addProductPage';
import { ShoppingcartPage } from './pages/shoppingcartPage';
import { CheckoutPage } from './pages/checkoutPage';


test.describe('User can buy products from the shop', async() => {

  const products = [
    { product: 'Sauce Labs Backpack' },
    { product: 'Sauce Labs Bike Light' }
  ]
  for (const { product } of products) {
    test(`User can buy a ${product}`, async ({ page }) => {

      // Login
      var loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.loginAs('standard_user', 'secret_sauce');


      //product overview
      await new ProductOverviewPage(page).selectProduct(product);

      //product detail
      await new AddProductPage(page).addProduct(product);


  //shopping cart

  await new ShoppingcartPage(page).CheckoutProduct();

  //checkout


  await new CheckoutPage(page).fillDetails('Grietje', 'Ogink', '1234');


 

  //confirmation
  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
  }

  
});
