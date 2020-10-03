import './css/service.css';
import {createModal, isValid} from "./js/utils";
import {Question} from "./js/question";
import {getAuthForm, logInWithEmailAndPassword} from "./js/auth";

const form = document.getElementById('form');
const modalBtn = document.querySelector('.float-btn');
const input = form.querySelector('#question-input');
const submitBtn = form.querySelector('#submit');


window.addEventListener('load', Question.renderList)
form.addEventListener('submit', submitFormHandler);
modalBtn.addEventListener('click', openModal);
input.addEventListener('input', () => {
    submitBtn.disabled = !isValid(input.value);
});

function submitFormHandler(event) {
    event.preventDefault();

    if (isValid(input.value)) {
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON()
        }

        submitBtn.disabled = true
        Question.create(question)
            .then(() => {
                input.value = '';
                submitBtn.disabled = false
            })
    }
}

function openModal() {
    createModal('Авторизація', getAuthForm())
    document
        .getElementById('auth-form')
        .addEventListener('submit', authFormHandler)

}

function authFormHandler(event) {
    event.preventDefault()

    const loginBtn = event.target.querySelector('.button-auth')
    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    loginBtn.disabled = true
    logInWithEmailAndPassword(email, password)
        .then(Question.fetch)
        .then(renderModalAfterAuth)
        .then(() => loginBtn.disabled = false)
}

function renderModalAfterAuth(content) {
    if (typeof content === 'string') {
        createModal('Помилка!', content)
    } else {
        createModal('Список запитань', Question.listToHTML(content))
    }
}


// const closeBtn = document.querySelector('.cancel-btn')
// closeBtn.addEventListener('click', closeModal);
//
// function closeModal() {
//     const modal = document.querySelector('.modal')
//     modal.style.display = 'none'
// }
