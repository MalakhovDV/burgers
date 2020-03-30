
const myForm = document.querySelector('#myForm');
const send = document.querySelector('#send');
 
send.addEventListener('click', event => {
    event.preventDefault();

    if (validateForm(myForm)) {
        /* const data = {
            name: myForm.elements.name.value,
            phone: myForm.elements.phone.value,
            comment: myForm.elements.comment.value,
            to: myForm.elements.to.value  
        } */
        const data = new FormData();
        data.append('name', myForm.elements.name.value);
        data.append('phone', myForm.elements.phone.value);
        data.append('comment', myForm.elements.comment.value);
        data.append('to', myForm.elements.to.value);
    

     
        const xhr = new XMLHttpRequest();
        xhr.responseType='json';
        xhr.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
        xhr.send(data);
        xhr.addEventListener('load', () => {
            if (xhr.response.status) {
                renderPopup(xhr.response.message);
            }else{
                renderPopup(xhr.response.message);
            }
        } );
    }
});

function validateForm(form) {
    let valid = true;

    if (!validateField(form.elements.name)) {
        valid = false;
    }

    if (!validateField(form.elements.phone)) {
        valid = false;
    }

    if (!validateField(form.elements.comment)) {
        valid = false;
    }

    if (!validateField(form.elements.to)) {
        valid = false;
    }
    return valid;
}



function validateField(field) {
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
}


function renderPopup(text){
    const popup = document.querySelector('.popup');

    popup.classList.add('popup--active');

    popup.querySelector('.popup__text').textContent = text;

    popup.querySelector('.popup__close').addEventListener('click' , e=>{
      e.preventDefault();

      popup.classList.remove('popup--active');
    })
}