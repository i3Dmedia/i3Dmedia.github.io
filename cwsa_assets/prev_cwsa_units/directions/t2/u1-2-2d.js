(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['u1-2-2d'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "{\"directions\":[{\"o\":\"dActor\",\"m\":\"moveTo\",\"a\":\"";
  if (stack1 = helpers.dIncorrect) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dIncorrect; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"},\n                 {\"o\":\"Presentation\",\"m\":\"pause\",\"a\":\"500\"},\n                 {\"o\":\"dActor\",\"m\":\"moveTo\",\"a\":\"";
  if (stack1 = helpers.dCorrect) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dCorrect; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"},\n                 {\"o\":\"Presentation\",\"m\":\"pause\",\"a\":\"500\"},\n                 {\"o\":\"Presentation\",\"m\":\"highLight\",\"a\":\"";
  if (stack1 = helpers.dCorrect) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.dCorrect; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"},\n                 {\"o\":\"dActor\",\"m\":\"moveTo\",\"a\":\"offstage\"}]}\n";
  return buffer;
  });
})();
