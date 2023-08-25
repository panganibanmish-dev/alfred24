import OrderCreationFlowPage from "../../../pages/MEC Integration/Order/OrderCreationFlowPage";

const login_username = Cypress.env("login_username");
const login_password = Cypress.env("login_password");

describe('MECIT - Order Creation Flow Page', () => {
    beforeEach(() => {
        cy.login(login_username, login_password);
        cy.viewport(1800, 1000);
        cy.visit("/order/listing/");
    });
    it('MECIT#337 to MECIT#338 - should verify that the system validates data inputted upon creating an order', () => {
        OrderCreationFlowPage.inputData();
    });
    it('MECIT#339 to MECIT#340 - should verify that the created order has no waybill bill needed', () => {
        OrderCreationFlowPage.noDownloadWaybill();
    });
    it('MECIT#341 to MECIT#343 - should verify that the created order has its own and unique ID number', () => {
        OrderCreationFlowPage.verifyCreatedOrder();
    });
    it('MECIT#344 to MECIT#349 - should verify that the user can track the order using order ID, history, shipping details, billing and webhook', () => {
        OrderCreationFlowPage.trackOrder();
    });
})