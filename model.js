APP = APP || {};

var ModelModule = (function() {
  var stub = {};

  //grid for whackamole
  var publicGrid = [0,0,0,0,0,0,0,0];

  //getter
  stub.getGrid = function () { return publicGrid; };


  return stub;
})();

APP.ModelModule = ModelModule;