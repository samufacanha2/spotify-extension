export const generateRandomString = function (length: number) {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const getQueryString = function (fields: any) {
  let queryString = '';

  Object.entries(fields).forEach(([key, value]) => {
    queryString += `${key}=${value}&`;
  });

  return encodeURI(queryString);
};
