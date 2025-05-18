class LoginPage {
  //Selectors 
  getUsernameInput = () => cy.get("#ctl00_MainContent_username")
  getPasswordInput = () => cy.get("#ctl00_MainContent_password")
  getLoginButton = () => cy.get("#ctl00_MainContent_login_button")
  getErrorMessage = () => cy.get("#ctl00_MainContent_status")
  
  // Reusable methods for login page
  enterUsername(username) {
    this.getUsernameInput().type(username);
  }

  enterPassword(password) {
    this.getPasswordInput().type(password);
  }

  clickOnLoginButton() {
    this.getLoginButton().click();
  }

  login(username, password) {
    this.enterUsername(username);
    this.enterPassword(password);
    this.clickOnLoginButton();
  }
}

module.exports = new LoginPage()