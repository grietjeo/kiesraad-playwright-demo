import { Page } from "@playwright/test";

export class ShoppingcartPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async CheckoutProduct() {
        await this.page.getByTestId('checkout').click();
    }
}