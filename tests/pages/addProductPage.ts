import { Page } from "@playwright/test";

export class AddProductPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addProduct(product: string) {
    await this.page.getByText('Add to cart').click();
    await this.page.getByTestId('shopping-cart-link').click();
    }

}