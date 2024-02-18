let form = document.querySelector('#form');
let textarea = document.querySelector('#textarea');
let button = document.querySelector('#button');
let loadingMessage = document.querySelector('#loading');
let errorMessage = document.querySelector('#error');
let successMessage = document.querySelector('#success');

async function handleFormSubmit(e) {
    e.preventDefault();
    disable(textarea);
    disable(button);
    show(loadingMessage);
    hide(errorMessage);
    try {
        await submitForm(textarea.value);
        show(successMessage);
        hide(form);
    } catch (err) {
        show(errorMessage);
        errorMessage.textContent = err.message;
    } finally {
        hide(loadingMessage);
        enable(textarea);
        enable(button);
    }
}


function handleTextareaChange() {
    if (textarea.value.length === 0) {
        disable(button);
    } else {
        enable(button);
    }
}

function hide(el) {
    el.style.display = 'none';
}

function show(el) {
    el.style.display = '';
}

function enable(el) {
    el.disabled = false;
}

function disable(el) {
    el.disabled = true;
}

function submitForm(answer) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(answer.toLowerCase() === 'istanbul') {
                resolve();
            } else {
                reject(new Error('A wrong answer'));
            }
        }, 1500);
    });
}

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;