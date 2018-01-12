export function urlSlugBuilder(_userLocation, _userDoctorName, _apiKey) {
  const userSearchInput = [].slice.call(arguments);
  const urlSlugOptions = ['location=', 'name=', 'user_key='];
  let urlSlugOutput = [];
  let i = 0;
  userSearchInput.map(function(searchOption) {
    if (searchOption) {
      urlSlugOutput.push(`${urlSlugOptions[i]}${searchOption}`);
    }
    i++;
  });
  return urlSlugOutput.join('&');
// name=paul&query=pain&location=or-portland&limit=20&user_key=26901b76d1759c630d685f9d0cc18c4a
}
