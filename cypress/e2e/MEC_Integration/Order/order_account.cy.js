import OrderAccountPage from "../../../pages/MEC Integration/Order/OrderAccountPage";
describe("Order - Account Page Test Suite", () => {
  beforeEach(() => {
    cy.login(Cypress.env("login_username"), Cypress.env("login_password"));
    cy.viewport(1800, 1000);
    cy.visit("/order/listing/");
  });
  it("MECIT#143 & #144 - should verify that the Edit permission is enabled by default under Order Operational details", () => {
    OrderAccountPage.verifyOrder_OperationalDetails();
  });
  it("MECIT#145 & #146 - should verify that the user can disable the Edit permission for the Order Operational details of merchant", () => {
    OrderAccountPage.verifyOrder_OperationalDetailsWithDisableEdit();
  });
  it("MECIT#147 & #148 - should verify that the Bulk update button is visible if the user has the edit permission under the Orders Operational details and the Bulk update button is clickable and responsive when clicked", () => {
    OrderAccountPage.verifyBulkUpdate();
  });
});
