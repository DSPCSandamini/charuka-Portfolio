const roles = [

"Business Analyst",
"Project Management Enthusiast",
"Quality Assurance Enthusiast",
"MIS Undergraduate"

];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect(){

let currentRole = roles[roleIndex];

if(!deleting){

document.getElementById("typing").textContent =
currentRole.substring(0,charIndex++);

if(charIndex > currentRole.length){

deleting = true;

setTimeout(typingEffect,1000);

return;
}

}

else{

document.getElementById("typing").textContent =
currentRole.substring(0,charIndex--);

if(charIndex < 0){

deleting = false;

roleIndex++;

if(roleIndex === roles.length){

roleIndex = 0;
}
}
}

setTimeout(typingEffect,deleting ? 50 : 120);
}

typingEffect();