document.getElementById("submit").addEventListener("click",function(event){
    event.preventDefault();
    
    checkData();

});

let email = document.getElementById("email");
let pass1 = document.getElementById("pass1");
let pass2 = document.getElementById("pass2");
let firstname = document.getElementById("firstname");
let lastname = document.getElementById("lastname");




function checkData(){
   
    let emailvalue = email.value.trim();
    let pass1value = pass1.value.trim();
    let pass2value = pass2.value.trim();
    let firstnamevalue = firstname.value.trim();
    let lastnamevalue = lastname.value.trim();

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;



    if(emailvalue.match(validRegex)){
        setSuccess();
    }else{
        setError("Invalid email address");
    }



    if(validatePassword(pass1value)){
        setSuccesspass1();
    }else{
        setErrorpass1("Password must contain one uppercase-letter, lowercase-letter, one special character, one digit and must be 8 characters long");
    }



    if(pass2value != pass1value || pass2value == ""){
        setErrorpass2("Invalid password");
    }else{
        setSuccesspass2();
    }



    if(isfirtname(firstnamevalue)){
        setSccessfirstname();
    }else{
        setErrorFirstname("Invalid name");
    }




    if(islastname(lastnamevalue)){
        setSccesslastname();
    }else{
        setErrorlastname("Invalid name");
    }



    let radios = document.querySelectorAll('input[name="radio"]');
    let isSelected = false;

    radios.forEach(function(radio){
        if(radio.checked){
            isSelected = true;
        }
    });

    if(isSelected){
        setSuccessRadio();
    }else{
        setErrorRadio("You must select a Gender");
    }


    let agreementCheck = document.getElementById("check1");
    if(agreementCheck.checked){
        setSuccessCheck();
    }else{
        setErrorCheck("You must tick this checkbox");
    }

    let countries = document.getElementById("select1");
    if(countries.value == ""){
        setErrorCountries("You must select a country");
    }else{
        setSuccessCountries();
    }


}


function validatePassword(pass1value) {

    return /[A-Z]/.test(pass1value) &&
           /[a-z]/.test(pass1value) &&
           /[0-9]/.test(pass1value) &&
           /[^A-Za-z0-9]/.test(pass1value) &&
           pass1value.length > 8;

}

function isfirtname(firstnamevalue){
    let x = /^[A-Za-z ]+$/;
    return x.test(firstnamevalue);
}

function islastname(lastnamevalue){
    let x = /^[A-Za-z ]+$/;
    return x.test(lastnamevalue);
}



function setError(msg){
    let span = document.getElementById("email_span");
    span.innerHTML=msg;
    span.className="email_span";
}

function setSuccess(){
    let span = document.getElementById("email_span");
    span.className="email_span_success";
}




function setErrorpass1(msg){
    let span = document.getElementById("pass1_span");
    span.innerHTML=msg;
    span.className="pass1_span";
}

function setSuccesspass1(){
    let span = document.getElementById("pass1_span");
    span.className="pass1_span_success";
}




function setErrorpass2(msg){
    let span = document.getElementById("pass2_span");
    span.innerHTML=msg;
    span.className="pass2_span";
}

function setSuccesspass2(){
    let span = document.getElementById("pass2_span");
    span.className="pass2_span_success";
}




function setErrorFirstname(msg){
    let span = document.getElementById("firstname_span");
    span.innerHTML=msg;
    span.className="firstname_span";
}

function setSccessfirstname(){
    let span = document.getElementById("firstname_span");
    span.className="firstname_span_success";
}




function setErrorlastname(msg){
    let span = document.getElementById("lastname_span");
    span.innerHTML = msg;
    span.className="lastname_span";
}

function setSccesslastname(){
    let span = document.getElementById("lastname_span");
    span.className="lastname_span_success";
}

function setErrorRadio(msg){
    let span = document.getElementById("radio_span");
    span.innerHTML = msg;
    span.className="radio_span";
}

function setSuccessRadio(){
    let span = document.getElementById("radio_span");
    span.className="radio_span_success";
}

function setErrorCheck(msg){
    let span = document.getElementById("check_span");
    span.innerHTML = msg;
    span.className="check_span";
}

function setSuccessCheck(){
    let span = document.getElementById("check_span");
    span.className="check_span_success";
}

function setErrorCountries(msg){
    let span = document.getElementById("select_span");
    span.innerHTML = msg;
    span.className="select_span";
}

function setSuccessCountries(){
    let span = document.getElementById("select_span");
    span.className="select_span_success";
}





