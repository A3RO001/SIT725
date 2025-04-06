const submitForm = () => {
  let formData = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    email: $('#email').val(),
    password: $('#password').val()
  };

  console.log("Submitting Form:", formData); // 🔍 DEBUG

  $.ajax({
    url: '/api/form',
    type: 'POST',
    data: JSON.stringify(formData),
    contentType: 'application/json',
    success: () => {
      alert("Form submitted successfully!");
      $('#first_name, #last_name, #email, #password').val(""); // reset
      $('.modal').modal('close'); // close modal
    },
    error: (xhr) => {
      console.error("Submission failed:", xhr.responseText); // 🔍 DEBUG
      alert("Error submitting form.");
    }
  });
};

const addCards = (items) => {
  $('#card-section').empty();
  items.forEach(item => {
    const card = `
      <div class="col s4 center-align">
        <div class="card medium">
          <div class="card-image waves-effect waves-block waves-light">
            <img class="activator" src="${item.image}">
          </div>
          <div class="card-content">
            <span class="card-title activator grey-text text-darken-4">${item.title}
              <i class="material-icons right">more_vert</i></span>
            <p><a href="#">${item.link}</a></p>
          </div>
          <div class="card-reveal">
            <span class="card-title grey-text text-darken-4">${item.title}
              <i class="material-icons right">close</i></span>
            <p class="card-text">${item.description}</p>
          </div>
        </div>
      </div>`;
    $('#card-section').append(card);
  });
};

const getProjects = () => {
  $.get('/api/projects', (res) => {
    if (res.statusCode === 200) {
      addCards(res.data);
    }
  });
};

$(document).ready(function () {
  $('.materialboxed').materialbox();
  $('#formSubmit').click(submitForm);
  getProjects();
  $('.modal').modal();
});
