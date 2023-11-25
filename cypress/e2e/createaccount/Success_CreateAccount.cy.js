describe('Create an Account', () => {
  it('Create account success', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.contains ('Create an Account').click()
    cy.get('#firstname').type('Mentari')
    cy.get('#lastname').type('Sartika')
    cy.get('#email_address').type('mentarisar@gmail.com')
    cy.get('#password').type('Mentarisar123')
    cy.get('#password-confirmation').type('Mentarisar123')
    cy.get('.action.submit.primary').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
  })
})