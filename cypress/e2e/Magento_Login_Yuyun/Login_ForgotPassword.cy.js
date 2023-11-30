const loginData = require('../../fixtures/loginData.json')


describe('Verify Magento Login Functionality', () => {
  it('success Login - Forgot Password', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/forgotpassword/')
    cy.get('#email_address').type(loginData.valid_email)
    cy.get('*[class^="action submit primary"]', {timeout: 100000}).click()
    cy.get('.message-success > div', {timeout: 30000}).should('contain','If there is an account associated with '+ loginData.valid_email + ' you will receive an email with a link to reset your password.')
  })
})
