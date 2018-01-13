import { doctorFinder } from './../src/js/doctor-finder.js';

$(document).ready(function() {
  $('#doctor-finder').submit(function(e) {
    e.preventDefault();
    const userLocation = $('#user-location').val();
    const userDoctorName = encodeURIComponent($('#doctor-name').val());
    const userConditions = encodeURIComponent($('#user-conditions').val());
    const foundDoctors = doctorFinder(userLocation, userDoctorName, userConditions);

    foundDoctors.then(function(response) {
      const searchResults = JSON.parse(response);
      console.log(searchResults);

      if (searchResults.data.length > 0) {
        $('.output').empty().append(`<h3>They went that-a-way!</h3>`);
        searchResults.data.map(function(doctor) {
          const doctorNameOutputHTML = `<div class="doctor-name">${doctor.profile.first_name} ${doctor.profile.last_name}, ${doctor.profile.title}</div>`;
          const acceptsNewPatients = `<span>This doctor is ${(doctor.practices[0].accepts_new_patients ? `` : `not `)}accepting new patients`;
          const doctorWebsite = (doctor.practices[0].website ? `<span>${doctor.practices[0].website}</span>` : ``);
          const practiceAddressesHTML =`<div class="doctor-address">
          <span>${doctor.practices[0].name}</span>
          <span>${doctor.practices[0].visit_address.street}</span>
          <span>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</span>
          <span>${doctor.practices[0].phones[0].number}</span>
          </div>`;

          $('.output').append(`<div class="doctor-container">
          ${doctorNameOutputHTML}
          ${practiceAddressesHTML}
          ${doctorWebsite}
          ${acceptsNewPatients}
          </div>`);
        });
      } else {
        $('.output').empty().append(`<span>Your search sucked and did not return any results. Do better next time.</span>`)
      };
    }, function(error) {
      $('.output').html(`<span>There was an error processing your request: ${error.message}</span>`);
    });
  });
});
