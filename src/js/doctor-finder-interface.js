import { doctorFinder } from './../src/js/doctor-finder.js';

$(document).ready(function() {

  $('#doctor-finder').submit(function(e) {
    e.preventDefault();
    const userLocation = $('#user-location').val();
    const userDoctorName = encodeURIComponent($('#doctor-name').val());
    const userConditions = encodeURIComponent($('#user-conditions').val());
    const foundDoctors = doctorFinder(userLocation, userDoctorName, userConditions);

    foundDoctors.then(function(response) {
      $('.output').empty();
      const searchResults = JSON.parse(response);

      searchResults.data.map(function(doctor) {
        const doctorNameOutputHTML = `<div>${doctor.profile.first_name} ${doctor.profile.last_name}</div>`;
        const practiceAddressesHTML = [];
        let doctorWebsite = '';

        practiceAddressesHTML.push(`<div>
                                      <span>${doctor.practices[0].name}</span>
                                      <span>${doctor.practices[0].visit_address.street}</span>
                                      <span>${doctor.practices[0].visit_address.city}, ${doctor.practices[0].visit_address.state} ${doctor.practices[0].visit_address.zip}</span>
                                    </div>`
        );

        if (doctor.practices[0].website) {
          doctorWebsite = `<span>${doctor.practices[0].website}</span>`;
        }

        $('.output').append(`<div>${doctorNameOutputHTML}${practiceAddressesHTML.join('')}${doctorWebsite}</div>`);
      });
    }, function(error) {
      $('.output').html(`<span>There was an error processing your request: ${error.message}</span>`);
    });
  });
});
