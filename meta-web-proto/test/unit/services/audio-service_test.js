// Suite
describe("Audio service", function() {
  "use strict";
  var r;
  var Audio;


  // app injection check - test1
  /*
  beforeEach(module('app'));
  */
  beforeEach(function() {
    r = module("app");
  });
  it("angular-mocks should load app", function() {
    console.log("module(app) returns non-null worfn() or Workfn");
    expect(r).not.toBeNull();
  });



  // Audio injection checks - tests2-9
  beforeEach(inject(function(_Audio_){
    Audio = _Audio_;
  }));
  it("should be defined in app", function() {
    console.log("Audio defined");
    expect(Audio.toBeDefined);
  });
  it("should define speak", function() {
    console.log("Audio.speak defined");
    expect(Audio.speak.toBeDefined);
  });
  it("should define english", function() {
    console.log("Audio.english defined");
    expect(Audio.english.toBeDefined);
  });
  it("should define englishF", function() {
    console.log("Audio.englishF defined");
    expect(Audio.englishF.toBeDefined);
  });
  it("should define francais", function() {
    console.log("Audio.francais defined");
    expect(Audio.francais.toBeDefined);
  });
  it("should define francaisF", function() {
    console.log("Audio.francaisF defined");
    expect(Audio.francaisF.toBeDefined);
  });
  it("should define deutsch", function() {
    console.log("Audio.deutsch defined");
    expect(Audio.deutsch.toBeDefined);
  });
  it("should define deutschF", function() {
    console.log("Audio.deutschF defined");
    expect(Audio.deutschF.toBeDefined);
  });
});
