const loginData = require('../../fixtures/loginData.json')


describe('Verify Magento Login Functionality', () => {
  it('success login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type(loginData.valid_email)
    cy.get('#pass').type(loginData.valid_password)
    cy.get('#send2').click()
  })
})

it('success login - CUSTOM COMMAND', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
  cy.login(loginData.valid_email,loginData.valid_password)
})
