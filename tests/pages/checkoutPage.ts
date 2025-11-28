import { Locator, Page } from "@playwright/test";

export class CheckoutPage {

private readonly page: Page;

    private readonly textfieldFirstName : Locator; 
    private readonly textfieldLastName: Locator;
    private readonly textfieldZipCode: Locator;
    private readonly buttonContinue: Locator;
    private readonly buttonFinish: Locator;


  constructor(page: Page) {
        this.page = page;
        this.textfieldFirstName = this.page.getByPlaceholder('First Name');
        this.textfieldLastName = this.page.getByPlaceholder('Last Name');
        this.textfieldZipCode = this.page.getByPlaceholder('Zip/Postal Code');
        this.buttonContinue = this.page.getByRole('button', { name: 'Continue' });
        this.buttonFinish = this.page.getByTestId('finish');
  }

     async fillDetails(firstname: string, lastname: string, zipcode: string) {
        await this.textfieldFirstName.fill(firstname);
        await this.textfieldLastName.fill(lastname);
        await this.textfieldZipCode.fill(zipcode);
        await this.buttonContinue.click();
        await this.buttonFinish.click();
}

}