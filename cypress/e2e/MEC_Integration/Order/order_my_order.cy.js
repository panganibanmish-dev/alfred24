import OrderMyOrderPage from "../../../pages/MEC Integration/Order/OrderMyOrderPage";
describe("Order - My Order Page Test Suite", () => {
  beforeEach(() => {
    cy.login(Cypress.env("login_username"), Cypress.env("login_password"));
    cy.viewport(1800, 1000);
    cy.visit("/order/listing/");
  });
  it("MECIT#177 to MECIT#181 - should verify that the status filter is clickable, can search and accepts text, numerical & special characters for status", () => {
    OrderMyOrderPage.statusFilter_Orders();
  });
  it("MECIT#182 to MECIT#183 - should verify that the status filter includes the pickup arranged and has it's designated color orange on the list", () => {
    OrderMyOrderPage.statusPickUpArranged();
  });
  it("MECIT#184 to MECIT#185 - should verify that the status filter includes the out for pickup and has it's designated color yellow on the list", () => {
    OrderMyOrderPage.statusOutForPickUp();
  });
  it("MECIT#186 to MECIT#187 - should verify that the status filter includes the pickup from sender and has it's designated color Green on the list", () => {
    OrderMyOrderPage.statusPickupFromSender();
  });
  it("MECIT#188 - should verify that the user can filter orders by pickup arranged status", () => {
    OrderMyOrderPage.selectStatusPickUpArranged();
  });
  it("MECIT#189 - should verify that the user can filter orders by out for pickup status", () => {
    OrderMyOrderPage.selectStatusOutForPickUp();
  });
  it("MECIT#190 - should verify that the user can filter orders by pickup from sender status", () => {
    OrderMyOrderPage.selectStatusPickupFromSender();
  });
});
