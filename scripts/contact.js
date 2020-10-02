/* Copied from the Code Institute resume tutorial */
function sendMail(contactForm) {
    emailjs.send("gmail", "template_bd40mjq", {
        "name": contactForm.name.value, 
        "emailaddress": contactForm.emailaddress.value, 
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