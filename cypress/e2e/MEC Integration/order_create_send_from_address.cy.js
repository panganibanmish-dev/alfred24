describe('MEC Integration - ORDER CREATE PAGE (SERVICE TYPE: SEND FROM ADDRESS) Page Test Suite', () => {
    let elements
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
    },
    beforeEach(() => {
        cy.viewport(1800, 1000)
        cy.visit('/login')
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.buttonSubmit().should('be.visible').click();
    });
    it('MECIT#69 - should verify that the Order create page changes when the user has the service type: "send from address"', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Sender');
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="ml-8 text-h5 font-bold leading-p mt-20 mb-0 text-alfred-black-70"]').should('contain', 'Courier');
    });
    it('MECIT#70 - should verify that the following fields are available at the Send Parcel tab: Contact Name field, Phone number field, Pickup address field, Courier pickup notes field, Order reference number field, Number of parcel field, Contenct category dropdown, Weight field, Sizes field, Courier card field, & Add order button', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Sender');
        elements.input().eq(0).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]').should('be.visible').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select district').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]').should('be.visible').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Collection address"]').should('be.visible').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="e.g. ABC0123"]').should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select product type').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible').click();
        cy.get('div[class="ml-8 text-h5 font-bold leading-p mt-20 mb-0 text-alfred-black-70"]').should('contain', 'Courier');
    });
    it('MECIT#71 - should verify that the Number of parcel field accepts numerical characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('2');
    });
    it('MECIT#72 - should verify that the Number of parcel field does not accepts Non-numerical characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('a');
    });
    it('MECIT#73 - should verify that the Number of parcel fields is a required field', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').clear();
    });
    it('MECIT#75 - should verify that the default value at the Number of parcel field is "1"', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible');
    });
    it('MECIT#75(1) - should verify that the maximum number that can be inputted at the "Number of parcel field is "10"', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible');
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type("10");
    });
    it('MECIT#76 - should verify that the Contact name field is pre-filled with Merchants name when creating an order,', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.input().eq(0).should('contain', 'QA Testing Main Merchant');
    });
    it('MECIT#77 - should verify that the Contact name field is required and has asterisk mark', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        // elements.input().eq(0).should('contain', 'QA Testing Main Merchant');
        cy.get('div div[class="text-alfred-red-100"]').should('contain', '*');
    });
    it('MECIT#78 - should verify that a prompt message appears when the Contact Name is left empty', ()  => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.input().eq(0).should('contain', 'QA Testing Main Merchant').clear();
        cy.get('div[class="text-alfred-red-100 text-pt flex"] div').should('contain', 'Required');
    });
    it('MECIT#79 - should verify that the Contact Name field accepts Alphanumerical characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.input().eq(0).should('contain', 'QA Testing Main Merchant').type('Alfred23');
    });
    it('MECIT#80 - should verify that the Contact Name field accepts Special characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.input().eq(0).should('contain', 'QA Testing Main Merchant').type('Alfred23@##');
    });
    it("MECIT#80(1) - should verify that the Contact Name field changes and other pre-fill field changes, once the Merchant is switched to another merchant or account", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('Alfred3');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.input().eq(0).should('contain', 'Alfred3');
    });
    it('MECIT#81 - should verify that the Phone field is pre-filled with Merchants phone number when creating an order', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]').should('be.visible');
    });
    it('MECIT#82 - should verify that the Phone field is required and has asterisk mark', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]').should('be.visible').clear();
        cy.get('div div[class="text-alfred-red-100"]').should('contain', '*');
        cy.get('div[class="text-alfred-red-100 text-pt flex"] div').should('contain', 'Required');
    });
    it('MECIT#84 - should verify that the Phone field only accepts Numeric characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]').should('be.visible').type('0312345678');
    });
    it('MECIT#85 - should verify that the Phone field accepts Alphabetic characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]').should('be.visible').type('contact');
    });
    it('MECIT#86 - should verify that the Phone field accepts Special characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="Sender phone number"]').should('be.visible').type('@#$$%%');
    });
    it('MECIT#87 - should verify that the dropdown button is active and clickable', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select district').click();
    });
    it('MECIT#88 - should verify that the dropdown button shows the list', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select district').click();
        cy.get('div[class="grid grid-cols-4 gap-x-20 gap-y-10 pt-10 overflow-scroll"]').should('be.visible');
    });
    it('MECIT#89 - should verify that the default address is set according to the Company address', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-baseline"] textarea').should('contain', 'Chai wan district 2 zone 3');
    });
    it('MECIT#91 - should verify that the Courier Pick up notes  field accepts  alphanumeric characters in the field', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]').should('be.visible').type('courier notes 123');
    });
    it('MECIT#92 - should verify that the courier pick up notes field accepts special characters in the field', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]').should('be.visible').type('@#$$%%%');
    });
    it('MECIT#93 - should verify that the user can create an order without entering any input at the Courier Pick up notes field', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]').should('be.visible');
    });
    it('MECIT#94 - should verify that the Pick up notes field is empty by default', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]').should('be.visible').clear();
    });
    it('MECIT#95 - should verify that the max characters can be input in the Courier pick up notes field is only up to 255 characters', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        cy.get('div[class="relative flex items-baseline"] textarea[placeholder="Notes for courier when collection"]').should('be.visible').type('A character can be any letter, number, punctuation, special character, or space. Each of these characters takes up one byte of space in a computers memory. Some Unicode characters, like emojis and some letters in non-Latin alphabets, take up two bytes of space and therefore count as two characters. Use our character counter tool below for an accurate count of your characters.');
    });
    it('MECIT#97 - should verify that the order reference number field is a require field and has an asterisk mark on it', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="e.g. ABC0123"]').should('be.visible');
        cy.get('div div[class="text-alfred-red-100"]').should('contain', '*');
        elements.label().should('contain', 'Shipment details').click();
        cy.get('div[class="text-alfred-red-100 text-pt flex"] div').should('contain', 'Required');
    });
    it('MECIT#98 - should verify that the Order reference number field  is enabled ', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="e.g. ABC0123"]').should('be.visible').click();
    });
    it('MECIT#99 - should verify that the Order reference number field accepts only Uppercase alphanumeric characters in the field ', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="e.g. ABC0123"]').should('be.visible').type('ADVB1234');
    });
    it('MECIT#100 - should verify that the Order reference number field ONLY accepts Special characters "# " & " - " in the field ', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="e.g. ABC0123"]').should('be.visible').type('AD#VB1-234');
    });
    it('MECIT#102 - should verify that the default number input for the No. of parcel field is "1"', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible');
    });
    it("MECIT#103 - should verify that the No. of Parcel's field is enabled", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').click();
    });
    it("MECIT#104 - should verify that the No. of parcel's field accepts numerical characters only", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('10');
    });
    it("MECIT#105 - should verify that the No. of Parcel's field doesn't accept alphabetical characters in the field", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('as');
    });
    it("MECIT#106 - should verify that the No. of Parcel's field doesn't accept Special characters in the field", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="1"]').should('be.visible').type('#$$$');
    });
    it("MECIT#107 - should verify that the Content category dropdown field is active and clickable", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select product type').click();
    });
    it("MECIT#108 - should verify that the Content Category dropdown field shows the dropdown list when its clicked", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('contain', 'Select product type').click();
        cy.get('div[class="boxOuterClass absolute z-50"]').should('be.visible');
    });
    it("MECIT#109 - should verify that the Weight No. field is active and clickable", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible').click();
    });
    it('MECIT#110 - should verify that the Weight No. field default weight is "0.5 kg" ', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible');
    });
    it('MECIT#111 - should verify that the Weight No. field accepts integers /whole numbers', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible').type('12');
    });
    it('MECIT#112 - should verify that the Weight No. field accepts decanary/decimal numbers', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible').type('1.2');
    });
    it("MECIT#113 - should verify that the Weight No. field doesn't accept  alphabetical characters", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible').type('as');
    });
    it("MECIT#114 - should verify that the Weight No. field doesn't accept  Special characters ", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="0.5"]').should('be.visible').type('#$$');
    });
    it("MECIT#115 - should verify that the Size No. fields  is active and clickable ", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible').click();
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible').click();
    });
    it('MECIT#116 - should verify that the Size No. fields (Length, width, & height) default weight is "10 kg" . ', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible');
    });
    it('MECIT#117 - should verify that the Size No. fields accepts integers /whole numbers', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible').type("10");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible').type("9");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible').type("8");
    });
    it('MECIT#118 - should verify that the Size No. fields accepts decanary/decimal numbers ', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible').type("1.2");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible').type("9.2");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible').type("8.4");
    });
    it("MECIT#119 - should verify that the Size No. fields doesn't accept  alphabetical characters", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible').type("abc");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible').type("aBc");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible').type("asd");
    });
    it("MECIT#120 - should verify that the Size No. fields doesn't accept  Special characters", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(0).should('contain', 'Manual add').click();
        cy.get('div[class="py-2 inline-block text-p leading-1 mr-32"]').should('be.visible').click();
        cy.get('input[placeholder]').should('be.visible').type('QA Testing Main Merchant');
        elements.selectService().should('contain', 'Send from address 上門收寄件').click();
        elements.label().should('contain', 'Shipment details');
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(0).should('be.visible').type("@@");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(1).should('be.visible').type("##");
        cy.get('div[class="relative flex items-center"] input[placeholder="10"]').eq(2).should('be.visible').type("$$");
    });
    it("MECIT#127 - should verify that the template text button is clickable ", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        elements.manual_add().eq(1).should('contain', 'Bulk import').click();
        cy.get('a[class="text-alfred-lightBlue2-100 hover:underline" download]').should('be.visible').click();
        cy.wait('3000');
    });
    it("MECIT#130 - should verify that the Recreate button is clickable and responsive when clicked", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
    });
    it("MECIT#131 - should verify that the user is able to recreate orders", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
        cy.get('span button[type="button"] div[class="flex justify-center items-center"] div').should('contain', 'Recreate 1 orders');
    });
    it("MECIT#133 - should verify that the user can cancel recreating orders", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
        cy.get('span button[type="button"] div[class="flex justify-center items-center"] div').should('contain', 'Cancel').click();
    });
    it("MECIT#134 - should verify that the user can cancel recreating orders", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
        cy.get('span button[type="button"] div[class="flex justify-center items-center"] div').should('contain', 'Cancel').click();
    });
    it("MECIT#135 - should verify that the recreated order flags will be labeled accordingly", () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
        cy.get('span button[type="button"] div[class="flex justify-center items-center"] div').should('contain', 'Recreate 1 orders').click();
    });
    it('MECIT#136 - should verify if the Recreated Order has an "R" indicator at its Order number to indicate that its a recreated order ', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
        cy.get('div[class="relative flex items-center"] input').eq(0).should('be.visible');
    });
    it('MECIT#137 - should verify that the Extra Handling fee field is available for Operators account only', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
        cy.get('div[class="flex flex-col flex-grow-0 w-1/2"] div[class="font-bold text-alfred-black-50 text-pt pb-5"]').should('contain', 'Extra handling fee');
    });
    // it('MECIT#138 - should verify that the Download waybill is clickable and responsive when clicked', () => {
    //     elements.order_sidebar().should('be.visible').click();
    //     elements.sub_myOrders().should('contain', 'My orders').click();
    //     cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
    //     cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
    //     cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
    //     cy.get('div[class="flex flex-col flex-grow-0 w-1/2"] div[class="font-bold text-alfred-black-50 text-pt pb-5"]').should('contain', 'Extra handling fee');
    // });
    it('MECIT#142 - should verify that the user can view the Orders permission for merchant', () => {
        elements.order_sidebar().should('be.visible').click();
        elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').realHover('mouse');
        cy.get('div[class="w-38 h-38 flex items-center justify-center text-alfred-black-50 hover:text-alfred-black-70"]').eq(0).should('be.visible').click();
        cy.get('div div[class="flex items-center pr-9 text-p h-32 text-alfred-black-70 undefined"] div[class="w-max pl-5 pr-8"]').should('contain', 'Recreate').click();
        cy.get('div[class="flex flex-col flex-grow-0 w-1/2"] div[class="font-bold text-alfred-black-50 text-pt pb-5"]').should('contain', 'Extra handling fee');
    });
});