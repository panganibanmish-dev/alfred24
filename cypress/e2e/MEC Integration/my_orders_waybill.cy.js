describe('MEC Integration - My Orders Waybill Page Test Suite', () => {
    let elements
    elements = {

    }
    beforeEach(() => {
        cy.viewport(1800, 1000)
        cy.visit('/login')
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.buttonSubmit().should('be.visible').click();
    });
    it('MECIT#26',  () => {

    });
});