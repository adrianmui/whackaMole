"use-strict";

// grid and it has tiles that light up evvery so often
// "the moles"
// interval is set to change the location of the moles
// Add event listeners on lighted moles (add class to those ones probably), need to be delegated
// if mole clicked in time interval, score is increased

APP = APP || {};

var ControllerModule = (function(View, Model) {
  var stub = {};
  stub.gameloop = function(){
    setInterval(function(){
      //generate mole location
      Model.setMoleLoc();
      var moleLoc = Model.getMoleLoc();
      View.render(moleLoc);
      //update grid - change classes for mole locationing
      //update score if clicked <- determined in listener
    }, 1000);
  };

  stub.init = function(){
    View.init();
  };

  return stub;
})(APP.View);

APP.ControllerModule = ControllerModule;
