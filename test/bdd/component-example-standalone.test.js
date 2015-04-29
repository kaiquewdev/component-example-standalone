var should = require('should');
var componentExampleStandAlone = require('../../js/component-example-standalone');

describe('component example standalone', function () {
  it('appendText', function () {
    componentExampleStandAlone.appendText('hello', ' world').should.be.eql('hello world');
  });
});
