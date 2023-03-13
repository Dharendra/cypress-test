
const calculatorPage = {
  rate: '#rate',
  mortgage: '.arc-label-value',
  monthlyPayment: '[y=\"20\"]',
  error: '.StyledFormHelp-c11n-8-64-1__sc-h3s6hy-0',

  /**
   * test if post title exists
   * @param  {string} postTitle
   * @return {bool}
   */
  enterRate(rate) {
    cy.get(this.rate).clear().type(rate)
    cy.contains('Advanced').click()
  },

  verifyTaxesDisplayed(taxes) {
      return cy.get(this.mortgage).eq(1)
               .should('contain', taxes)
  },

  verifyPIDisplayed(pI) {
    return cy.get(this.mortgage).eq(0)
             .invoke('text').as(pI)
},
  verifyInsuranceDisplayed(insurance) {
    return cy.get(this.mortgage).eq(2)
             .should('contain', insurance)
  },

  verifyMonthlyDisplayed(monthly) {
    return cy.get(this.monthlyPayment)
             .invoke('text').as(monthly)
  },

  verifyErrorMessageDisplayed(rateAlphaNumeric) {
    cy.get(this.rate).clear().type(rateAlphaNumeric)
    cy.contains('Advanced').click()
    const errorMessage= 'Rate must be greater than or equal to 0'
    cy.get(this.error)
      .should('contain' , errorMessage)
},
 
}
export default {...calculatorPage}


