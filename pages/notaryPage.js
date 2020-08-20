

const notaryPage = {
  notaryName: '.notary-name',
  notaryVerified: '.sd-verified',
  notaryDetail: '.col-md-4',
  nearByNotaries: '#nearbys',

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  notaryNameExists(postTitle) {
    return cy.get(this.notaryName).should("have.text",postTitle)
  },

  verifyNotaryVerified() {
      return cy.get(this.notaryVerified).should('be.visible')
  },

  verifyNotaryDetails() {
      return cy.get(this.notaryDetail).should('be.visible')
  },

  verifyNearByNotary() {
      return cy.get(this.nearByNotaries).should('be.visible')
  },

}
export default {...notaryPage}