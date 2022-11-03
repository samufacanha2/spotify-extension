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

export const parseMilliseconds = function (milliseconds: number) {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = ((milliseconds % 60000) / 1000).toFixed(0);

  return `${minutes}:${Number(seconds) < 10 ? '0' : ''}${seconds}`;
};
