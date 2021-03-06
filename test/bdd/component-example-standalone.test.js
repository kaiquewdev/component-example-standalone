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
  it('promise success for boolean treatment', function (done) {
    componentExampleStandAlone.promise(function () { return true; }).success(function (res) {
      res.data.should.be.eql([]);
      done();
    });
  });

  it('promise fail when the result was falsy', function (done) {
    componentExampleStandAlone.promise(function () { return false; }).fail(function (res) {
      res.data.should.be.eql([]);
      done();
    });
  });

  it('promise then', function (done) {
    componentExampleStandAlone.promise(function () { return {ok:1}; }).then(function (res) {
      res.data.should.be.eql([{ok:1}]);
      done();
    });
  });

  it('promise when', function (done) {
    componentExampleStandAlone.promise(function () { return {ok:1}; }).when(function (res) {
      res.data.should.be.eql([{ok:1}]);
      done();
    })
  });

  it('promise result', function (done) {
    componentExampleStandAlone.promise(function () { return {ok:1}; }).result(function (res) {
       res.data.should.be.eql([{ok:1}]);
       done();
    });
  });
});