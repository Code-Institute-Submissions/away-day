/* Main JS to go here

$("div").on( "click", "button", function( event ) {
  $(event.delegateTarget ).css( "background-color", "green");
}); */

$("#slrDrop").on("click", function(event) {
    $(".dropdown-submenu").css("display", "none"); /* hides any league menus that are already open */
    $("li #slrClublist").css("display", "block"); /* then displays the relevant league menu */
});