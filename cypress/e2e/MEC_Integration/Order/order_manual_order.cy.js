import OrderManualOrderPage from "../../../pages/MEC Integration/Order/OrderManualOrderPage";

const login_username = Cypress.env("login_username");
const login_password = Cypress.env("login_password");

describe("MECIT My Order Manual Add Order Page Test Suite", () => {
  beforeEach(() => {
    cy.login(login_username, login_password);
    cy.viewport(1800, 1000);
    cy.visit("/order/listing/");
  });
  it("MECIT#296 to MECIT#297 - should verify that the Address field accepts text and numerical characters", () => {
    OrderManualOrderPage.inputTextAndNumericalAddress();
  });
  it("MECIT#299 to MECIT#304 - should verify that the add location type is clickable and responsive when clicked and the Select Location Type dropdown is clickable, scrollable, search, select and unable to select multiple location type ", () => {
    OrderManualOrderPage.locationType();
  });
  it("MECIT#305 to MECIT#309 - should verify that the add Handover Logistics dropdown is clickable, scrollable, search, select and unable to select multiple Handover Logistics", () => {
    OrderManualOrderPage.handoverlogistics();
  });
  it("MECIT#310 to MECIT#314 - should verify that the add handover courier dropdown is clickable, scrollable, search, select and unable to select multiple handover courier", () => {
    OrderManualOrderPage.handovercourier();
  });
  it("MECIT#315 to MECIT#319 - should verify that the add warehouse logistics dropdown is clickable, scrollable, search, select and unable to select multiple warehouse logistics", () => {
    OrderManualOrderPage.warehouselogistics();
  });
  it("MECIT#320 to MECIT#324 - should verify that the add logistics provider dropdown is clickable, scrollable, search, select and unable to select multiple logistics provider", () => {
    OrderManualOrderPage.logisticsprovider();
  });
  it("MECIT#325 to MECIT#329 - should verify that the add courier dropdown is clickable, scrollable, search, select and unable to select multiple courier ", () => {
    OrderManualOrderPage.courier();
  });
  it("MECIT#330 to MECIT#334 - should verify that the add service flow dropdown is clickable, scrollable, search, select and unable to select multiple service flow", () => {
    OrderManualOrderPage.serviceflow();
  });
  it("MECIT#335 to MECIT#336 - should verify that the user can update manually the location type", () => {
    OrderManualOrderPage.updateManuallyLocationType(); 
  });
});
