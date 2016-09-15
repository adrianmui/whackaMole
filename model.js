var APP = APP || {};

var ModelModule = (function() {
  var stub = {};

  var moleLocation = 0;

  stub.getMoleLoc = function(){
    return moleLocation;
  };

  stub.setMoleLoc = function(){
    moleLocation = Math.floor(Math.random()*publicGridSize);
  };
  //grid for whackamole
  var publicGridSize = 8;

  //getter
  stub.getGrid = function () { return publicGrid; };


  return stub;
})();

APP.ModelModule = ModelModule;
