/* Site interactivity */

/* Drop-down interactivity for desktop and tablets */
$(document).ready(function() {
    if ($(window).width() > 575) {
        
        /* Change of icon when cursor enters a league dropdown */
        $("#bunDrop").on("mouseenter",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-8a2be2.png");
        });

        $("#eplDrop").on("mouseenter",function() {
            $("#epl-icon").attr("src", "images/dropdowns/epl-8a2be2.png");
        });

        $("#flcDrop").on("mouseenter",function() {
            $("#flc-icon").attr("src", "images/dropdowns/flc-8a2be2.png");
        });

        $("#gaaDrop").on("mouseenter",function() {
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-8a2be2.png");
        });

        $("#loiDrop").on("mouseenter",function() {
            $("#loi-icon").attr("src", "images/dropdowns/loi-8a2be2.png") ;
        });

        $("#nhlDrop").on("mouseenter",function() {
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-8a2be2.png");
        });

        $("#slrDrop").on("mouseenter",function() {
            $("#slr-icon").attr("src", "images/dropdowns/slr-8a2be2.png");
        });

        /* Change back to default icon upon cursor exit */
        $("#bunDropdown").on("mouseleave",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
        });

        $("#eplDropdown").on("mouseleave",function() {
            $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
        });

        $("#flcDropdown").on("mouseleave",function() {
            $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
        });

        $("#gaaDropdown").on("mouseleave",function() {
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
        });

        $("#loiDropdown").on("mouseleave",function() {
            $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
        });

        $("#nhlDropdown").on("mouseleave",function() {
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
        });

        $("#slrDropdown").on("mouseleave",function() {
            $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
        });
    };
});

/* Drop-down interactivity for mobile display */
$(document).ready(function() {
    if ($(window).width() < 576) {
        
        $("#bunDropdown").on("click",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-8a2be2.png");
            $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
            $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
            $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
            $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
            /* below resets all dropdowns to white in case any have previously been selected */
            $(".dropdown-toggle").css("color", "#ffffff");
            $("#bunDropdown").css("color", "#8a2be2");
        });

        $("#eplDropdown").on("click",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
            $("#epl-icon").attr("src", "images/dropdowns/epl-8a2be2.png");
            $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
            $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
            $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
            /* below resets all dropdowns to white in case any have previously been selected */
            $(".dropdown-toggle").css("color", "#ffffff");
            $("#eplDropdown").css("color", "#8a2be2");
        });

        $("#flcDropdown").on("click",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
            $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
            $("#flc-icon").attr("src", "images/dropdowns/flc-8a2be2.png");
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
            $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
            $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
            /* below resets all dropdowns to white in case any have previously been selected */
            $(".dropdown-toggle").css("color", "#ffffff");
            $("#flcDropdown").css("color", "#8a2be2");
        });

        $("#gaaDropdown").on("click",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
            $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
            $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-8a2be2.png");
            $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
            $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
            /* below resets all dropdowns to white in case any have previously been selected */
            $(".dropdown-toggle").css("color", "#ffffff");
            $("#gaaDropdown").css("color", "#8a2be2");
        });

        $("#loiDropdown").on("click",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
            $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
            $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
            $("#loi-icon").attr("src", "images/dropdowns/loi-8a2be2.png");
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
            $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
            /* below resets all dropdowns to white in case any have previously been selected */
            $(".dropdown-toggle").css("color", "#ffffff");
            $("#loiDropdown").css("color", "#8a2be2");
        });

        $("#nhlDropdown").on("click",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
            $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
            $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
            $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-8a2be2.png");
            $("#slr-icon").attr("src", "images/dropdowns/slr-ffffff.png");
            /* below resets all dropdowns to white in case any have previously been selected */
            $(".dropdown-toggle").css("color", "#ffffff");
            $("#nhlDropdown").css("color", "#8a2be2");
        });

        $("#slrDropdown").on("click",function() {
            $("#bun-icon").attr("src", "images/dropdowns/bun-ffffff.png");
            $("#epl-icon").attr("src", "images/dropdowns/epl-ffffff.png");
            $("#flc-icon").attr("src", "images/dropdowns/flc-ffffff.png");
            $("#gaa-icon").attr("src", "images/dropdowns/gaa-ffffff.png");
            $("#loi-icon").attr("src", "images/dropdowns/loi-ffffff.png");
            $("#nhl-icon").attr("src", "images/dropdowns/nhl-ffffff.png");
            $("#slr-icon").attr("src", "images/dropdowns/slr-8a2be2.png");
            /* below resets all dropdowns to white in case any have previously been selected */
            $(".dropdown-toggle").css("color", "#ffffff");
            $("#slrDropdown").css("color", "#8a2be2");
        });
    };

    /* Dropdown collapse for mobile - not working yet */
    $("dropdown-item").on("click",function() {
        $("#mobSelector").addClass("collapsed").attr("aria-expanded", "false");
        $("#leagueSelection").removeClass("show");
    });
});

    /* Button highlights to indicate current selection */
$(document).ready(function() {
    $("#food").on("click", function() {
        $(".map-button").css("background-color","#05e680");
        $(this).css("background-color","#8a2be2");
    });

    $("#pubs").on("click", function() {
        $(".map-button").css("background-color","#05e680");
        $(this).css("background-color","#8a2be2");
    });

    $("#coffee").on("click", function() {
        $(".map-button").css("background-color","#05e680");
        $(this).css("background-color","#8a2be2");
    });

    $("#hotels").on("click", function() {
        $(".map-button").css("background-color","05e680");
        $(this).css("background-color","#8a2be2");
    });
})