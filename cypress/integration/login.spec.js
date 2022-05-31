const loginData = require("../fixtures/login_data.json");
const authorization = require("../fixtures/authorization_page.json");

describe("Admin login", () => {
    it("Should be able to admin login with correct email and password", () => {
        cy.visit("http://qamid.tmweb.ru/admin");
        cy.login(loginData.validEmail, loginData.validPassword);
        cy.contains("Управление залами");
    });

    it("Should not be able to admin login with invalid email", () => {
        cy.visit("http://qamid.tmweb.ru/admin");

        cy.login(loginData.invalidEmail, loginData.validPassword);
        cy.contains("Ошибка авторизации!");
    });

    it("Should not be able to admin login with empty email", () => {
        cy.visit("http://qamid.tmweb.ru/admin");
        cy.login(" ", loginData.validPassword);
        cy.get(authorization.email)
            .then(($el) => $el[0].checkValidity())
            .should("be.false");
    });

    it("Should not be able to admin login with empty password", () => {
        cy.visit("http://qamid.tmweb.ru/admin");
        cy.login(loginData.validEmail, " ");
        cy.contains("Ошибка авторизации!");
    });
});