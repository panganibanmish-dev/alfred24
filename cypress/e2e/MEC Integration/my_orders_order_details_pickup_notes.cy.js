describe('MEC Integration -  MyOrders | Order details > Pickup Notes Page Test Suite', () => {
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
    }
    beforeEach(() => {
        cy.viewport(1800, 1000)
        cy.visit('/login')
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.buttonSubmit().should('be.visible').click();
    });
    it('MECIT#51 - should verify if the Pickup notes are displayed correctly at the Order Creation success page under the Shipping method section  ',  () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        elements.firstname().should('be.visible').type('Jett');
        elements.lastname().should('be.visible').type('Test');
        elements.phone().should('be.visible').type('12345678');
        elements.email().should('be.visible').type('jetttest@mailinator.com');
        elements.location_id().should('be.visible').click();
        elements.searchLocation().should('be.visible').type('Shek Wu Tong');
        elements.selectLocation().should('be.visible').click();
        elements.btn().should('be.visible').click();
        elements.order_number().should('be.visible').type('testABC12');
        elements.product_type().should('be.visible').click();
        elements.selectProduct_type().should('contain', 'Documents').click();
        elements.weight().should('be.visible').type('1');
        elements.p_desc().should('be.visible').type('test product');
        elements.btn().should('be.visible').click();
        elements.successCreatedOrder().should('contain', 'Order created');
    });
});