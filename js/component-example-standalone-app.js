var componentExampleStandalone = require('./component-example-standalone');
var componentList = document.querySelectorAll('.component-example-standalone li');

for (var i = 0, l = componentList.length; i < l; i++) {
  var current = componentList[i];
  
  current.innerText = componentExampleStandalone.appendText(current.innerText, ' [Yeah!]');
}
