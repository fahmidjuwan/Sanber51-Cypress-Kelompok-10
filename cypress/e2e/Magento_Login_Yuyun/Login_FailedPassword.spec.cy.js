const loginData = require('../../fixtures/loginData.json')


describe('Verify Magento Login Functionality', () => {
  it('failed password login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type(loginData.valid_email)
    cy.get('#pass').type(loginData.invalid_password)
    cy.get('#send2').click()
    cy.get('.message-error', {timeout: 30000}).should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })
})