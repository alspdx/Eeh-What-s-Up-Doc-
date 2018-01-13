export function urlSlugBuilder(_userLocation, _userDoctorName, _userConditions, _apiKey) {
  const userSearchInput = [].slice.call(arguments);
  const urlSlugOptions = ['location=', 'name=', 'query=', 'user_key='];
  let urlSlugOutput = [];
  let i = 0;
  userSearchInput.map(function(searchOption) {
    if (searchOption) {
      urlSlugOutput.push(`${urlSlugOptions[i]}${searchOption}`);
    }
    i++;
  });
  return urlSlugOutput.join('&');
}
