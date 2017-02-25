module.exports = {
  'Component example standalone': function (browser) {
    browser
      .url('http://localhost:8080/component-example-standalone.html')
      .waitForElementVisible('body', 1000)
      .waitForElementVisible('.component-example-standalone', 1000)
      .assert.elementPresent('h1')
      .assert.elementPresent('h1','Component Example Standalone')
      .assert.elementPresent('p.first_paragraph','Modularized architecture')
      .assert.elementPresent('p.second_paragraph','Sample paragraph')
      .assert.elementPresent('.component-example-standalone')
      .assert.elementPresent('h2')
      .assert.elementPresent('h2','List items')
      .assert.containsText('li:nth-child(1)', 'teste 1')
      .assert.containsText('li:nth-child(2)', 'teste 2')
      .assert.containsText('li:nth-child(3)', 'teste 3')
      .assert.containsText('li:nth-child(4)', 'teste 4')
      .assert.elementPresent('hr')
      .assert.elementPresent('input')
      .assert.elementPresent('textarea')
      .assert.elementPresent('hr')
      .end();
  }
};
