class OrderManualOrderPage {
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
    address: () => cy.get('div[placeholder="Delivery address"]'),
    settings_sidebar: () =>
      cy.get(
        'div[class="flex flex-col mr-8"] div[class="w-124 text-tiny leading-16.8"]'
      ),
    services_card: () =>
      cy.get(
        'div[class="flex flex-col pl-20"] div[class="text-h5 leading-p font-bold text-alfred-lightBlue-100"]'
      ),
    searchService: () =>
      cy.get(
        'div[class="relative flex items-center"] input[placeholder="Service name"]'
      ),
    selectService: () =>
      cy.get(
        'div[class="w-full h-full flex items-stretch p-20 rounded-8 listing-drop-shadow cursor-pointer bg-alfred-white-100"] div[class="flex items-center"] div'
      ),
    labelServiceSettings: () =>
      cy.get(
        'div[class="nav_alfred_sidebar_setting_name__VB7Y7 text-alfred-black-60 font-bold text-p border-b-1 border-alfred-black-20 pb-8 mb-8 ml-26"]'
      ),
    locationAndlogistics: () =>
      cy.get(
        'div a[href="/en/setting/service/locations/?service_id=64c1e5f6827fff80bd14da17"]'
      ),
    addLocationLogistics: () =>
      cy.get(
        'span button[type="button"] div[class="flex justify-center items-center"] div'
      ),
    locationDropdown: () =>
      cy.get('div[class="relative font-normal"] div div[class="w-full"]'),
    scrollLocationLogistics: () => cy.get('div[class="ps__rail-y"] div'),
    searchLocationLogistics: () =>
      cy.get(
        'div[class="relative w-full flex items-center bg-alfred-white-100"] input[placeholder="Search..."]'
      ),
    selectLocationLogistics: () =>
      cy.get(
        'div[class="w-full flex items-center cursor-pointer break-words undefined"] div[class="flex items-center space-x-8"] div'
      ),
    btnSave: () => cy.get('span button[type="button"]'),
  };
  inputTextAndNumericalAddress = () => {
    this.elements.order_sidebar().should("be.visible").click();
    this.elements.sub_myOrders().should("contain", "My orders").click();
    cy.get('div[class="flex justify-center items-center"] div')
      .should("contain", "Add")
      .realHover("mouse");
    this.elements.manual_add().eq(0).should("contain", "Manual add").click();
    this.elements.service().should("contain", "Home delivery 送貨上門").click();
    this.elements.address().should("be.visible").type("hongkong").clear();
    this.elements.address().should("be.visible").type("12345 Hongkong").clear();
  };
  locationType = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    this.elements
      .locationDropdown()
      .should("contain", "Select location type")
      .click();
    this.elements
      .scrollLocationLogistics()
      .scrollIntoView({ duration: 5000 })
      .should("be.visible");
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Point");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Point")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Point 2");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Point 2")
      .click();
    cy.wait("@locationLogistics");
  };
  handoverlogistics = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    this.elements
      .locationDropdown()
      .should("contain", "Select handover logistics")
      .click();
    this.elements
      .scrollLocationLogistics()
      .scrollIntoView({ duration: 5000 })
      .should("be.visible");
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("Test Logistics Company");
    this.elements
      .selectLocationLogistics()
      .should("contain", "Test Logistics Company")
      .click();
    cy.wait("@locationLogistics");
  };
  handovercourier = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    this.elements
      .locationDropdown()
      .should("contain", "Select handover courier")
      .click();
    this.elements
      .scrollLocationLogistics()
      .scrollIntoView({ duration: 5000 })
      .should("be.visible");
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("Test Logistics Company");
    this.elements
      .selectLocationLogistics()
      .should("contain", "Test Logistics Company")
      .click();
    cy.wait("@locationLogistics");
  };
  warehouselogistics = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    this.elements
      .locationDropdown()
      .should("contain", "Select warehouse logistics")
      .click();
    this.elements
      .scrollLocationLogistics()
      .scrollIntoView({ duration: 5000 })
      .should("be.visible");
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("Test Logistics Company");
    this.elements
      .selectLocationLogistics()
      .should("contain", "Test Logistics Company")
      .click();
    cy.wait("@locationLogistics");
  };
  logisticsprovider = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    this.elements
      .locationDropdown()
      .should("contain", "Select logistics provider")
      .click();
    this.elements
      .scrollLocationLogistics()
      .scrollIntoView({ duration: 5000 })
      .should("be.visible");
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("Test Logistics Company");
    this.elements
      .selectLocationLogistics()
      .should("contain", "Test Logistics Company")
      .click();
    cy.wait("@locationLogistics");
  };
  courier = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    this.elements
      .locationDropdown()
      .should("contain", "Select courier")
      .click();
    // this.elements.scrollLocationLogistics().scrollIntoView({duration: 5000}).should('be.visible');
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("Cainiao");
    this.elements
      .selectLocationLogistics()
      .should("contain", "Cainiao")
      .click();
    cy.wait("@locationLogistics");
  };
  serviceflow = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    this.elements
      .locationDropdown()
      .should("contain", "Select service flow")
      .click();
    // this.elements.scrollLocationLogistics().scrollIntoView({duration: 5000}).should('be.visible');
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("LMS general flow");
    this.elements
      .selectLocationLogistics()
      .should("contain", "LMS general flow")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("LMS general flow");
    this.elements
      .selectLocationLogistics()
      .should("contain", "LMS general flow")
      .click();
    cy.wait("@locationLogistics");
  };
  updateManuallyLocationType = () => {
    cy.intercept("https://www.googletagmanager.com/gtm.js*").as(
      "locationLogistics"
    );
    this.elements.settings_sidebar().eq(5).should("be.visible").click();
    this.elements.services_card().eq(0).should("be.visible").click();
    this.elements
      .searchService()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectService()
      .should("contain", "Send from address 上門收寄件")
      .click();
    this.elements.labelServiceSettings().should("contain", "Service setting");
    this.elements.locationAndlogistics().should("be.visible").click();
    this.elements.addLocationLogistics().should("be.visible").click();
    //location type
    this.elements
      .locationDropdown()
      .eq(0)
      .should("contain", "Select location type")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("Send from address");
    this.elements
      .selectLocationLogistics()
      .should("contain", "Send from address")
      .click();
    //handover logistics
    this.elements
      .locationDropdown()
      .should("contain", "Select handover logistics")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    //handover courier
    this.elements
      .locationDropdown()
      .should("contain", "Select handover courier")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    //warehouse logistics
    this.elements
      .locationDropdown()
      .should("contain", "Select warehouse logistics")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    //logistics provider
    this.elements
      .locationDropdown()
      .should("contain", "Select logistics provider")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    //courier
    this.elements
      .locationDropdown()
      .should("contain", "Select courier")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("alfred24 Delivery");
    this.elements
      .selectLocationLogistics()
      .should("contain", "alfred24 Delivery")
      .click();
    //service flow
    this.elements
      .locationDropdown()
      .should("contain", "Select service flow")
      .click();
    this.elements
      .searchLocationLogistics()
      .should("be.visible")
      .type("MEC collects parcels");
    this.elements
      .selectLocationLogistics()
      .should("contain", "MEC collects parcels")
      .click();
    //save location logistics
    this.elements.btnSave().should("be.visible").click();
    cy.wait("@locationLogistics");
  };
};
module.exports = new OrderManualOrderPage();
