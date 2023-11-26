const loginData = require('../../fixtures/loginData.json')


describe('Verify Magento Login Functionality', () => {
  it('failed Email login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type(loginData.invalid_email)
    cy.get('#pass').type(loginData.valid_password)
    cy.get('#send2').click()
    cy.get('.message-error > div', {timeout: 30000}).should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })

it('failed Email login - CUSTOM COMMAND', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
  cy.login(loginData.invalid_email,loginData.valid_password)
  cy.verifyContain('.message-error > div','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })
})
