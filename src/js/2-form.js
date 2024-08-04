const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {};

const fillForm = () => {
 const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

 if (formDataFromLS === null){
  return;
 }
formData = formDataFromLS;

for (const key in formDataFromLS){
  if (formDataFromLS.hasOwnProperty(key)){
    feedbackFormEl.elements[key].value = formDataFromLS[key];
  }
}
}

fillForm();

const onFormFieldInput = event => {
  const fieldValue = event.target.value;
  const fieldName = event.target.name;

  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
}

const onFormFieldSubmit = event =>{
event.preventDefault();
event.target.reset();
localStorage.removeItem('feedback-form-data');

}

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFormFieldSubmit);