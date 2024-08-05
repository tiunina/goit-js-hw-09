const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {};

const onFormFieldInput = event => {
  const fieldValue = event.target.value;
  const fieldName = event.target.name;

  formData[fieldName] = fieldValue;
  localStorage.setItem('feedback-form-data', JSON.stringify(formData));
}



const fillForm = () => {
 const formDataFromLS = JSON.parse(localStorage.getItem('feedback-form-data'));

 if (formDataFromLS === null){
  return;
 }
formData = formDataFromLS;
console.log(formDataFromLS);

for (const key in formDataFromLS){
  if (formDataFromLS.hasOwnProperty(key)){
    console.log(formDataFromLS);
    console.dir(feedbackFormEl.elements[key].value)

    feedbackFormEl.elements[key].value = formDataFromLS[key];
  }
}
};


const onFormFieldSubmit = event =>{
event.preventDefault();

const email = feedbackFormEl.elements.email.value.trim();

const message = feedbackFormEl.elements.message.value.trim();
if (!email || !message){
  console.log('Please fill all the fields');
  return;
}

event.target.reset();
localStorage.removeItem('feedback-form-data');
formData = {};
}

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFormFieldSubmit);
fillForm();