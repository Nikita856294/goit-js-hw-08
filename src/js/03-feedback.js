const formRef = document.querySelector('.feedback-form');
const FEEDBACK_FORM_STATE = 'feedback-form-state';
const data = {
  email: '',
  message: '',
};
window.addEventListener('DOMContentLoaded', initForm);
formRef.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(formRef);
  formData.forEach((value, name) => (formData[name] = value));
  console.log(formData);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM_STATE);
});

formRef.addEventListener('input', e => {
  data[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM_STATE, JSON.stringify(data));
});

function initForm() {
  let dataLocalStorage = localStorage.getItem(FEEDBACK_FORM_STATE);
  if (dataLocalStorage) {
    dataLocalStorage = JSON.parse(dataLocalStorage);
    data.email = dataLocalStorage.email;
    data.message = dataLocalStorage.message;
    formRef.elements.email.value = dataLocalStorage.email;
    formRef.elements.message.value = dataLocalStorage.message;
  }
}