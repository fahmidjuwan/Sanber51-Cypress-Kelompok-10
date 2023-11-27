describe('Create an Account', () => {
  function randomMail(){
    const randomString = Math.random().toString(36).substring(2,10)
    const mail = randomString + "@gmail.com"
    return mail
  }

  function randomName(){
    const randomString = Math.random().toString(36).substring(2,10)
    const name = "User"+randomString
    return name
  }

  let gmail = randomMail()
  let firstName = randomName()

  beforeEach(() => {
    cy.visit('/')
  })
  
  it('Create account success', () => {
    cy.contains ('Create an Account').click()
    cy.get('#firstname').type(firstName)
    cy.get('[name="lastname"').type('Sartika')
    cy.get('#email_address').type(gmail)
    cy.get('#password').type('Password123')
    cy.get('#password-confirmation').type('Password123')
    cy.get('.action.submit.primary').click()
    cy.url().should('include','https://magento.softwaretestingboard.com/customer/account/')
    cy.contains('Thank you for registering with Main Website Store.').should('be.visible')
  })

  it('Create account alerdy exists', () => {
    cy.contains ('Create an Account').click()
    cy.get('#firstname').type('Mentari')
    cy.get('[name="lastname"').type('Sartika')
    cy.get('#email_address').type('mentarisar@gmail.com')
    cy.get('#password').type('Mentarisar123')
    cy.get('#password-confirmation').type('Mentarisar123')
    cy.get('.action.submit.primary').click()
    cy.contains('There is already an account with this email address.').should('be.visible')
  })
})