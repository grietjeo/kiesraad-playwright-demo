import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';


test.describe('User can buy products from the shop', async() => {

  const articles = [
    { article: 'Sauce Labs Backpack' },
    { article: 'Sauce Labs Bike Light' }
  ]
  for (const { article } of articles) {
    test(`User can buy a ${article}`, async ({ page }) => {

      var loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.loginAs('standard_user', 'secret_sauce');

  await expect(page.getByTestId('shopping-cart-link')).toBeVisible();

  await page.getByText(article).click();
  await expect(page.getByTestId('back-to-products')).toBeVisible();

  await page.getByText('Add to cart').click();
  await page.getByTestId('shopping-cart-link').click();
  await expect(page.getByTestId('checkout')).toBeVisible();

  await page.getByTestId('checkout').click();
  await page.getByPlaceholder('First Name').fill('Grietje');
  await page.getByPlaceholder('Last Name').fill('Ogink');
  await page.getByPlaceholder('Zip/Postal Code').fill('1234');

  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByTestId('finish').click();

  await expect(page.getByText('Thank you for your order!')).toBeVisible();
});
  }

  
});
