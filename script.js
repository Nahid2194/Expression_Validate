document.querySelector(".user").addEventListener('click',user);
document.querySelector(".email").addEventListener('click',email);
document.querySelector(".contact").addEventListener('click',contact);
document.querySelector(".postal").addEventListener('click',postal);

function email(e){
 var verification = prompt("Enter Your Email For Verfication");
 re = /^([a-zA-Z0-9]\.?\-?)+[^(\.\-)]@([a-zA-Z0-9]\.?)+[^(\.\-)]$/
 reTest(verification,re,"Email");
}
function user(e){
    var verification = prompt("Enter Your user Name For Verfication");
    re = /^([a-zA-Z][0-9])+/;
    reTest(verification,re,"User Name");
}
function contact(e){
var verification = prompt("Enter Your Contact Number For Verfication");
var re = /^(\+88)?01[0-9]{9}$/
reTest(verification,re,"Contact Number");
}
function postal(e){
var verification = prompt("Enter Your Postal Code For Verfication");
var re = /^([0-9]){4}$/;
reTest(verification,re,"Postal Code");
}

function reTest(verification,re,string){
    if(re.test(verification)){
        alert(`Yes The ${string} is valid`);
    }else{
        alert(`The ${string} is invalid`);
    }
}