describe('verify Magento Login Functionality', () => {
  it('success login', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login')
    cy.get('#email').type('yuyunnaysh27@gmail.com')
    cy.get('#pass').type('Yuyunsanber51')
    cy.get('#send2').click()
  })
})