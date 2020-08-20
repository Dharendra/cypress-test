import searchPage from '../pages/searchPage'
import notaryPage from '../pages/notaryPage'

describe('Search For Notaries', () => {
  it('should return notaries in a Zip Code', () =>  {
     cy.visit('https://notary.snapdocs.com/notary-public/')
     const postTitle = 'Try Snapdocs for free!'
     searchPage.notaryDemoTextExists(postTitle)
     searchPage.verifyNotaryInSection()
     searchPage.verifyVideoContnet()
     searchPage.searchFor('18064')
     searchPage.navigateToNotary()    

  })
  
  it('should Verify Notary Details Page', () =>  {
     const notaryTitle = 'Monica B Voloshin'
     notaryPage.notaryNameExists(notaryTitle) 
     notaryPage.verifyNotaryVerified() 
     notaryPage.verifyNotaryDetails()
     notaryPage.verifyNearByNotary()
  })

})