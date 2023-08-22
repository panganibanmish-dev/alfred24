class OrderAccountPage {
  elements = {
    account_sidebar: () => cy.get('a[href="/en/account/company/listing/"]'),
    role_account: () => cy.get('a[href="/en/account/role/listing/"]'),
    role_operator: () =>
      cy.get(
        'a[href="/en/account/role/edit/?role_id=64a5155584b77d6a052df4b9"]'
      ),
    labelPermission: () =>
      cy.get(
        'div[class="w-full text-h5 leading-p my-10 text-alfred-black-70 flex h-26"]'
      ),
    checkEdit: () => cy.get('td div[style="width: 80px; height: 34px;"]'),
    orderPermission: () => cy.get('div[class="relative my-4.5 w-100"] div'),
    btnEdit: () => cy.get('div[class="ml-8"] span button[type="button"]'),
    btnsave: () => cy.get('div[class="ml-10"] span button[type="button"]'),
    tableOperationalDetails: () =>
      cy.get(
        'tr td[style="min-width: 150px; max-width: 320px;"] div[class="text-p leading-p text-right text-alfred-black-70 mr-20"]'
      ),
    order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
    sub_myOrders: () =>
      cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
    btn_bulkUpdate: () =>
      cy.get('div[class="ml-4"] span button[type="button"]'),
  };
  verifyOrder_OperationalDetails = () => {
    this.elements.account_sidebar().eq(0).should("be.visible").click();
    this.elements.role_account().should("be.visible").click();
    this.elements.role_operator().should("be.visible").click();
    this.elements.labelPermission().should("be.visible");
    this.elements.orderPermission().eq(3).should("be.visible").click();
    this.elements.btnEdit().should("be.visible").click();
    this.elements
      .tableOperationalDetails()
      .eq(2)
      .should("contain", "Operational details");
    cy.wait(3000);
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.btn_bulkUpdate().should("be.visible");
  };
  verifyOrder_OperationalDetailsWithDisableEdit = () => {
    this.elements.account_sidebar().eq(0).should("be.visible").click();
    this.elements.role_account().should("be.visible").click();
    this.elements.role_operator().should("be.visible").click();
    this.elements.labelPermission().should("be.visible");
    this.elements.orderPermission().eq(3).should("be.visible").click();
    this.elements.btnEdit().should("be.visible").click();
    this.elements
      .tableOperationalDetails()
      .eq(2)
      .should("contain", "Operational details");
    this.elements.checkEdit().eq(9).should("be.visible").click();
    cy.wait(3000);
    this.elements.btnsave().should("be.visible").click();
    cy.wait(3000);
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
  };
  verifyBulkUpdate = () => {
    this.elements.account_sidebar().eq(0).should("be.visible").click();
    this.elements.role_account().should("be.visible").click();
    this.elements.role_operator().should("be.visible").click();
    this.elements.labelPermission().should("be.visible");
    this.elements.orderPermission().eq(3).should("be.visible").click();
    this.elements.btnEdit().should("be.visible").click();
    this.elements
      .tableOperationalDetails()
      .eq(2)
      .should("contain", "Operational details");
    cy.wait(3000);
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.btn_bulkUpdate().should("be.visible").click();
    cy.contains('Bulk update order').should('be.visible');
  };
}
module.exports = new OrderAccountPage();
