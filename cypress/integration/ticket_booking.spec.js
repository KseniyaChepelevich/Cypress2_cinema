const loginData = require("../fixtures/login_data.json");
const mainPage = require("../fixtures/main_page.json");

it("Should be able to booking ticket", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(loginData.validEmail, loginData.validPassword);

    cy.get(".conf-step__list > :nth-child(3)")
        .invoke("text")
        .then((text) => {
            const hallName = text;

            cy.visit("http://qamid.tmweb.ru");
            cy.get(mainPage["fourthDay"]).click();
            //Вместо названия зала нужно подставить переменную
            cy.get(mainPage.sectionMovie)
                .contains(hallName)
                .siblings(mainPage.seancesList)
                .children()
                .children()
                .click();
        });
    const seats = require("../fixtures/seats.json");
    seats.forEach((seat) => {
        cy.get(
            `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
    });


    const hallPage = require("../fixtures/hall_page.json");
    cy.get(hallPage.bookButton).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");

    /*Код для получение названия зала по data-hall-id, в который идут продажи билетов
          получается только получить значение data-hall-id. Получить название зала не выходит*/


});