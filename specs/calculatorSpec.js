import calculatorPage from '../pages/calculatorPage'

describe('Interest Rate Calculator', () => {
  it('TC03 Postivie Number Interest Calculation', () =>  {
     cy.visit('https://www.zillow.com/mortgage-calculator/')
     const postTitle = 'Mortgage Calculator - Free House Payment Estimate | Zillow'
     cy.title().should('eq', postTitle)
     const rate = "10.00"
     const taxes = "$463"
     const pI = "$2106"
     const insurance = "$105"
     const monthly = "2,464"
     calculatorPage.enterRate(rate)
     calculatorPage.verifyTaxesDisplayed(taxes)
     calculatorPage.verifyPIDisplayed(pI)
     calculatorPage.verifyInsuranceDisplayed(insurance)
     calculatorPage.verifyMonthlyDisplayed(monthly)
  })
  
  it('TC06 Negative Value in Input Field', () =>  {
   const rateAlphaNumeric = "-5"
   cy.visit('https://www.zillow.com/mortgage-calculator/')
   calculatorPage.verifyErrorMessageDisplayed(rateAlphaNumeric)
  })

})