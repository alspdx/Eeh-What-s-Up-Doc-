import { doctorFinder } from './../src/js/doctor-finder.js';


$(document).ready(function() {

  $('#doctor-finder').submit(function(e) {
    e.preventDefault();
    const userLocation = $('#user-location').val();
    const foundDoctors = doctorFinder(userLocation);

    foundDoctors.then(function(response) {
      console.log(response);
    }, function(error) {
      Error(`There was an error processing your request: ${error.message}`);
    });
  });

});
