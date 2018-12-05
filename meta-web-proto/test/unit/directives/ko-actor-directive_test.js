// Suite
describe("KoActor directive", function() {
  "use strict";
  // vars
  var r;       // return value from module('app')
  var el;      // directive svg DOM element  
  var scope;   // parent scope for all ng-repeat scopes
  var KoActor; // directive definition
//  var c0 = '<svg><circle ng-repeat = "c in circles" class="circle" + ng-attr-cx = "{{c.cx}}" + ng-attr-cy = "{{c.cy}}" + ng-attr-r = "{{c.cr}}"  + ng-attr-style = "{{c.style}}" + </circle><svg>';
  // NOTE! c0 needs to be bracketed by <svg></svg> so search inside
  // compiled element identifies SVGCircleElement NOT HTMLUnknownElement
  // This is a test detail only
  var c0 = '<svg><g id = "{{Circles.id}}" transform = "{{Circles.transform}}"><circle ng-repeat = "c in circles" class="circle" ng-attr-cx = "{{c.x}}" ng-attr-cy = "{{c.y}}" ng-attr-r = "{{c.r}}" ng-attr-style = "{{c.style}}" </circle></g></svg>';
  var Circles = {id:"bubblechart", transform:"translate(0,0)"};
  var circles = [{cx:10, cy:20, cr:5, style:"fill:'red'"},
                 {cx:11, cy:21, cr:6, style:"fill:'gray'"},
                 {cx:12, cy:22, cr:7, style:"fill:'blue'"}];
  var fragment;
  var $compile;
  var i,p;



  // setup
  beforeEach(function(){
    r = module('app');
  });

  beforeEach(inject(function(_$compile_, $rootScope) {
    $compile = _$compile_;
    scope = $rootScope.$new();
    scope.circles = circles;
    scope.Circles = Circles;
    el = $compile(c0)(scope);
    scope.$digest();  // NOTE!! - must call watchers to detect init
    fragment = el.find('circle');
  }));



  // app injection check test 1-3
  it("angular-mocks should load app", function() {
    console.log("KoActor test1: module(app) returns non-null workfn() or Workfn");
    expect(r).not.toBeNull();
  });
  it("should create $compile", function() {
    console.log("KoActor test2: $compile is defined");
    expect($compile.toBeDefined);
  });
  it("should create parent scope", function() {
    console.log("KoActor test3: scope compile is defined");
    expect(scope.toBeDefined);
  });

  // tests 4-6
  it("should create compiled template", function() {
    console.log("KoActor test4: after compiling template: el = " + el);
    expect(el).not.toBeNull();
  });
  it("should find circle fragment from compiled template", function() {
    console.log("KoActor test5: after compiling template: circle fragment = " + fragment.toString()); 
    expect(fragment).not.toBeNull();
  });
  it("should create parent scope with parameters", function() {
    console.log("KoActor test6: scope should be defined = " + fragment.toString()); 
    expect(scope.circles.toBeDefined);
    for(i=0; i<scope.circles.length; i++){
      expect(scope.circles[i].cx.toBeDefined);
      expect(scope.circles[i].cy.toBeDefined);
      expect(scope.circles[i].cr.toBeDefined);
      console.log("KoActor: scope.circles[" + i + "].cx = " + scope.circles[i].cx);
      console.log("KoActor: scope.circles[" + i + "].cy = " + scope.circles[i].cy);
      console.log("KoActor: scope.circles[" + i + "].cr = " + scope.circles[i].cr);
    }
    expect(scope.circles[0].cx).toEqual(10);
    expect(scope.circles[0].cy).toEqual(20);
    expect(scope.circles[0].cr).toEqual(5);
  });

  // tests 7,8
  it("should produce compiled element of type object SVGCircleElement", function() {
    console.log("\nKoActor test7: fragment has type SVGCircleElement");
    console.log("\nKoActor: el Own properties are:");
    for(p in el){
      if(fragment.hasOwnProperty(p)){
        console.log("el[" + p + "] = " + el[p]);
      }
    }

    console.log("\nfragment Own properties are:");
    for(var p in fragment){
      if(fragment.hasOwnProperty(p)){
        console.log("fragment[" + p + "] = " + fragment[p]);
      }
    }
    console.log("fragment['0'] = >" + fragment['0'] + "<");
    console.log("fragment['0'].toString() = >" + fragment['0'].toString() + "<");
    console.log("typeof fragment['0'] = >" + typeof fragment['0'] + "<");
    for(i=0; i<fragment.length; i++){
      expect(fragment[i].toString()).toEqual('[object SVGCircleElement]');
    }
  });
  it("should produce 3 repeated compiled element", function() {
    console.log("\nKoActor test8: fragment has ng-repeat length = 3");
    expect(fragment['length']).toEqual(3);
  });
});
