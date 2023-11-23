describe('Verify Magento Login Functionality', () => {
  it('failed password login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type('yuyunnaysh27@gmail.com')
    cy.get('#pass').type('Yuyunsanber50')
    cy.get('#send2').click()
    cy.get('.message-error').should('contain','The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.')
  })
})
