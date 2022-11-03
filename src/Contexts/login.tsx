import { Buffer } from 'buffer';
import { createContext, useContext } from 'react';
import { Outlet } from 'react-router';
import { generateRandomString, getQueryString } from 'utils';

interface ILogin {
  login: () => void;
  callback: () => Promise<void>;
}

export const LoginContext = createContext({} as ILogin);

export const LoginProvider: React.FC = () => {
  const stateKey = 'spotify_auth_state';
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  const login = () => {
    const state = generateRandomString(16);
    localStorage.setItem(stateKey, state);

    const scope =
      'user-read-private user-read-email user-read-currently-playing user-read-playback-state user-read-recently-played user-modify-playback-state streaming';

    const a = document.createElement('a');
    a.href =
      'https://accounts.spotify.com/authorize?' +
      getQueryString({
        response_type: 'code',
        client_id: client_id,
        scope,
        redirect_uri: redirect_uri,
        state,
      });
    a.click();
  };

  const callback = async (): Promise<void> => {
    const storedState = localStorage.getItem(stateKey);

    const code = window.location.search.split('&')[0].split('=')[1];
    const state = window.location.search.split('&')[1].split('=')[1];

    if (state === null || state !== storedState) {
      console.log({ state, code, storedState });

      console.error('State does not match');
    } else {
      localStorage.removeItem(stateKey);

      try {
        const auth =
          'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64');
        const request = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            Authorization: auth,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: getQueryString({
            grant_type: 'authorization_code',
            code,
            redirect_uri,
          }),
        });

        const response = await request.json();

        if (request.ok && request.status === 200) {
          const access_token = response.access_token,
            refresh_token = response.refresh_token;

          const a = document.createElement('a');
          a.href =
            'http://localhost:3000/feed/' +
            getQueryString({
              access_token: access_token,
              refresh_token: refresh_token,
            });
          a.click();
        } else {
          throw new Error('Invalid Token');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const values: ILogin = {
    login,
    callback,
  };

  return (
    <LoginContext.Provider value={values}>
      <Outlet />
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
