import { test, expect } from '@playwright/test';


test.describe('User can buy products from the shop', async() => {


test('User can buy a Sauce Labs Backpack', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByTestId('shopping-cart-link')).toBeVisible();

  await page.getByText('Sauce Labs Backpack').click();
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

test('User can buy a Sauce Labs Bike light', async ({ page }) => {

  await page.goto('https://www.saucedemo.com/');

  await page.getByPlaceholder('Username').fill('standard_user');
  await page.getByPlaceholder('Password').fill('secret_sauce');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page.getByTestId('shopping-cart-link')).toBeVisible();

  await page.getByText('Sauce Labs Koffie').click();
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

})
