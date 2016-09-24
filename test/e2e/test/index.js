module.exports = {
  'Index Page Test' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('body', 1000)
      .assert.containsText('body', 'Express')
      .end();
  }
};
