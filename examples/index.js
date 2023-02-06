import md from 'url:../example.md';

document.addEventListener('DOMContentLoaded', function () {
  fetch(md)
  .then(function (response) {
    return response.text();
  })
  .then(function (response) {
    var wrapper = document.querySelector('.markdown');
    var md = window.markdownit();
    var result = md.render(response);
    wrapper.innerHTML = result;
  })
  .catch(function (err) {
    alert(err);
  })
}, false)