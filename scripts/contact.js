/* Copied from the Code Institute resume tutorial */
function sendMail(contactForm) {
    emailjs.send("gmail", "template_vn6mied", {
        "name": contactForm.name.value, 
        "email_address": contactForm.email.value, 
        "feedback": contactForm.feedback.value
    })
    .then(
        /* below console.logs are to test item */
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED");
        });
    return false;
}