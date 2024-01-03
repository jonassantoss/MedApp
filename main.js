let floatButton = document.querySelector('.option__button')
let form = document.querySelector('.form__patient')
let input_name = document.querySelector('.form__input-text-name')
let input_querie_type = document.querySelector('.form__querie-type')
let input_querie_date = document.querySelector('.form__querie-date')
let input_querie_hour = document.querySelector('.form__querie-hour')

floatButton.addEventListener('click', () => {
  let buttonsSection = document.querySelector('.buttons__section')
  let menu = document.querySelector('.menu')
  let option_1 = document.querySelector('.option_1')
  let option_2 = document.querySelector('.option_2')
  if (menu.style.opacity == 0) {
    menu.style.opacity = 1
    menu.style.visibility = 'visible'
    option_1.style.top = 0
    option_2.style.top = 0
    buttonsSection.style.background = 'rgba(0, 0, 0, 0.755)'
  } else {
    menu.style.opacity = 0
    menu.style.visibility = 'hidden'
    option_1.style.top = '11.1rem'
    option_2.style.top = '5.1rem'
    buttonsSection.style.background = 'transparent'
  }
});

input_name.addEventListener('invalid', function() {
  this.setCustomValidity('Por favor, escreva o nome completo do paciente.')
})

input_querie_type.addEventListener('invalid', function() {
  this.setCustomValidity('Por favor, escolha uma das opções.')
})

input_querie_date.addEventListener('invalid', function () {
  this.setCustomValidity('Por favor, preencha a data da consulta.');
})

input_querie_hour.addEventListener('invalid', function () {
  this.setCustomValidity('Por favor, preencha o horário da consulta.');
})

form.addEventListener('submit', function (event) {
  if (!this.checkValidity()) {
    event.preventDefault();
  }
})

input_name.addEventListener('input', function () {
  let error_message = document.querySelector('.error-message')
  let name = this.value.trim();

  var regex = /^[a-zA-Z\s]+$/;

  if (regex.test(name)) {
    error_message.textContent = '';
    this.style.borderColor = '#ECECEC'
  } else {
    error_message.textContent = 'Nome inválido';
    this.style.borderColor = '#DE0000'
  }
})