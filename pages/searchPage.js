
const searchPage = {
  searchBox: '#autocomplete',
  results: '#notaries-list',
  notaryDemo: 'div.col-md-4 > div > h3',
  findNotaryIn: '.col-sm-12',
  videoContent: '.browser__content',
  firstSearchResult: '.notary-info:nth-child(1) .btn',

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  notaryDemoTextExists(postTitle) {
    return cy.get(this.notaryDemo).should("have.text",postTitle)
  },

  verifyNotaryInSection() {
      return cy.get(this.findNotaryIn).should('be.visible')
  },
 
  verifyVideoContnet() {
      return cy.get(this.videoContent).should('be.visible')
  },
  searchFor(text) {
    cy.get(this.searchBox)
      .click().type(text)
      .type('{enter}')
      .wait(1000)
  },

  navigateToNotary(){
    cy.get(this.firstSearchResult).click()
  },

}
export default {...searchPage}


