describe('qwertyu', () => {
    beforeEach(() => {
        cy.visit('https://www.reddit.com/register/')

        cy.fixture('for-elem').then(function (data) {
            globalThis.data = data
         })

    })

    it('For sign up', () => {
        cy.get('input[type="text"]').type(data.name)
        cy.get('button[type="submit"]').click()
    })
})