it("Should be able to open the main page", () => {
    cy.visit("http://qamid.tmweb.ru");
    cy.contains("Идём");
});

it("Should show correct number of days", () => {
    cy.visit("qamid.tmweb.ru");
    cy.get(".page-nav__day").should("have.length", 7);
});