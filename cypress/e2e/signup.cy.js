describe('Sign Up Page Test Suite', () => {
    let elements;  
    elements = {
        sign_up_link: () => cy.get("div[class='flex justify-center items-center'] div"),
        regs_email: () => cy.get("input#contact_email"),
        regs_tel: () => cy.get("input#phone_no"),
        regs_password: () => cy.get("input#contact-password"),
        regs_promocode: () => cy.get("input#promo_code"),
        checkboxAgree: () => cy.get("input#checkbox-2"),
        btnSubmit: () => cy.get("button#final_submit_button"),
        link_terms: () => cy.get("span[style='font-weight: normal;'] a[style='text-decoration: underline; color: #1f8dc5;']"),

        error_msg_email: () => cy.get('label#contact_email-error'),
        error_msg_tel: () => cy.get('label#phone_no-error'),
    };
    beforeEach(() => {
        cy.viewport(1800, 1000)
        cy.on('uncaught:exception', (err, runnable) => {
            // Prevent Cypress from failing the test
            return false;
        });
        cy.request('https://web.staging.alfred24.com.hk/autosignup_flow2/html/autosignup-zh.html?env=staging').then((response) => {
            // Perform assertions or actions on the response
            expect(response.status).to.eq(200);
            cy.visit("https://web.staging.alfred24.com.hk/autosignup_flow2/html/autosignup-zh.html?env=staging");
        });
    });
    it('SU#01 - should be verify that the following fields and buttons are present on the signup page.', () => {
        elements.regs_email().should('be.visible');
        elements.regs_tel().should('be.visible');
        elements.regs_password().should('be.visible');
        elements.regs_promocode().should('be.visible');
        elements.link_terms().should('contain', '服務及使用條款');
        elements.link_terms().should('contain', '服務收費');
        elements.btnSubmit().should('be.visible');
    });
    it('SU#02 - should be verify that the required fields has an indicator(e.g. asterisk)', () => {
        elements.btnSubmit().should('be.visible').click();
        elements.error_msg_email().should('contain', '必填欄');
        elements.error_msg_tel().should('contain', '必填欄');
        //password validator
        cy.get('#password-check-1').should('contain', '必須要有8-20個字元');
        cy.get('#password-check-2').should('contain', '必須要有至少一個大楷');
        cy.get('#password-check-3').should('contain', '必須要有至少一個小楷');
        cy.get('#password-check-4').should('contain', '必須要有至少一個數字');
        //checkbox required
        cy.get('#checkbox_2-error').should('contain', '請同意alfred24的使用條款');
    });
    it('SU#05 - should be verify that the email field accepts valid email addresses', () => {
        elements.regs_email().should('be.visible').type('test_user01@mailinator.com');
    });
    it('SU#07 - should be verify that a prompt is present when an invalid email is entered', () => {
        elements.regs_email().should('be.visible').type('testuser01mailinator.com');
        elements.error_msg_email().should('contain', '請輸入有效的電子郵件地址');
    });
    it('SU#08 - should be verify that the email field does not accept blank values', () => {
        elements.regs_email().should('be.visible');
        elements.error_msg_email().should('contain', '必填欄');
        elements.regs_tel().should('be.visible').type('3333333333333');
        elements.regs_password().should('be.visible').type('Password@12');
        elements.regs_promocode().should('be.visible');
        elements.checkboxAgree().should('be.visible').click();
        elements.link_terms().should('contain', '服務及使用條款');
        elements.link_terms().should('contain', '服務收費');
        elements.btnSubmit().should('be.visible').click();
    });
    it('SU#11 - should be verify that a prompt message appears when the user enters a duplicate email', () => {
        
    });
});