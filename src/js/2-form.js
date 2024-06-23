const formData = { 
    email: "", 
    message: "" 
}
const form = document.querySelector('.feedback-form');
const btnSubmit = document.querySelector('.feedback-form button');
const savedData = localStorage.getItem('feedback-form-state');

form.addEventListener('input', (event) => {
    if (event.target.name === 'email' || event.target.name === 'message') {
        formData[event.target.name] = event.target.value.trim();
        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }
});

function showSavedData() {
    if(savedData) {
        const parsedData = JSON.parse(savedData);
        Object.keys(formData).forEach(key => {
            formData[key] = parsedData[key] || '';
            form.elements[key].value = formData[key];
        });
    }
}
showSavedData();

function clearFormData() {
    Object.keys(formData).forEach(key => {
        formData[key] = '';
        form.elements[key].value = '';
    });
}

btnSubmit.addEventListener('click', (ev) =>{
    ev.preventDefault()
    if(formData.email && formData.message) {
        console.log(formData);
        clearFormData()
        localStorage.removeItem('feedback-form-state');
    } else {
        alert('Fill please all fields')
    }
})