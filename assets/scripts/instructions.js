/* Scripts for instructions interactivity */

/* jshint esversion: 6 */
/* Comment above tells JSHint what version of JS is being used */

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