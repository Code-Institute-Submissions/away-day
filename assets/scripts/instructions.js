/* Scripts for instructions interactivity */

/* Displays instructions as a modal for mobile and tablet (bugfix #8) screen widths */
$(document).ready(function() {
    if ($(window).width() < 800) {
        $("#instructions-modal").modal("show");
        console.log("Instructions success");
    }
    $("#modal-close").on("click", function() {
        $("#instructions-modal").modal("hide");
        console.log("Hide instructions");
    });
});