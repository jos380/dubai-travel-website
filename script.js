
document.getElementById('contactForm').onsubmit=function(e){
e.preventDefault();
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
let msg=document.getElementById('msg').value;
if(!name || !email || !msg){document.getElementById('status').innerText="Please fill all fields";return;}
document.getElementById('status').innerText="Message sent successfully!";
};
