/* EmailJS requests */

/* Copied from the Code Institute resume tutorial */

function sendMail(contactForm) {
    emailjs.send("gmail", "template_vn6mied", {
        "name": contactForm.name.value, 
        "email_address": contactForm.email.value, 
        "feedback": contactForm.feedback.value
    })
    .then(
        /* Test responses, displays alert and hides modals if successful */
        function(response) {
            console.log("SUCCESS", response);
            alert("Goal! Message sent!");
            $(".contact-modal").modal("hide");
        },
        function(error) {
            console.log("FAILED", error);
            alert("Yellow card! Please complete all fields.")
        });
    return false;
}