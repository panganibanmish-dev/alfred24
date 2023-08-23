import OrderManualOrderPage from "../../../pages/MEC Integration/Order/OrderManualOrderPage";
describe('MECIT My Order Manual Add Order Page Test Suite' , () => {
    beforeEach(() => {
        cy.login(Cypress.env("login_username"), Cypress.env("login_password"));
        cy.viewport(1800, 1000);
        cy.visit("/order/listing/");
    });
    it('MECIT#296 to MECIT#297 - should verify that the Address field accepts text and numerical characters', () => {
        OrderManualOrderPage.inputTextAndNumericalAddress();
    });
});