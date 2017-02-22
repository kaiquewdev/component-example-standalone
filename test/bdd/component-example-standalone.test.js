var should = require('should');
var componentExampleStandAlone = require('../../js/component-example-standalone');

describe('component example standalone', function () {
  it('appendText', function () {
    componentExampleStandAlone.appendText('hello', ' world').should.be.eql('hello world')
    componentExampleStandAlone.appendText('one',' two',' three',' four').should.be.eql('one two three four');
    componentExampleStandAlone.appendText(['first'],['second']).should.be.eql('firstsecond')
  });

  it('time counter', function (done) {
    componentExampleStandAlone.promise().then(function (res) {
      res.data.should.be.eql([]);
      done();
    });
  });
});
