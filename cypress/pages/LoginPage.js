class LoginPage {
  elements = {
    label_email_username: () =>
      cy.get(
        "div[class='flex pl-8 pb-8 text-ps leading-15px font-bold text-alfred-black-40']"
      ),
    input_email_username: () =>
      cy.get(
        "div[class='relative flex items-center'] input[placeholder='Your email or username']"
      ),
    label_password: () =>
      cy.get(
        "div[class='flex justify-between items-center'] div[class='flex pl-8 pb-8 text-ps leading-15px font-bold text-alfred-black-40']"
      ),
    input_password: () =>
      cy.get(
        "div[class='relative flex items-center'] input[placeholder='Your password']"
      ),
    label_forgotpass_link: () =>
      cy.get('div[class="flex justify-center items-center"] div'),
    rememberMeCheckbox: () => cy.get("input#rememberMe"),
    label_keepme_login: () =>
      cy.get(
        "div[class='flex flex-shrink-0 justify-start items-center cursor-pointer'] label"
      ),
    buttonSubmit: () =>
      cy.get('div[class="relative mt-20"] span button[type="submit"]'),
    sign_up_link: () =>
      cy.get("div[class='flex justify-center items-center'] div"),

    error_message_email_password: () =>
      cy.get('div[class="text-alfred-red-100 text-pt"]'),
    error_message_email_username: () =>
      cy.get('div[class="text-alfred-red-100 text-p text-center"]'),

    popup_error_message: () =>
      cy.get(
        'div[class="rounded-10 animate-slizeInFromTop p-12 shadow-alfred-general flex items-center"]'
      ),
  };
  loginpage = () => {
    cy.viewport(1800, 1000);
    cy.visit("/login");
  };
  verifyLoginFields = () => {
    this.elements.label_email_username().should("contain", "Email or username");
    this.elements.label_password().should("contain", "Password");
    this.elements
      .label_forgotpass_link()
      .should("contain", "Forgot your password?");
    this.elements.label_keepme_login().should("contain", "Keep me signed in");
    this.elements.buttonSubmit().should("be.visible");
    this.elements.sign_up_link().should("be.visible");
  };
  verifyRequiresUsernamePassword = () => {
    this.elements.input_email_username().should("be.visible");
    this.elements.input_password().should("be.visible");
  };
  empty_email = () => {
    this.elements.input_email_username().should("be.visible").type("1").clear();
    this.elements
      .error_message_email_password()
      .should("contain", "Please enter your email or username");
  };
  valid_username_password = () => {
    this.elements
      .input_email_username()
      .should("be.visible")
      .type(Cypress.env("login_username"));
    this.elements
      .input_password()
      .should("be.visible")
      .type(Cypress.env("login_password"));
    this.elements.buttonSubmit().should("be.visible").click();
    cy.visit("/order/listing/");
  };
  invalid_usernames = () => {
    this.elements.input_email_username().should("be.visible").type("Jet");
    this.elements
      .input_password()
      .should("be.visible")
      .type(Cypress.env("login_password"));
    this.elements.buttonSubmit().should("be.visible").click();
    this.elements
      .error_message_email_username()
      .should("contain", "Invalid email or password.");
  };
  empty_password = () => {
    this.elements
      .input_email_username()
      .should("be.visible")
      .type(Cypress.env("login_username"));
    this.elements.input_password().should("be.visible").type("1").clear();
    this.elements
      .error_message_email_password()
      .should("contain", "Please enter your password");
  };
  invalid_password = () => {
    this.elements
      .input_email_username()
      .should("be.visible")
      .type(Cypress.env("login_username"));
    this.elements.input_password().should("be.visible").type("wrongpassword");
    this.elements.buttonSubmit().should("be.visible").click();
    this.elements
      .error_message_email_username()
      .should("contain", "Invalid email or password.");
  };
  valid_creds_with_remember_login = () => {
    this.elements
      .input_email_username()
      .should("be.visible")
      .type(Cypress.env("login_username"));
    this.elements
      .input_password()
      .should("be.visible")
      .type(Cypress.env("login_password"));
    this.elements.rememberMeCheckbox().check();
    this.elements.buttonSubmit().should("be.visible").click();
    cy.visit("/order/listing/");
  };
  loginButton = () => {
    this.elements.buttonSubmit().should("be.visible");
  };
  disable_login_button = () => {
    this.elements
      .input_email_username()
      .should("be.visible")
      .type(Cypress.env("login_username"));
    this.elements.buttonSubmit().should("be.visible");
  };
}
module.exports = new LoginPage();
