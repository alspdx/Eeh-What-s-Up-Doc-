import { urlSlugBuilder } from './url-slug-builder.js';
import { apiKey } from './../../.env';

export function doctorFinder(userLocation, userDoctorName, userConditions) {
  const slug = urlSlugBuilder(userLocation, userDoctorName, userConditions, apiKey);

  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?${slug}`;
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
}
