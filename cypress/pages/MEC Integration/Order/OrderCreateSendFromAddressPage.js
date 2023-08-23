class OrderCreateSendFromAddressPage {
    elements = {
        input_email_username: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your email or username']"),
        input_password: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your password']"),
        buttonSubmit: () => cy.get('div[class="relative mt-20"] span button[type="submit"]'),
        order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
        sub_myOrders: () => cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
        manual_add: () => cy.get('div[class="flex items-center"] div[class="w-max pr-10"]'),
        selectService: () => cy.get('div[class="relative flex-shrink-0 cursor-pointer transition-all mr-20 flex items-center py-14 text-alfred-lightBlue2-100"]'),
        label: () => cy.get('div[class="text-h5 font-bold leading-p text-alfred-black-70 flex items-center space-x-8"] span'),
        input: () => cy.get('div[class="relative flex items-center"] input'),
    };
    sendfromaddress = () => {
        this.elements.order_sidebar().should('be.visible').click();
        this.elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        this.elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        this.elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        this.elements.label().should('contain', 'Sender');
        this.elements.input().eq(0).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]').should('be.visible').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select district').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]').should('be.visible').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Collection address"]').should('be.visible').click();
        this.elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="e.g. ABC0123"]').should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select product type').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible').click();
        cy.get('div[class="ml-8 text-h5 font-bold leading-p mt-20 mb-0 text-alfred-black-70"]').should('contain', 'Courier');
    };
    numberofParcel = () => {
        this.elements.order_sidebar().should('be.visible').click();
        this.elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        this.elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        this.elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').clear();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('2').clear();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('a').clear();
    };
    defaultAndmaxInputNumber = () => {
        this.elements.order_sidebar().should('be.visible').click();
        this.elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        this.elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        this.elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('1').clear();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type("10");
    };

}
module.exports = new OrderCreateSendFromAddressPage();