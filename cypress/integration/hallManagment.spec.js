const adminPage = require("../fixtures/admin_page.json");
const loginData = require("../fixtures/login_data.json");
const authorization = require("../fixtures/authorization_page.json");

after("AfterAll", function () {
    cy.visit("http://qamid.tmweb.ru/admin");



    cy.get(adminPage.newHall).click();

    cy.contains("Удаление зала");
    cy.get(adminPage.deletNewHall).click();
});

it("Should be able to add a new hall", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(loginData.validEmail, loginData.validPassword);
    cy.contains("Создать зал").click();
    cy.contains("Добавление зала");
    cy.get(adminPage.newHallNameInput).type("Experimental Hall");
    cy.contains("Добавить зал").click();

    cy.get(adminPage.hallList).contains("Experimental Hall").should("be.visible");
});