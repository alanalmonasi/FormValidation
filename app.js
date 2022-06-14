//Form event listeners
document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('zip').addEventListener('blur', validateZip);
document.getElementById('email').addEventListener('blur', validateEmail);
document.getElementById('phone').addEventListener('blur', validatePhone);

// Validation fuctions
function validateName(){
   const name = document.getElementById('name');
   const ree = /^[a-zA-Z]{2,10}$/;

    if (!ree.test(name.value)) {
     name.classList.add('is-invalid');
   } else {
    name.classList.remove('is-invalid');
   }
}

function validateZip(){
   const zip = document.getElementById('zip');
   const ree = /^[0-9]{5}$/;

   if (!ree.test(zip.value)){
      zip.classList.add('is-invalid');
   } else {
      zip.classList.remove('is-invalid');
   }
}

function validateEmail(){
   const email = document.getElementById('email');
   const ree = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

   if (!ree.test(email.value)){
      email.classList.add('is-invalid');
   } else {
      email.classList.remove('is-invalid');
   }
}

function validatePhone(){
   const phone = document.getElementById('phone');
   const ree = /^[0-9]{10}$/;

   if (!ree.test(phone.value)){
      phone.classList.add('is-invalid');
   } else {
      phone.classList.remove('is-invalid');
   }
}
