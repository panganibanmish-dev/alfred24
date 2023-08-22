class ForgotPasswordPage {
  elements = {
    forgot_password_link: () =>
      cy.get("div[class='pb-4'] span button[type='button']"),
    registered_email: () =>
      cy.get(
        'div[class="relative flex items-center"] input[placeholder="Registered email"]'
      ),
    button_send_verification_email: () =>
      cy.get(
        'div[class="text-pt text-center mt-60"] span button[type="submit"]'
      ),
    error_message_email_forgot_password: () =>
      cy.get('div[class="text-alfred-red-100 text-pt flex"]'),
  };
  forgot_password_page = () => {
    this.elements.forgot_password_link().should("be.visible").click();
  };
  invalid_email_input = () => {
    this.elements.forgot_password_link().should("be.visible").click();
    this.elements.registered_email().type("testgmail.com");
    this.elements
      .error_message_email_forgot_password()
      .should("contain", "Please enter a valid email address");
  };
  blank_input_email = () => {
    this.elements.forgot_password_link().should("be.visible").click();
    this.elements
      .registered_email()
      .should("be.visible")
      .type("Jett@mailinator.com")
      .clear();
    this.elements
      .error_message_email_forgot_password()
      .should("contain", "Please enter your registered email is required");
  };
}
module.exports = new ForgotPasswordPage();
