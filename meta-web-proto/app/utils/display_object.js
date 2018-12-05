// utility to display an objects deep properties


var display_object = function(o, base){
  var base = base || 'o';
  var prefix, p;

  if(typeof o === 'object'){
    for(p in o){
      prefix = base + '[' + p + ']';
      display_object(o[p], prefix);
    }
  }else{
    if(Array.isArray(o)){
      o.forEach(function(e,i){
        prefix = base + '[' + i + ']';
        display_object(e, prefix);
      });
    }else{
      console.log(base + ' = ' + o);
    }
  }
}      

