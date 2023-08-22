import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
describe("Login and Forgot Password Page Test Suite", () => {
  beforeEach(() => {
    LoginPage.loginpage();
  });
  it("SIFP#01 - should be verify that the following fields and buttons are present on the login page.", () => {
    LoginPage.verifyLoginFields();
  });
  it("SIFP#02 - should be verify that the login page requires a username and password.", () => {
    LoginPage.verifyRequiresUsernamePassword();
  });
  it("SIFP#07 - should be verify that the Email or Username field page prompts the user when the user let the field empty", () => {
    LoginPage.empty_email();
  });
  //combination with #13
  it("SIFP#08 - should be verify that the login page accepts valid usernames and password.", () => {
    LoginPage.valid_username_password();
  });
  it("SIFP#09 - should be verify that the login page rejects invalid usernames.", () => {
    LoginPage.invalid_usernames();
  });
  it("SIFP#12 - should be verify that the password field page prompts the user when the user let the field empty", () => {
    LoginPage.empty_password();
  });
  it("SIFP#14 - should be verify that the login page rejects invalid password.", () => {
    LoginPage.invalid_password();
  });
  it("SIFP#15 - should be verify that the login page remembers the username or email and password for the next login.", () => {
    LoginPage.valid_creds_with_remember_login();
  });
  it("SIFP#17 - should be verify that the Sign in button is disabled when the user has not filled the email and password field yet", () => {
    LoginPage.loginButton();
  });
  it("SIFP#18 - should be verify that the sign-in button is disabled when 1 field only is fill-out", () => {
    LoginPage.disable_login_button();
  });
  // it("SIFP#19 - should be verify that the forgot password page is accessible.", () => {
  //   ForgotPasswordPage.forgot_password_page();
  // });
  // //combination with #25
  // it("SIFP#23 - should be verify that the prompt message is present under the Registered email field when the user enters an invalid email", () => {
  //   ForgotPasswordPage.invalid_email_input();
  // });
  // //combination with #26 & 27
  // it("SIFP#24 - should be verify that the email field does not accept blank values", () => {
  //   ForgotPasswordPage.blank_input_email();
  // });
  // it("SIFP#28 - should be verify that the forgot password page sends a password reset link to the user's email address.", () => {
  //   elements.forgot_password_link().should("be.visible").click();
  //   elements.registered_email().should("be.visible").type("jett@alfred24.com");
  //   elements.button_send_verification_email().should("be.visible").click();
  // });
  // it("SIFP#29 - should be verify that the password reset link works and allows the user to reset their password.", () => {

  // });
});
