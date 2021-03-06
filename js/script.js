/*---------------------------------------------------------------------------------------------------------------
#Original Author:   Jeff Bohn :  "SWDV143 Class project week 2"
#Date Created:   3/2/2021    
#Date Last Modified:                   
#Modification log:  Create script.js               
-----------------------------------------------------------------------------------------------------------------*/

"use strict";



$( document ).ready( () => {

    $( "#register" ).click( () => {
        $("span").text("");   // clear any previous error messages
        
        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();


        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;


        // check user entries for validity
   
        let isValid = true;
        if ( email === "" || !emailPattern.test(email) ) {
            isValid = false;
            $("#email").next().text("Please enter email in X@X.X");
        }
         if ( phone === "" || !phonePattern.test(phone) ) {
            isValid = false;
            $("#phone").next().text("Enter in NNN-NNN-NNNN format.");
        }
       
        if ( isValid ) { 
            $("#contact_form").submit();   // code that saves profile info goes here
        }
        
    });
    
    $( "#reset_form" ).click( () => {

     $("#email").val(""); 
     $("#phone").val("");
     $("#name").val("");
     $("#comments").val("");
     document.getElementById("radios").checked = true;

//$("#name").focus();
   });
  // $("#name").focus();

});
