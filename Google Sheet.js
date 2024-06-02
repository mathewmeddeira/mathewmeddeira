const scriptURL = 'https://script.google.com/macros/s/AKfycbx3LXZno83w3PBYOcG4MgBG0vcCGZqLpr3HdynUwYqTDxY9TqQRboK5fJBuwGkC-EOt/exec'

const form = document.forms['form-control']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})