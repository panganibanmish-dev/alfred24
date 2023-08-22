class OrderMyOrderPage {
  elements = {
    order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
    sub_myOrders: () =>
      cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
    recentOrders: () =>
      cy.get(
        'div[class="relative flex-shrink-0 cursor-pointer transition-all mr-40 flex items-center py-14 text-alfred-lightBlue2-100"] span'
      ),
    statusFilter: () => cy.get('div div[class="flex w-full items-center"] div[class="mr-8"]'),
    searchStatus: () => cy.get('div input[placeholder="Search..."]'),
    status_: () => cy.get('div[class="flex items-center space-x-8"] div[class="px-6 py-4 text-ps leading-1 text-center relative pr-8 rounded-4"] span[class]'),
     
  };
  statusFilter_Orders = () => {
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.recentOrders().eq(0).should('be.visible').click();
    this.elements.statusFilter().eq(0).should('be.visible').click();
    this.elements.searchStatus().should('be.visible').type('asdfghjkl');
    this.elements.searchStatus().should('be.visible').clear().type('1436');
    this.elements.searchStatus().should('be.visible').clear().type('@#$%^&');
    this.elements.searchStatus().should('be.visible').clear().type('Pickup arranged');
    cy.wait(3000);
  };
  statusPickUpArranged = () => {
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.recentOrders().eq(0).should('be.visible').click();
    this.elements.statusFilter().eq(0).should('be.visible').click();
    this.elements.searchStatus().should('be.visible').clear().type('Pickup arranged');
    this.elements.status_().should('contain', 'Pickup arranged');
  };
  statusOutForPickUp = () => {
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.recentOrders().eq(0).should('be.visible').click();
    this.elements.statusFilter().eq(0).should('be.visible').click();
    this.elements.searchStatus().should('be.visible').clear().type('Out for pickup');
    this.elements.status_().should('contain', 'Out for pickup');
  };
  statusPickupFromSender = () => {
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.recentOrders().eq(0).should('be.visible').click();
    this.elements.statusFilter().eq(0).should('be.visible').click();
    this.elements.searchStatus().should('be.visible').clear().type('Pickup from sender');
    this.elements.status_().should('contain', 'Pickup from sender');
  };
  selectStatusPickUpArranged = () => {
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.recentOrders().eq(0).should('be.visible').click();
    this.elements.statusFilter().eq(0).should('be.visible').click();
    this.elements.searchStatus().should('be.visible').clear().type('Pickup arranged');
    this.elements.status_().should('contain', 'Pickup arranged').click();
    cy.wait(3000);

  };
  selectStatusOutForPickUp = () => {
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.recentOrders().eq(0).should('be.visible').click();
    this.elements.statusFilter().eq(0).should('be.visible').click();
    this.elements.searchStatus().should('be.visible').clear().type('Out for pickup');
    this.elements.status_().should('contain', 'Out for pickup').click();
    cy.wait(3000);
  };
  selectStatusPickupFromSender = () => {
    this.elements.order_sidebar().eq(2).should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.recentOrders().eq(0).should('be.visible').click();
    this.elements.statusFilter().eq(0).should('be.visible').click();
    this.elements.searchStatus().should('be.visible').clear().type('Pickup from sender');
    this.elements.status_().should('contain', 'Pickup from sender').click();
    cy.wait(3000);
  };
}
module.exports = new OrderMyOrderPage();
