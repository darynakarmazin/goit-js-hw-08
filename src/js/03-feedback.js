import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
let feedbackForm = {};

form.addEventListener('input', throttle(saveMessage, 1000));
form.addEventListener('submit', onFormSubmit);

populateFeedbackForm();

function saveMessage(evt) {
  evt.preventDefault();
  feedbackForm[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackForm));
}

function onFormSubmit(evt) {
  evt.preventDefault();
  //   console.log('go!');
  evt.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populateFeedbackForm() {
  const savedFeedbackForm = localStorage.getItem(STORAGE_KEY);
  if (savedFeedbackForm) {
    feedbackForm = JSON.parse(savedFeedbackForm);
    let { email, message } = form.elements;
    if (feedbackForm.email) {
      email.value = feedbackForm.email;
    }
    if (feedbackForm.message) {
      message.value = feedbackForm.message;
    }
    // console.log(feedbackForm);
  }
}
