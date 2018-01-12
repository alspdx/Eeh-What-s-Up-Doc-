import { doctorFinder } from './../src/js/doctor-finder.js';

$(document).ready(function() {

  $('#doctor-finder').submit(function(e) {
    e.preventDefault();
    const userLocation = $('#user-location').val();
    const foundDoctors = doctorFinder(userLocation);

    foundDoctors.then(function(response) {
      const searchResults = JSON.parse(response);
      console.log(searchResults.data);
      searchResults.data.map(function(doctor) {
        $('.output-success').append(`<div>${doctor.profile.first_name}</div>`)
      });
    }, function(error) {
      $('.output-error').text(`There was an error processing your request: ${error.message}`);
    });
  });
});
