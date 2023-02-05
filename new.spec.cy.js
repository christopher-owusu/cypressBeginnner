describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#twotabsearchtextbox').type('apple watch')
    cy.get('#nav-search-submit-button').click()
    cy.get('div[data-component-type="s-search-result"]').as('results')
    cy.get("@results").eq(5).invoke('text').then(productText => {
      cy.log(productText)
    })


    cy.get('@results').each(($el, index, $list) => {
      // $el is a wrapped jQuery element
      // index -- index
      // $list -- collection

      cy.wrap($el).scrollIntoView()
      

      cy.log(`Index ${index}, and the product is ${$el.text()}`)
    })
  })
})