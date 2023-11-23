describe('Verify Magento Login Functionality', () => {
  it('failed Email login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type('yuyun27@gmail.com')
    cy.get('#pass').type('Yuyunsanber51')
    cy.get('#send2').click()
    cy.get('.message-error').should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })
})