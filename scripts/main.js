/* Drop-Downs */
$(document).ready(function() {
    $("#bunDrop").on("click",function() {
        $(".dropdown-submenu").css("display", "none") /*hides any menus that are already open */
        $(".dropdown-submenu").removeClass("d-flex flex-wrap"); /*hides any menus that are already open */
        $("#bunClublist").addClass("d-flex flex-wrap");
        $("#bunClublist").css("display", "flex");
        console.log("SUCCESS"); /* test */
        /* re-centre map and zoom based on lat and long */
    });

    $("#flcDrop").on("click",function() {
        $(".dropdown-submenu").css("display", "none") /*hides any menus that are already open */
        $(".dropdown-submenu").removeClass("d-flex flex-wrap"); /*hides any menus that are already open */
        $("#flcClublist").addClass("d-flex flex-wrap");
        $("#flcClublist").css("display", "flex");
        console.log("SUCCESS"); /* test */
        /* re-centre map and zoom based on lat and long */
    });

    $("#eplDrop").on("click",function() {
        $(".dropdown-submenu").css("display", "none") /*hides any menus that are already open */
        $(".dropdown-submenu").removeClass("d-flex flex-wrap"); /*hides any menus that are already open */
        $("#eplClublist").addClass("d-flex flex-wrap");
        $("#eplClublist").css("display", "flex");
        console.log("SUCCESS"); /* test */
        /* re-centre map and zoom based on lat and long */
    });

    $("#gaaDrop").on("click",function() {
        $(".dropdown-submenu").css("display", "none") /*hides any menus that are already open */
        $(".dropdown-submenu").removeClass("d-flex flex-wrap"); /*hides any menus that are already open */
        $("#gaaClublist").addClass("d-flex flex-wrap");
        $("#gaaClublist").css("display", "flex");
        console.log("SUCCESS"); /* test */
        /* re-centre map and zoom based on lat and long */
    });

    $("#loiDrop").on("click",function() {
        $(".dropdown-submenu").css("display", "none") /*hides any menus that are already open */
        $(".dropdown-submenu").removeClass("d-flex flex-wrap"); /*hides any menus that are already open */
        $("#loiClublist").addClass("d-flex flex-wrap");
        $("#loiClublist").css("display", "flex");
        console.log("SUCCESS"); /* test */
        /* re-centre map and zoom based on lat and long */
    });

    $("#nhlDrop").on("click",function() {
        $(".dropdown-submenu").css("display", "none") /*hides any menus that are already open */
        $(".dropdown-submenu").removeClass("d-flex flex-wrap"); /*hides any menus that are already open */
        $("#nhlClublist").addClass("d-flex flex-wrap");
        $("#nhlClublist").css("display", "flex");
        console.log("SUCCESS"); /* test */
        /* re-centre map and zoom based on lat and long */
    });
    
    $("#slrDrop").on("click",function() {
        $(".dropdown-submenu").css("display", "none") /*hides any menus that are already open */
        $(".dropdown-submenu").removeClass("d-flex flex-wrap"); /*hides any menus that are already open */
        $("#slrClublist").addClass("d-flex flex-wrap");
        $("#slrClublist").css("display", "flex");
        console.log("SUCCESS"); /* test */
        /* re-centre map and zoom based on lat and long */
    });
});