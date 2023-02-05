describe('Traversing Multiple Tab', () => {
    it('Multiple tabs', () => {
        cy.visit('https://docs.cypress.io/api/commands/each')
        cy.get('a[class="navbar__item navbar__link github-logo"]').as('github')

        cy.get('@github').should("have.attr", 'href').and('equal', 'https://github.com/cypress-io/cypress-documentation')
        cy.get('@github').should("have.attr", 'target').and('equal', '_blank')
        cy.get('@github').invoke('removeAttr', "target").click()
    })
})