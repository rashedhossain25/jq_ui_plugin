
//jq ui
   //draggable
$(document).ready(function(){

	$( "#dragg" ).draggable();

	//Droppable
    $( "#draggab" ).draggable();
    $( "#droppab" ).droppable({
      drop: function( event, ui ) {
        $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
        .html( "Dropped!" );          
      }
    });
  
   //Sortable

   $( "#short" ).sortable();




});