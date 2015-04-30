module.exports = {
  'Component example standalone': function (browser) {
    browser
      .url('http://localhost:8080/component-example-standalone.html')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.component-example-standalone', 1000)
      .assert.elementPresent('.component-example-standalone')
      .assert.containsText('li:nth-child(1)', 'teste 1')
      .assert.containsText('li:nth-child(2)', 'teste 2')
      .assert.containsText('li:nth-child(3)', 'teste 3')
      .end();
  }
};
