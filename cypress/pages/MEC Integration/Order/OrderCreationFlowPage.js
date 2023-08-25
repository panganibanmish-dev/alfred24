class OrderCreationFlowPage {
  elements = {
    order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
    sub_myOrders: () =>
      cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
    manual_add: () =>
      cy.get('div[class="flex items-center"] div[class="w-max pr-10"]'),
    service: () =>
      cy.get(
        'div[class="alfred24-tab overflow-x-hidden flex overflow-x-auto border-b-1"] div[class="relative flex-shrink-0 cursor-pointer transition-all mr-20 flex items-center py-14 "]'
      ),
    contactName: () => cy.get('div[class="relative flex items-center"] input[placeholder="Sender company name"]'),
    address: () => cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Collection address"]'),
    phone: () => cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]'),
    pickupNotes: () => cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]'),
    label: () => cy.get('div[class="text-h5 font-bold leading-p text-alfred-black-70 flex items-center space-x-8"] img span'),
    orderNumber: () => cy.get('div[class="relative flex items-center"] input[placeholder="e.g. ABC0123"]'),
    parcelsNumber: () => cy.get('div[class="relative flex items-center"] input[placeholder="1"]'),
    // clickDistrict: () => cy.get('div div[class="text-24-px absolute absolute top-1/2 transform -translate-y-1/2 right-0"] '),
    clickSelect: () => cy.get('div div[class="text-24-px absolute absolute top-1/2 transform -translate-y-1/2 right-0"] div svg'),
    selectDistrict: () => cy.get('div[class="cursor-pointer hover:text-alfred-lightBlue-100 text-ps text-alfred-black-70"]'),
    selectSubDistrict: () => cy.get('div[class="cursor-pointer hover:text-alfred-lightBlue-100 text-ps text-alfred-black-70"]'),
    weight: () => cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]'),
    size: () => cy.get('div[class="relative flex items-center"] input[placeholder="10"]'),
    selectProductType: () => cy.get('div[class="scrollbar-container ps"] div'),
    requiredMsg: () => cy.get('div[class="text-alfred-red-100 text-pt flex"] div'),
    orderDetailsLabel: () => cy.get('div[class="flex items-center w-full pt-20 sticky top-0 z-20 bg-alfred-white-100"] h4'),
    searchOrder: () => cy.get('div[class="relative flex items-center"] input[placeholder="Tracking, order number, phone"]'),
    clickOrderID: () => cy.get('div a[class="pb-6 w-fit-content font-normal text-p leading-20px hover:underline text-alfred-lightBlue-100 text-ellipsis overflow-hidden max-w-full" href]'),
    verifyOrderID: () => cy.get('div div div[class="flex items-center font-normal text-h4 leading-h cursor-pointer break-words text-alfred-black-70"]'),
    verifyHistory: () => cy.get('div[class="flex flex-col-reverse"] div[class="w-full"] div[class="px-10 pb-20 font-bold text-h5 leading-p text-alfred-black-70 pt-20"]'),
    clickTab: () => cy.get('div[class="alfred24-tab overflow-x-hidden flex pt-10 overflow-x-auto "] div[class="relative flex-shrink-0 cursor-pointer transition-all mr-40 flex items-center py-14 "]'),
    labeldiv: () => cy.get('div[class="relative flex-shrink-0 cursor-pointer transition-all mr-40 flex items-center py-14 "] div[class="px-10 pb-20 font-bold text-h5 leading-p text-alfred-black-70"]'),
    statusWebhook: () => cy.get('div[class="w-5/6"] div[class="px-10 flex flex-col space-y-10 w-full text-alfred-black-70 text-ps bg-alfred-grey-5 rounded-10 py-6"]'),
  };
  inputData = () => {
    this.elements.order_sidebar().should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    cy.get('div[class="flex justify-center items-center"] div')
      .should("contain", "Add")
      .realHover("mouse");
    this.elements.manual_add().eq(0).should("contain", "Manual add").click();
    this.elements.service().should("contain", "Send from address 上門收寄件").click();
    this.elements.label().eq(0).should('be.visible');
    this.elements.contactName().should("be.visible").click();
    this.elements.clickSelect().eq(0).should('be.visible').click();
    this.elements.phone().should('be.visible').click();
    this.elements.address().should('be.visible').click();
    this.elements.pickupNotes().should('be.visible').click();
    // this.elements.requiredMsg().eq(0).should('be.visible');
    this.elements.label().eq(1).should('be.visible');
    this.elements.orderNumber().should('be.visible').click();
    this.elements.parcelsNumber().click();

    this.elements.clickSelect().eq(1).click();
    this.elements.weight().click();
    this.elements.size().eq(0).click();
    this.elements.size().eq(1).click();
    this.elements.size().eq(2).click();

    this.elements.requiredMsg().eq(0).should('be.visible');
    this.elements.requiredMsg().eq(1).should('be.visible');
    this.elements.requiredMsg().eq(2).should('be.visible');

    this.elements.label().eq(0).should('be.visible');
    this.elements.contactName().should("be.visible");
    this.elements.clickSelect().eq(0).should('be.visible').click();
    this.elements.selectDistrict().eq(0).should('contain', 'Central and Western').click();
    this.elements.selectSubDistrict().eq(0).should('contain', 'Admiralty').click();

    this.elements.phone().should('be.visible').type('12345678');
    this.elements.phone().should('be.visible').clear().type('asdfghjkl');
    this.elements.address().should('be.visible').type('Pacific Place, 88, Queensway, Tamar');
    this.elements.pickupNotes().should('be.visible').type('test notes');
    // this.elements.requiredMsg().eq(0).should('be.visible');
    this.elements.label().eq(1).should('be.visible');
    this.elements.orderNumber().should('be.visible').type('RNE#10');
    this.elements.parcelsNumber().type('5');

    this.elements.clickSelect().eq(1).click();
    this.elements.selectProductType().eq(0).click();
    this.elements.weight().clear().type("2");
    this.elements.size().eq(0).clear().type('12');
    this.elements.size().eq(1).clear().type('12');
    this.elements.size().eq(2).clear().type('12');
  };
  noDownloadWaybill = () => {
    this.elements.order_sidebar().should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    cy.get('div[style="position: absolute; top: 0px; left: 0px; width: 100%; transform: translateY(45px);"] div').eq(0).realHover('mouse');
  };
  verifyCreatedOrder = () => {
    this.elements.order_sidebar().click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    cy.get('div[style="position: absolute; top: 0px; left: 0px; width: 100%; transform: translateY(45px);"] div').eq(0).should('be.visible');
    cy.get('div a[class="pb-6 w-fit-content font-normal text-p leading-20px hover:underline text-alfred-lightBlue-100 text-ellipsis overflow-hidden max-w-full" href]').eq(0).click();
    this.elements.orderDetailsLabel().should('contain', 'Order details');
  };
  trackOrder = () => {
    this.elements.order_sidebar().click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    this.elements.searchOrder().should('be.visible').type('81700502315207896859861');
    this.elements.clickOrderID().click();
    this.elements.orderDetailsLabel().should('contain', 'Order details');
    this.elements.verifyOrderID().should('be.visible');
    this.elements.verifyHistory().should("contain", 'History').scrollIntoView();
    this.elements.clickTab().eq(1).click();
    this.elements.labeldiv().should('contain', 'Shipping');
    this.elements.clickTab().eq(2).click();
    this.elements.labeldiv().should('contain', 'Billing');
    this.elements.clickTab().eq(3).click();
    this.elements.labeldiv().should('contain', 'Webhook history');
    this.elements.statusWebhook().eq(0).should('be.visible');
  };
};
module.exports = new OrderCreationFlowPage();
