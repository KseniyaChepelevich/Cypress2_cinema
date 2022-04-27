after("AfterAll", function () {
    cy.visit("http://qamid.tmweb.ru/admin");
    //cy.contains("Experimental Hall").children("button").click();
    cy.get('[data-hall-name="Experimental Hall"]');
    /*if (cy.get('.popup__dismiss > img'))
        cy.get('.popup__dismiss > img').click();*/
    cy.get('[data-hall-name="Experimental Hall"]').click();


    cy.contains('Удаление зала');
    cy.get('form > .conf-step__buttons > .conf-step__button-accent').click();

})

it("Should be able to add a new hall", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login("qamid@qamid.ru", "qamid");
    cy.contains('Создать зал').click();
    cy.contains('Добавление зала');
    cy.get('form > .conf-step__label > .conf-step__input').type("Experimental Hall");
    cy.contains('Добавить зал').click();
    //cy.contains('experimental hall').should("be.visible");
    cy.get('.conf-step__list').contains("Experimental Hall").should("be.visible");

});