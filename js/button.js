var btnSearch      = document.querySelector('.js-search'),
    formSearch     = document.querySelector('.search-form'),
    btnSend        = document.querySelector('.btn-search-form'),

    form           = formSearch.querySelector('form'),
    fieldArrival   = formSearch.querySelector('[name=arrival]'),
    fieldDeparture = formSearch.querySelector('[name=departure]'),
    fieldAdult     = formSearch.querySelector('[name=adult]');
    

btnSearch.addEventListener('click', function(event) {

  event.preventDefault();
  formSearch.classList.toggle('open');
  formSearch.classList.remove('error');
  fieldArrival.focus();
});

form.addEventListener('submit', function(event) {

  event.preventDefault();
  if (!fieldArrival.value || !fieldDeparture.value || !fieldAdult.value) {
    formSearch.classList.remove('error');
    btnSearch.offsetWidth = btnSearch.offsetWidth;
    formSearch.classList.add('error');
    console.log('Нужно заполнить все поля!');
  }else {
    console.log('Отправка формы');
  }
});

window.addEventListener('keydown', function(event) {
  if (event.keyCode === 27 && formSearch.classList.contains('open')) {
    formSearch.classList.remove('open');
  };
});
