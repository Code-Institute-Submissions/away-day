/* Main JS to go here

$("div").on( "click", "button", function( event ) {
  $(event.delegateTarget ).css( "background-color", "green");
}); */

$(document).ready(function() {
    $("#slrDrop").on("click",function() {
        /* $(".dropdown-submenu").css("display", "none"); hides any league menus that are already open */

        $("#slrClublist").css("display", "flex"); /* now working but need it to wrap via Bootstrap */
        console.log("SUCCESS"); /* then displays the relevant league menu */
        /* re-centre map based on lat and long */
    });
    /* other league function duplicated here */
});

$(document).ready(function() {
    $(".box").on("click",function() {
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];
        if ($(this).css("background-color") == "rgb(255, 0, 0)") {
            $("." + className).css("background-color","#000");
        } else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }
    })
})