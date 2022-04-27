it("Should be able to booking ticket", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login("qamid@qamid.ru", "qamid");
    cy.get('#start-sales .conf-step__selectors-box > :nth-child(6) > .conf-step__radio')
        .then(($el) => {
            //Переменная не видима вне функции. Нужно сделать видимой
            const hallName = $el.text()
            return (hallName)
        })

    cy.visit("http://qamid.tmweb.ru");
    cy.get("a.page-nav__day:nth-of-type(4)").click();
    //Вместо названия зала нужно подставить переменную
    cy.get(".movie").contains("Зал 1").siblings(".movie-seances__list").children().children().click();
    const seats = require("../fixtures/seats.json");
    seats.forEach((seat) => {
        cy.get(
            `.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`
        ).click();
    });
    cy.get(".acceptin-button").click();
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