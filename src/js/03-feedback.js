import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');
const storedData = localStorage.getItem('feedback-form-state');
const feedbackForm = JSON.parse(storedData) ?? {
    email: "",
    message: "",
};

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
    feedbackForm.email = "";
    feedbackForm.message = "";
}
    
form.addEventListener('submit', onSubmit)

function onSubmit(event) {
    event.preventDefault();
    if (!feedbackForm.email || !feedbackForm.message) {
        return alert("Обидва поля мають бути заповнені 😝")    
    }
    console.log(feedbackForm);
    localStorage.removeItem('feedback-form-state');
    clearForm();   
}