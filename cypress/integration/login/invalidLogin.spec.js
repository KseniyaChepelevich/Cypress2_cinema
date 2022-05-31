const loginData = require("../../fixtures/login_data.json");
const authorization = require("../../fixtures/authorization_page.json");

it("Should not be able to admin login with invalid email", () => {
    cy.visit("http://qamid.tmweb.ru/admin");

    cy.login(loginData.validEmail, loginData.invalidPassword);
    cy.contains("Ошибка авторизации!");
});