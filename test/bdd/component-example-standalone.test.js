var should = require('should');
var componentExampleStandAlone = require('../../js/component-example-standalone');

describe('component example standalone composed operations', function () {
  it('appendText', function () {
    componentExampleStandAlone.appendText('hello', ' world').should.be.eql('hello world')
    componentExampleStandAlone.appendText('one',' two',' three',' four').should.be.eql('one two three four');
    componentExampleStandAlone.appendText(['first'],['second']).should.be.eql('firstsecond')
  });
});

describe('component example standalone flow control', function () {
  it('promise then', function (done) {
    componentExampleStandAlone.promise(function () { return true; }).then(function (res) {
      res.data.should.be.eql([]);
      done();
    });
  });

  it('promise when', function (done) {
    componentExampleStandAlone.promise().when(function (res) {
      res.data.should.be.eql([]);
      done();
    })
  });

  it('promise fail', function (done) {
    componentExampleStandAlone.promise().fail(function (res) {
      res.data.should.be.eql([]);
      done();
    });
  });

  it('promise result', function (done) {
    componentExampleStandAlone.promise().result(function (res) {
       res.data.should.be.eql([]);
       done();
    });
  });
});