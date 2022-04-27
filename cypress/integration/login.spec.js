it("Should be able to admin login with correct email and password", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login("qamid@qamid.ru", "qamid");
    cy.contains("Управление залами");
});

it("Should not be able to admin login with uncorrect email", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login("qamib@qamid.ru", "qamid");
    cy.contains('Ошибка авторизации!');
});

it("Should not be able to admin login with empty email", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login(" ", "qamid");
    cy.get('[name="email"]')
        .then(($el) => $el[0].checkValidity())
        .should("be.false");
});

it("Should not be able to admin login with empty password", () => {
    cy.visit("http://qamid.tmweb.ru/admin");
    cy.login("qamid@qamid.ru", " ");
    cy.contains('Ошибка авторизации!');
});