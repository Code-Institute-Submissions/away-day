/* Main JS to go here*/

$("div").on( "click", "button", function( event ) {
  $(event.delegateTarget ).css( "background-color", "green");
});