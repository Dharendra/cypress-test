import homePage from '../pages/homePage'

describe('Navigate to HomePage', () => {
  it('should Validate homePage Elements', () => {
    cy.visit('https://snapdocs.com')
    homePage.verifyNavBar().should('be.visible')
    homePage.verifyTitleEscrowModule().should('be.visible')
    homePage.verifyLendersModule().should('be.visible')
    homePage.verifyNotaryModule().should('be.visible')
  })

})