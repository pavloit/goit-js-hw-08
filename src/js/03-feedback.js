import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const storedData = localStorage.getItem('feedback-form-state');
const emailInput = document.querySelector('input[name="email"]') 
const messageInput = document.querySelector('textarea[name="message"]')
let feedbackForm = {
    email: "",
    message: "",
}
if (!!storedData) {
    feedbackForm = JSON.parse(storedData)
}

emailInput.value = feedbackForm.email;
messageInput.value = feedbackForm.message;


form.addEventListener('input', throttle(onInput, 500))

function onInput(event) {
    const target = event.target;
    feedbackForm[target.name] = target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(feedbackForm));
}

function clearForm() {
    emailInput.value = "";
    messageInput.value = "";
}
    
form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    clearForm();
    if (!!feedbackForm.email || !!feedbackForm.message) {
        console.log(feedbackForm);
        feedbackForm.email = "";
        feedbackForm.message = "";
    } 
}