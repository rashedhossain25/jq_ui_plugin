
//jq ui
$(document).ready(function(){

  // add class
	    $( "#butto" ).on( "click", function() {
      $( "#effects" ).addClass( "newClas", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effects" ).removeClass( "newClas" );
      }, 1500 );
    }


    //hide

        function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypes" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 200, height: 60 } };
      }
 
      // Run the effect
      $( "#effect" ).hide( selectedEffect, options, 1000, callback );
    };
 
    // Callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effect" ).removeAttr( "style" ).hide().fadeIn();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#button" ).on( "click", function() {
      runEffect();
    });


    //removeClass

    $( "#buttons" ).on( "click", function() {
      $( "#effecte" ).removeClass( "newCla", 1000, callback );
    });
 
    function callback() {
      setTimeout(function() {
        $( "#effecte" ).addClass( "newCla" );
      }, 1500 );
    }


        //show

         function runEffect() {
      // get effect type from
      var selectedEffect = $( "#effectTypese" ).val();
 
      // Most effect types need no options passed by default
      var options = {};
      // some effects have required parameters
      if ( selectedEffect === "scale" ) {
        options = { percent: 50 };
      } else if ( selectedEffect === "size" ) {
        options = { to: { width: 280, height: 185 } };
      }
 
      // Run the effect
      $( "#effectt" ).show( selectedEffect, options, 500, callback );
    };
 
    //callback function to bring a hidden box back
    function callback() {
      setTimeout(function() {
        $( "#effectt:visible" ).removeAttr( "style" ).fadeOut();
      }, 1000 );
    };
 
    // Set effect from select menu value
    $( "#buttond" ).on( "click", function() {
      runEffect();
    });
 
    $( "#effectt" ).hide();


});