module.exports = {
  'Component example standalone': function (browser) {
    browser
      .url('http://localhost:8080/component-example-standalone.html')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.component-example-standalone', 1000)
      .assert.elementPresent('.component-example-standalone')
      .assert.containsText('li:first-child', 'teste 1')
      .end();
  }
};
