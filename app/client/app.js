const form = document.getElementById('contact-form');
let user = document.getElementById('user');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');
let number = document.getElementById('number');
const formEvent = form.addEventListener('submit', (e)=> {
  e.preventDefault();
    
  let formData = {
    user: user.value,
    email: email.value,
    subject: subject.value,
    number: number.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open('POST', '/'); //if you host the server differently, pass the url here /
  xhr.setRequestHeader('content-type', 'application/json');
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == 'success'){
      alert('Email sent successfully');
      user.value = '';
      email.value = '';
      subject.value = '';
      number.value = '';
      message.value = '';
    } else {
      alert('Something went wrong')
    }
  }

  xhr.send(JSON.stringify(formData));
})