// tests for Clone service
describe("Clone service", function() {
  "use strict";
  var r, Clone;


  // app injection check test1
  beforeEach(function(){
    r = module('app');
  });
  it("angular-mocks should load app", function() {
    console.log("module('app') returns non-null workfn() or Workfn");
    expect(r).not.toBeNull();
  });



  // Clone injection check tests2-3
  beforeEach(inject(function(_Clone_){
    Clone = _Clone_;
  }));
  it("should be defined in app", function() {
    console.log("Clone is defined");
    expect(Clone.toBeDefined);
  });
  it("should be defined in app", function() {
    console.log("Clone.clone is defined");
    expect(Clone.clone.toBeDefined);
  });


  // spec1, i.e. test4
  it("should clone an object", function() {
    var o = { a:1, b:"b-string", c:function(){return "c:f()"}};
    var o2, p;

    o2 = Clone.clone(o);

    // different references
    expect(o2===o).toBe(false);
    // same properties and values
    for(p in o){
      expect(o[p]).toEqual(o2[p]);
      if(typeof p === "function"){
        expect(o2.c()).toEqual("c:f()");
      }
    }
  });

  // spec2, i.e. test5
  it("should clone an array", function() {
    var f = function(){return "c:f()"};
    var a = [1,2,3,f], a2;

    a2 = Clone.clone(a);
    expect(a2===a).toBe(false);
    a.forEach(function(e,i){
      expect(a2[i]).toEqual(e);
      if(typeof p === "function"){
        expect(o2.c()).toEqual("c:f()");
      }
    });
  });

  // spec3, i.e. test7
  it("should create a method 'clone' on Object", function() {
    var o = { a:1, b:"b-string", c:function(){return "c:f()"}};
    var o2, p;

    o2 = Object.clone(o);

    // different references
    expect(o2===o).toBe(false);
    // same properties and values
    for(p in o){
      expect(o[p]).toEqual(o2[p]);
      if(typeof p === "function"){
        expect(o2.c()).toEqual("c:f()");
      }
    }
  });

});
