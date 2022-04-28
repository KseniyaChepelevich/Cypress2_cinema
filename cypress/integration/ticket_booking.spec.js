const loginData = require("../fixtures/login_data.json");
const authorization = require("../fixtures/authorization_page.json");
const adminPage = require("../fixtures/admin_page.json");
const mainPage = require("../fixtures/main_page.json")

it("Should be able to booking ticket", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(loginData.validEmail, loginData.validPassword);

    /*function textElement(element) {
        return element.text();
    }
    cy.get(adminPage.salesHall6)
        .then(($el) => {
            cy.wrap({
                textElement
            }).invoke("textElement")
        })*/

    cy.get(adminPage.salesHall6)
        /*.then(($el) => {
            //Переменная не видима вне функции. Нужно сделать видимой
            const hallName = $el.text()
            //return (hallName)
            cy.log($el.text())
        })*/

        .invoke("val")
        .then(hallName => {
            //cy.log(hallName)
            return hallName
        })

    cy.visit("http://qamid.tmweb.ru");
    cy.get(mainPage["fourthDay"]).click();
    //Вместо названия зала нужно подставить переменную
    cy.get(mainPage.sectionMovie).contains("Зал 1").siblings(mainPage.seancesList).children().children().click();
    const seats = require("../fixtures/seats.json");
    seats.forEach((seat) => {
        cy.get(
            `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
    });
    const hallPage = require("../fixtures/hall_page.json")
    cy.get(hallPage.bookButton).click();
    cy.contains("Вы выбрали билеты:").should("be.visible");



    /*Код для получение названия зала по data-hall-id, в который идут продажи билетов
    получается только получить значение data-hall-id. Получить название зала не выходит*/

    /*cy.contains("Закрыть продажу билетов")
        .should('have.attr', 'data-hall-id')
        .then(($el) => {
            const hallId = $el;


            cy.get('.conf-step__selectors-box').eq(2)
                .find('li')
                .filter(`[data-hall-id=${"hallId"}]`)
            .should('have.attr', 'data-hall-id', hallId)


            cy.get("[name='sales-hall']").should('have.attr', 'data-hall-id')
                .should('have.attr', 'value').last()
             .then(($el) => {
                 const hallName = $el[5]
                 return hallName
             })
        })
        .should('have.attr', 'value'))
    .then(($el) => {
        const openHall = $el.attr("value")*/

});