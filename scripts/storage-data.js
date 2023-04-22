window.onload = function () {
  // Check for LocalStorage support.
  if (localStorage) {
    // Add an event listener for form inputs
    document.getElementById('contact-form').addEventListener('input', () => {
      // Get the value of the form types
      const formName = document.getElementById('name').value;
      const formEmail = document.getElementById('email').value;
      const msg = document.getElementById('msg').value;

      const data = {
        storedName: formName,
        storedEmail: formEmail,
        storedMsg: msg,
      };
      // Save the object in localStorage.
      localStorage.setItem('formData', JSON.stringify(data));
    });
  }
};

window.onload = function () {
  // Retrieve the form data
  const parseData = JSON.parse(localStorage.getItem('formData'));
  if (parseData !== 'undefined' || parseData !== 'null') {
    document.getElementById('name').value = parseData.storedName;
    document.getElementById('email').value = parseData.storedEmail;
    document.getElementById('msg').value = parseData.storedEmail;
  }
}

// There's a bug in this code, it cannot retrieve data from the storage.