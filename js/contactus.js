(function ($) {
    "use strict"; // Start of use strict
    $("#contactForm").on("submit", function (event) {
        event.preventDefault();
        submitForm();
    });


    function submitForm(){
        // Initiate Variables With Form Content
        var name = $("#fullname").val();
        var email = $("#email").val();
        var subject = name + " has sent you a message";
        var message = $("#message").val();
        var toEmails = ["behzad765@gmail.com", "zohrehganji@gmail.com"]
        var obj = {name, email, toEmails, subject, message}
        

        // obj = Object.parse(obj);
        $.ajax({
            url : 'https://tri57088c2.execute-api.us-east-2.amazonaws.com/Prod/send',
            method : 'POST',
            data :  JSON.stringify(obj),
            Accept:' */*',
            success : function(data) {  
                alert("email successfully sent") 
            },
            error : function(request,error)
            {
                console.log(error.response);
            }
        });
    }

}(jQuery)); // End of use strict