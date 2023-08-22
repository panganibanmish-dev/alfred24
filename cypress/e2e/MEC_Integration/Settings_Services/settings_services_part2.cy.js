describe('MEC Integration - Settings (Services) - Part 2 Page Test Suite', () => {
    let elements
    elements = {
        input_email_username: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your email or username']"),
        input_password: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your password']"),
        buttonSubmit: () => cy.get('div[class="relative mt-20"] span button[type="submit"]'),
        settings_sidebar: () => cy.get('div[class="flex flex-col mr-8"] div[class="w-124 text-tiny leading-16.8"]'),
        services_card: () => cy.get('div[class="flex flex-col pl-20"] div[class="text-h5 leading-p font-bold text-alfred-lightBlue-100"]'),
        add_btn: () => cy.get('span button[type="button"]'),
        select_service_type_drpdwn: () => cy.get('div[class="relative font-normal"] div svg[data-icon="fasAlfredArrowDown"]'),
        send_from_address: () => cy.get('div[class="w-full flex items-center cursor-pointer break-words undefined"] div[class="flex items-center space-x-8"] div'),
        selected_send_from_address: () => cy.get('div[class="h-full"]'),
        order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
        sub_myOrders: () => cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
        manual_add: () => cy.get('div[class="flex items-center"] div[class="w-max pr-10"]'),
        selfdrop_off_services_card: () => cy.get('div[class="w-full h-full flex items-stretch p-20 rounded-8 listing-drop-shadow cursor-pointer bg-alfred-white-100"]'),
        location_and_logistics: () => cy.get('div[class="w-full overflow-y-scroll flex flex-col items-center no-scrollbar flex flex-col space-y-10"] div[class="pt-10 pl-16 pr-8 pb-14 text-tiny leading-16.8 cursor-pointer text-alfred-black-60 hover:text-alfred-lightBlue2-100"]'),
        location_type: () => cy.get('div[style="width: fit-content; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"] '),
        search_locationType: () => cy.get('input[placeholder="Search..."]'),
        clickSendFromAddress: () => cy.get('div[class="flex items-center space-x-8"] div'),
        setLocationType_sendFromAddress: () => cy.get('div[style="width: fit-content; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"]'),
        details_service_setting: () => cy.get('a div[width: 187px;]'),
        details_location_type: () => cy.get('div[style="width: fit-content; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"]'),
        verify_sendFromAddress: () => cy.get('div[class="flex items-center space-x-8"] div'),
        add_btn_location_type: () => cy.get('div span button[type="button"] div[class="flex justify-center items-center"] div'),
    },
        beforeEach(() => {
            cy.viewport(1800, 1000)
            cy.visit('/login')
            elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
            elements.input_password().should('be.visible').type(Cypress.env('login_password'));
            elements.buttonSubmit().should('be.visible').click();
        });
    // it('*MECIT#05 - should verify that the order form changes when the service chosen is "SEND FROM ADDRESS" as the LOCATION TYPE', () => {
    //     elements.order_sidebar().eq(2).should('be.visible').click();
    //     elements.sub_myOrders().should('contain', 'My orders').click();
    //     cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
    //     elements.manual_add().eq(0).should('contain', 'Manual add').click();
    // });
    it('MECIT#06 - should verify that the "Locations & Logistics"  is present/available at the left-side panel of the service setting when the user has View permission for the Location & Logistics  settings permission', () => {
        elements.settings_sidebar().eq(5).should("contain", "Settings").click();
        elements.services_card().eq(0).should("contain", "Services").click();
        elements.selfdrop_off_services_card().eq(0).should('be.visible').click();
        // elements.location_and_logistics().eq(1).should('contain', 'Locations & logistics');
        cy.contains('Locations & logistics');
    });
    it('MECIT#08 - should verify that the user is directed to the Locations & Logistics page when the user clicks the Locations & Logistics sub-module at the right side panel of the service settings ', () => {
        elements.settings_sidebar().eq(5).should("contain", "Settings").click();
        elements.services_card().eq(0).should("contain", "Services").click();
        elements.selfdrop_off_services_card().eq(0).should('be.visible').click();
        // elements.location_and_logistics().eq(1).should('contain', 'Locations & logistics').click();
        cy.contains('Locations & logistics').click();
    });
    it('MECIT#09 - should verify that the "SEND FROM ADDRESS" new Locations type/New Location is present at the Location type dropdown ', () => {
        elements.settings_sidebar().eq(5).should("contain", "Settings").click();
        elements.services_card().eq(0).should("contain", "Services").click();
        elements.selfdrop_off_services_card().eq(0).should('be.visible').click();
        // elements.location_and_logistics().eq(1).should('contain', 'Locations & logistics').click();
        cy.contains('Locations & logistics').click();
        elements.location_type().eq(0).should('be.visible').click();
        elements.search_locationType().should('be.visible').type('Send from address');
    });
    it('MECIT#10 - should verify that the "SEND FROM ADDRESS" is set at the Location type dropdown field when its selected', () => {
        elements.settings_sidebar().eq(5).should("contain", "Settings").click();
        elements.services_card().eq(0).should("contain", "Services").click();
        elements.selfdrop_off_services_card().eq(0).should('be.visible').click();
        // elements.location_and_logistics().eq(1).should('contain', 'Locations & logistics').click();
        cy.contains('Locations & logistics').click();
        elements.location_type().eq(0).should('be.visible').click();
        elements.search_locationType().should('be.visible').type('Send from address');
        elements.clickSendFromAddress().should('contain', 'Send from address').click();
    });


});