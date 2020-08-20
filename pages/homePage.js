
const homePage = {
  navBar: '#main-nav-wrap',
  moduleImage: '.wp-post-image.wp-image-740',
  titleEscrowModule: '.module-feature.tb_rk5j777',
  lendersModule: '.module-feature.tb_1nd5814',
  notaryModule: '.module-feature.tb_ohg1257',
  notaryButton: '#menu-item-31',

  verifyModuleImage() {
      return cy.get(this.moduleImage)
  },
 
  verifyTitleEscrowModule() {
      return cy.get(this.titleEscrowModule)
  },
  verifyLendersModule() {
      return cy.get(this.lendersModule)
  },
  verifyNotaryModule() {
      return cy.get(this.notaryModule)
  },
  verifyNavBar() {
    return cy.get(this.navBar)
  },

}

export default {...homePage}