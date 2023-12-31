describe('MEC Integration -  MyOrders | Order details > Pickup Notes - Part 2 Page Test Suite', () => {
    let elements
    elements = {
        input_email_username: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your email or username']"),
        input_password: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your password']"),
        buttonSubmit: () => cy.get('div[class="relative mt-20"] span button[type="submit"]'),
        order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
        sub_myOrders: () => cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
        manual_add: () => cy.get('div[class="flex items-center"] div[class="w-max pr-10"]'),
        firstname: () => cy.get('input[placeholder="First name"]'),
        lastname: () => cy.get('input[placeholder="Last name"]'),
        phone: () => cy.get('input[placeholder="0000 0000"]'),
        email: () => cy.get('input[placeholder="name@mail.com"]'),
        location_id: () => cy.get('div div[class="text-p text-alfred-black-50"]'),
        searchLocation: () => cy.get('div input[placeholder="Location name, ID"]'),
        selectLocation: () => cy.get('div[class="px-16 mx-10 py-10 rounded-8 hover:bg-alfred-darkBlue-3"]'),
        btn: () => cy.get('span button[type="button"]'),
        order_number: () => cy.get('input[placeholder="e.g. ABC0123"]'),
        weight: () => cy.get('input[placeholder="0.5"]'),
        p_desc: () => cy.get('input[placeholder="Product description"]'),
        product_type: () => cy.get('div[class="relative font-normal"]'),
        selectProduct_type: () => cy.get('div[class="scrollbar-container ps"] div[style="min-height: 20px;"]'),
        successCreatedOrder: () => cy.get('div[class="ml-8 text-h5 leading-p my-20 text-alfred-black-70 flex items-center space-x-10"] div'),
        checkOrder: () => cy.get('input[id="orderListing"]'),
        verify_text: () => cy.get('div div[class="text-left w-full"]'),
        click_Order: () => cy.get('div[class="break-all"] a[class="pb-6 w-fit-content font-normal text-p leading-20px hover:underline text-alfred-lightBlue-100 text-ellipsis overflow-hidden max-w-full"]'),
        label_shipment_details: () => cy.get('div div[class="px-10 pb-20 font-bold text-h5 leading-p text-alfred-black-70"]'),
        verify_weight_size: () => cy.get('div[class="flex flex-col w-1/2 pb-20"] div[class="font-bold text-pt leading-p pb-8 text-alfred-black-40"]'),
        input_actual_weight_size_size: () => cy.get('div[class="relative flex items-center"] input[type="number"]')
    }
    beforeEach(() => {
        cy.viewport(1800, 1000)
        cy.visit('/login')
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.buttonSubmit().should('be.visible').click();
    });
    it('MECIT#59 - should verify that the actual weight field is Editable at the Order details under the shipment details', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible').type('2');
        // elements.btn().should('be.visible').click();
    });
    it('MECIT#60 - should verify that the actual weight field accepts numerical characters', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        // elements.input_actual_weight_size().should('be.visible').type('kilogram').clear();
        elements.input_actual_weight_size().should('be.visible').type('2');
        // elements.btn().should('be.visible').click();
    });
    it('MECIT#61 - should verify that the actual weight field does not accepts alphabetical characters', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible').type('kilogram');
        // elements.input_actual_weight_size().should('be.visible').type('2');
        // elements.btn().should('be.visible').click();
    });
    it('MECIT#62 - should verify that the actual weight field does not accepts special characters', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible').type('@');
    });
    it('MECIT#63 - should verify that the actual size fields is Editable in the Order details under the shipment details', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible');
    });
    it('MECIT#64 - should verify that the actual sizes field accepts numerical characters', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible').type('2');
        elements.input_actual_weight_size().should('be.visible').type('3');
        elements.input_actual_weight_size().should('be.visible').type('4');
    });
    it('MECIT#65 - should verify that the actual sizes field does not accepts alphabetical characters', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible').type('a');
        elements.input_actual_weight_size().should('be.visible').type('b');
        elements.input_actual_weight_size().should('be.visible').type('c');
    });
    it('MECIT#66 - should verify that the actual sizes field does not accepts special characters', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible').type('@');
        elements.input_actual_weight_size().should('be.visible').type('#');
        elements.input_actual_weight_size().should('be.visible').type('$');
    });
    it('MECIT#67 - should verify if the actual sizes are displayed correctly at the Order success page under the shipment details', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.label_shipment_details().should('contain', 'Shipment details');
        elements.input_actual_weight_size().should('be.visible').type('2');
        elements.input_actual_weight_size().should('be.visible').type('3');
        elements.input_actual_weight_size().should('be.visible').type('4');
        elements.btn().should('be.visible').click();
    });
    it('MECIT#68 - should verify that the records of changes for the actual sizes and actual weights are displayed correctly at the history tab', () => {
        elements.order_sidebar().eq(3).should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        elements.click_Order().should('be.visible').click();

    });
});