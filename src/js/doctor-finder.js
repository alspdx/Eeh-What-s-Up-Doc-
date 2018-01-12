import { urlSlugBuilder } from './url-slug-builder.js';
import { apiKey } from './../.env';

export function doctorFinder(userLocation) {
  const slug = urlSlugBuilder(userLocation);

  return new Promise(function(resolve, reject) {
    const request = new XMLHttpRequest();
    const url = ``;
    console.log(url);
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
};
