const adminPage = require("../../fixtures/admin_page.json");
const loginData = require("../../fixtures/login_data.json");
const authorization = require("../../fixtures/authorization_page.json");

after("AfterAll", function () {
    cy.visit("http://qamid.tmweb.ru/admin");

    cy.get(adminPage.redHall).click();

    cy.contains("Удаление зала");
    cy.get(adminPage.deletNewHall).click();
});


it("Should be able to change places a new hall", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(loginData.validEmail, loginData.validPassword);
    cy.contains("Создать зал").click();
    cy.contains("Добавление зала");
    cy.get(adminPage.newHallNameInput).type("Красный");
    cy.contains("Добавить зал").click();
    cy.get(adminPage.hallList).contains("Красный").should("be.visible");
    cy.get('#hall-configuration > div > ul > li:nth-child(4) > input').click();
    cy.get('#input_places_count').click().type("25");
    cy.get('#hall-configuration > .conf-step__wrapper > .conf-step__buttons > .conf-step__button-accent').click();
    cy.get('#input_places_count').contains("25").should("be.visible");
});