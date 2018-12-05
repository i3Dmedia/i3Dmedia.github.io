// Suite
describe("Mixin service", function() {
  "use strict";
  var m = {ext: function(){ return "ext-extension";}};
  var r;
  var Mixin;


  // app injection check test1
  beforeEach(function(){
    r = module('app');
  });
  it("angular-mocks should load app", function() {
    console.log("module(app) returns non-null workfn() or Workfn");
    expect(r).not.toBeNull();
  });



  // Mixin injection check tests2-4
  beforeEach(inject(function(_Mixin_){
    Mixin = _Mixin_;
  }));
  it("should be defined in app", function() {
    console.log("Mixin is defined");
    expect(Mixin.toBeDefined);
  });
  it("should be defined in app", function() {
    console.log("Mixin.extend is defined");
    expect(Mixin.extend.toBeDefined);
  });
  it("should be defined in app", function() {
    console.log("Mixin.include is defined");
    expect(Mixin.include.toBeDefined);
  });


  // spec1, i.e. test5
  it("extend adds singleton method to an object", function() {
    var o = {};
    Mixin.extend(o, m);
    console.log("Mixin.extend(o,m)");
    // Expectation, how we express what we expect should happen.
    expect(o.ext()).toEqual("ext-extension");
  });

  // spec2, i.e. test6
  it("extend adds static method to a function", function() {
    var F = function(){};
    Mixin.extend(F, m);
    console.log("Mixin.extend(F,m)");

    // Expectation, how we express what we expect should happen.
    expect(F.ext()).toEqual("ext-extension");
  });

  // spec3, i.e. test7
  it("include adds instance method", function() {
    var m = {ext: function(){ return "ext-extension";}};
    var F = function(){};
    var instance;

    Mixin.include(F, m);
    console.log("Mixin.include(F,m)");
    instance = new F();

    // Expectation, how we express what we expect should happen.
    expect(instance.ext()).toEqual("ext-extension");
  });

});
