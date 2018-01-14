import { urlSlugBuilder } from './url-slug-builder.js';

export function doctorFinder(userInput) {
  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    const url = `https://api.betterdoctor.com/2016-03-01/doctors?${urlSlugBuilder(userInput)}`;
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
