import { apiKey } from './../../.env';

export function urlSlugBuilder(userInput) {
  userInput.push(apiKey);
  const urlSlugOptions = ['location=', 'name=', 'query=', 'user_key='];
  const urlSlugOutput = [];
  userInput.map(function(searchOption, i) {
    if (searchOption) {
      urlSlugOutput.push(`${urlSlugOptions[i]}${searchOption}`);
    }
  });
  return urlSlugOutput.join('&');
}
