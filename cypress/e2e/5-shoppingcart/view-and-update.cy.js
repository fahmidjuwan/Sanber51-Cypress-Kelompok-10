describe('view cart', () => {
  it('view empty cart', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.get('.minicart-wrapper > .action').click()
  })
  it('Success view cart with login and Choose Product Men Bottom', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.contains('Sign In').click()
    cy.url().should('include','customer/account/login/referer')
    cy.get('#email').type('lisalustinasari@gmail.com')
    cy.get('[title="Password"]').type('Kholisah25.')
    cy.wait(2000); 
    cy.get('[class="action login primary"]').click()
    cy.url().should('include','magento.softwaretestingboard.com')
    cy.wait(2000); 
    cy.get('#ui-id-3 > span').click()
    cy.get(':nth-child(4) > :nth-child(5) > a').click()
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(3000); 
    cy.get('[id="option-label-size-143-item-176"]').click()
    cy.get('[id="option-label-color-93-item-53"]').click()
    cy.get('#product-addtocart-button').click()
    cy.get('.showcart').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.wait(2000);
  })
  it('Success update cart with login and Choose Product Men Bottom', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.contains('Sign In').click()
    cy.url().should('include','customer/account/login/referer')
    cy.get('#email').type('lisalustinasari@gmail.com')
    cy.get('[title="Password"]').type('Kholisah25.')
    cy.wait(2000); 
    cy.get('[class="action login primary"]').click()
    cy.url().should('include','magento.softwaretestingboard.com')
    cy.wait(2000); 
    cy.get('#ui-id-3 > span').click()
    cy.get(':nth-child(4) > :nth-child(5) > a').click()
    cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(3000); 
    cy.get('[id="option-label-size-143-item-176"]').click()
    cy.get('[id="option-label-color-93-item-53"]').click()
    cy.get('#product-addtocart-button').click()
    cy.get('.showcart').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.get('.action-edit').click()
    cy.get('#option-label-size-143-item-178').click()
    cy.get('#option-label-color-93-item-50').click()
    cy.get('#qty').type(1)
    cy.get('#product-updatecart-button').click()
    cy.wait(2000);
  })
    it('Success delete cart with login and Choose Product Men Bottom', () => {
    cy.visit('https://magento.softwaretestingboard.com')
    cy.contains('Sign In').click()
    cy.url().should('include','customer/account/login/referer')
    cy.get('#email').type('lisalustinasari@gmail.com')
    cy.get('[title="Password"]').type('Kholisah25.')
    cy.wait(2000); 
    cy.get('[class="action login primary"]').click()
    cy.url().should('include','magento.softwaretestingboard.com')
    cy.wait(2000); 
    cy.get('#ui-id-3 > span').click()
    cy.get(':nth-child(4) > :nth-child(5) > a').click()
    cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.wait(3000); 
    cy.get('#option-label-size-143-item-175').click()
    cy.get('#option-label-color-93-item-58').click()
    cy.get('#product-addtocart-button').click()
    cy.get('.showcart').click()
    cy.get(':nth-child(7) > .secondary > .action > span').click()
    cy.get(':nth-child(3) > .item-actions > td > .actions-toolbar > .action-delete').click()
    cy.wait(2000);
  })
})