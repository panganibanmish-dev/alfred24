describe('Login and Forgot Password Page Test Suite', () => {
    let elements;  
    elements = {
        label_email_username: () => cy.get("div[class='flex pl-8 pb-8 text-ps leading-15px font-bold text-alfred-black-40']"),
        input_email_username: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your email or username']"),
        label_password: () => cy.get("div[class='flex justify-between items-center'] div[class='flex pl-8 pb-8 text-ps leading-15px font-bold text-alfred-black-40']"),
        input_password: () => cy.get("div[class='relative flex items-center'] input[placeholder='Your password']"),
        label_forgotpass_link: () => cy.get('div[class="flex justify-center items-center"] div'),
        rememberMeCheckbox: () => cy.get("input#rememberMe"),
        label_keepme_login: () => cy.get("div[class='flex flex-shrink-0 justify-start items-center cursor-pointer'] label"),
        buttonSubmit: () => cy.get('div[class="relative mt-20"] span button[type="submit"]'),
        sign_up_link: () => cy.get("div[class='flex justify-center items-center'] div"),
        forgot_password_link: () => cy.get("div[class='pb-4'] span button[type='button']"),
        registered_email: () => cy.get('div[class="relative flex items-center"] input[placeholder="Registered email"]'),
        error_message_email_password: () => cy.get('div[class="text-alfred-red-100 text-pt"]'),
        error_message_email_username: () => cy.get('div[class="text-alfred-red-100 text-p text-center"]'),
        error_message_email_forgot_password: () => cy.get('div[class="text-alfred-red-100 text-pt flex"]'),
        button_send_verification_email: () => cy.get('div[class="text-pt text-center mt-60"] span button[type="submit"]'),
        popup_error_message: () => cy.get('div[class="text-14-px leading-20px font-normal transition-all flex flex-col null"]'),
    };
    beforeEach(() => {
        cy.viewport(1800, 1000)
        cy.visit('/login')
    });
    it('SIFP#01 - should be verify that the following fields and buttons are present on the login page.', () => {
        elements.label_email_username().should('contain', 'Email or username');
        elements.label_password().should('contain', 'Password');
        elements.label_forgotpass_link().should('contain', 'Forgot your password?');
        elements.label_keepme_login().should('contain', 'Keep me signed in');
        elements.buttonSubmit().should("be.visible");
        elements.sign_up_link().should("be.visible");
    });
    it('SIFP#02 - should be verify that the login page requires a username and password.', () => {
        elements.input_email_username().should('be.visible');
        elements.input_password().should('be.visible');
    });
    it('SIFP#07 - should be verify that the Email or Username field page prompts the user when the user let the field empty', () => {
        elements.input_email_username().should('be.visible').type('1').clear();
        elements.error_message_email_password().should('contain', 'Please enter your email or username');
    });
    it('SIFP#08 - should be verify that the login page accepts valid usernames.', () => {
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.buttonSubmit().should('be.visible').click();
        cy.visit('/order/listing/');
    });
    it('SIFP#09 - should be verify that the login page rejects invalid usernames.', () => {
        elements.input_email_username().should("be.visible").type('Jet');
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.buttonSubmit().should('be.visible').click();
        elements.error_message_email_username().should('contain', 'Invalid email or password.');
    });
    it('SIFP#12 - should be verify that the password field page prompts the user when the user let the field empty', () => {
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type('1').clear();
        elements.error_message_email_password().should('contain', 'Please enter your password');
    });
    it('SIFP#13 - should be verify that login page accepts valid password.', () => {
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.buttonSubmit().should('be.visible').click();
        cy.visit('/order/listing/');
    });
    it('SIFP#14 - should be verify that the login page rejects invalid password.', () => {
        elements.input_email_username().should("be.visible").type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type('wrongpassword');
        elements.buttonSubmit().should('be.visible').click();
        elements.error_message_email_username().should('contain', 'Invalid email or password.');
    });
    it('SIFP#15 - should be verify that the login page remembers the username or email and password for the next login.', () => {
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.input_password().should('be.visible').type(Cypress.env('login_password'));
        elements.rememberMeCheckbox().check();
        elements.buttonSubmit().should('be.visible').click();
        cy.visit('/order/listing/');
    });
    it('SIFP#17 - should be verify that the Sign in button is disabled when the user has not filled the email and password field yet', () => {
        elements.buttonSubmit().should("be.visible");
    });
    it('SIFP#18 - should be verify that the sign-in button is disabled when 1 field only is fill-out', () => {
        elements.input_email_username().should('be.visible').type(Cypress.env('login_username'));
        elements.buttonSubmit().should("be.visible");
    });
    it('SIFP#19 - should be verify that the forgot password page is accessible.', () => {
        elements.forgot_password_link().should('be.visible').click();
    });
    it('SIFP#23 - should be verify that the prompt message is present under the Registered email field when the user enters an invalid email', () => {
        elements.registered_email().type('testgmail.com');
        elements.error_message_email_forgot_password().should('contain', 'Please enter a valid email address');
    });
    it('SIFP#24 - should be verify that the email field does not accept blank values', () => {
        elements.registered_email().should('be.visible').clear();
        elements.button_send_verification_email().should('be.visible');
    });
    it('SIFP#25 - should be verify that the prompt message is present under the Registered email field when the user enters an blank values', () => {
        elements.registered_email().should('be.visible').clear().type(Cypress.env('login_username'));
        elements.error_message_email_forgot_password().should('contain', 'Please enter a valid email address');
    });
    it('SIFP#26 - should be verify that the prompt message is present under the Registered email field when the user lets the registered email field empty', () => {
        elements.registered_email().should('be.visible').clear();
        elements.error_message_email_forgot_password().should('contain', 'Please enter your registered email is required');
    });
    it('SIFP#27 - should be verify that the forgot password page requires a registered email address.', () => {
        elements.registered_email().should('be.visible').type('testuser@mailinator.com');
        elements.button_send_verification_email().should('be.visible').click();
        elements.popup_error_message().should('contain', "Couldn't' find your account");
    });
    it("SIFP#28 - should be verify that the forgot password page sends a password reset link to the user's email address.", () => {
        elements.registered_email().should('be.visible').type('jett@alfred24.com');
        elements.button_send_verification_email().should('be.visible').click();
    });
    it("SIFP#29 - should be verify that the password reset link works and allows the user to reset their password.", () => {
        
    });
});