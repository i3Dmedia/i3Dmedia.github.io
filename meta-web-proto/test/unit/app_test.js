// Suite
describe("app", function() {
  var helloWorld = function(){
    return "Hello world!";
  }

  // spec1 (or test1)
  it("should output 'hello world'", function() {
    // Expectation, how we express what we expect should happen.
    expect(helloWorld()).toEqual("Hello world!");
  });
});
