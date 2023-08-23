class OrderManualOrderPage {
    elements = {
        order_sidebar: () => cy.get('a[href="/en/order/listing/"]'),
        sub_myOrders: () => cy.get('a[href="/en/order/listing/"] div[class="w-full inline-block"]'),
        manual_add: () => cy.get('div[class="flex items-center"] div[class="w-max pr-10"]'),
        service: () => cy.get('div[class="alfred24-tab overflow-x-hidden flex overflow-x-auto border-b-1"] div[class="relative flex-shrink-0 cursor-pointer transition-all mr-20 flex items-center py-14 "]'),
        address: () => cy.get('div[placeholder="Delivery address"]'),
    }
    inputTextAndNumericalAddress = () => {
        this.elements.order_sidebar().should('be.visible').click();
        this.elements.sub_myOrders().should('contain', 'My orders').click();
        cy.get('div[class="flex justify-center items-center"] div').should('contain', 'Add').realHover('mouse');
        this.elements.manual_add().eq(0).should('contain', 'Manual add').click();
        this.elements.service().should('contain', 'Home delivery 送貨上門').click();
        this.elements.address().should('be.visible').type('hongkong').clear();
        this.elements.address().should('be.visible').type('12345 Hongkong').clear();
    }
}   
module.exports = new OrderManualOrderPage();