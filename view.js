var APP = APP || {};

var ViewModule = (function($) {
    var stub = {};

    stub.init = function() {
      
    };

    //listener for click

    stub.setClickListener = function () {
      $('.active').on("click", function (e) {

      });
    }

    //clears the grid
    stub.clear = function () {
      $('#container').empty();
    };

    //renders grid + mole
    stub.render = function(mole, gridSize) {
      $container = $('#container');
      for (var i = 0; i < gridSize; i++) {
        $tile = $('<div>')
          .addClass("tile")
          .attr("id", i);

        if (i === mole) {
          $tile.addClass("active");
        }
        $container.append($tile);
      }
    };

    return stub;
})($);

APP.ViewModule = ViewModule;
