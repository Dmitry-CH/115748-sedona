var search = document.querySelector('.js-search'),
    form   = document.querySelector('.search-form');

search.addEventListener('click', function(event) {
  event.preventDefault();
  form.classList.toggle('open');
});
