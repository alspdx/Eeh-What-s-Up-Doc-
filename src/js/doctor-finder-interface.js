import { doctorFinder } from './../src/js/doctor-finder.js';

$(document).ready(function() {

  $('#doctor-finder').submit(function(e) {
    e.preventDefault();
    const userLocation = $('#user-location').val();
    const userDoctorName = encodeURIComponent($('#doctor-name').val());
    const foundDoctors = doctorFinder(userLocation, userDoctorName);

    foundDoctors.then(function(response) {
      $('.output').empty();
      const searchResults = JSON.parse(response);
      console.log(searchResults.data);
      searchResults.data.map(function(doctor) {
        $('.output').append(`<div>${doctor.profile.first_name} ${doctor.profile.last_name}</div>`);
      });
    }, function(error) {
      $('.output').html(`<span>There was an error processing your request: ${error.message}</span>`);
    });
  });
});
