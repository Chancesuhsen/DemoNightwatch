/**
 * Verify the Navigation Menu and Base Page attributes
 *
 */

module.exports = {
  '@tags': ['dev'],
  
  'Navigate to the Magneic Automation Home Page verify the base page content' : function (browser) {
    base = browser.page.basePage()
    base.navigate()
      .verifyHeadingAndFooter('Automation Test Site')
      .verifyNavBarText()
    browser.end()
    },

    
  'Verify Home Page Content' : function (client) {
    homepage = new client.page.homePage()
    homepage.navigate()
      .isLoaded()
      .verifyLogo()
      .assert.containsText('@title','Automation')
      .verify.visible('@logo')
      .getText('@title', function(txt) {
        client.assert.equal(txt.value, 'Automation Test Site')
      })
  },
};

  