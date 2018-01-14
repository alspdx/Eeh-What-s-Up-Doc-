import { doctorFinder } from './../src/js/doctor-finder.js';


$(document).ready(function() {
  $('#doctor-finder').submit(function(e) {
    e.preventDefault();
    const location = $('#user-location').val();
    const doctorName = encodeURIComponent($('#doctor-name').val());
    const userConditions = encodeURIComponent($('#user-conditions').val());
    const userInput = [location, doctorName, userConditions];
    const foundDoctors = doctorFinder(userInput);

    foundDoctors.then(function(response) {
      const searchResults = JSON.parse(response);
      $('.output').empty();

      if (searchResults.data.length > 0) {
        searchResults.data.map(function(doctor) {
          const doctorWebsite = (doctor.practices[0].website ? `<span><a href="${doctor.practices[0].website}">${doctor.practices[0].website}</a></span>` : ``);

          $('.output').append(`<div class="doctor-container">
                                <div class="doctor-name">${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</div>
                                <div class="doctor-address">
                                  <span>${doctor.practices[0].name}</span>
                                  <span>${doctor.practices[0].visit_address.street}</span>
                                  <span>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</span>
                                  <span>${doctor.practices[0].phones[0].number}</span>
                                </div>
                                ${doctorWebsite}
                                <span>This practice is ${(doctor.practices[0].accepts_new_patients ? `` : `not `)}accepting new patients</span>
                              </div>`);
        });
      } else {
        $('.output').empty().append(`<span>Your search sucked and did not return any results. Do better next time.</span>`);
      }
    }, function(error) {
      $('.output').html(`<span>There was an error processing your request: ${error.message}</span>`);
    });
  });
});
