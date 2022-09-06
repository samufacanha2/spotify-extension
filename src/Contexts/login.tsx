import { createContext, useContext, useState } from 'react';
import { Outlet, useNavigate } from 'react-router';
import { generateRandomString, getQueryString } from 'utils';

interface ILogin {
  login: () => void;
  callback: () => Promise<void>;
  storedState: string;
}

export const LoginContext = createContext({} as ILogin);

export const LoginProvider: React.FC = () => {
  const [storedState, setStoredState] = useState('');
  const stateKey = 'spotify_auth_state';
  const client_id = process.env.REACT_APP_CLIENT_ID;
  const client_secret = process.env.REACT_APP_CLIENT_SECRET;
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

  const navigate = useNavigate();

  const login = () => {
    const state = generateRandomString(16);
    setStoredState(state);
    console.log(state);

    const scope =
      'user-read-private user-read-email user-read-currently-playing user-read-playback-state user-read-recently-played';

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
    console.log('here');

    const code = window.location.search.split('&')[0].split('=')[1];
    const state = window.location.search.split('&')[1].split('=')[1];

    if (state === null || state !== storedState) {
      console.log({ state, code, storedState });

      console.error('State does not match');
    } else {
      localStorage.removeItem(stateKey);

      try {
        const request = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
            Authorization:
              'Basic ' +
              new Buffer(client_id + ':' + client_secret).toString('base64'),
          },
          body: JSON.stringify({
            code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code',
          }),
        });

        const response = await request.json();

        if (request.ok && response.statusCode === 200) {
          const access_token = response.access_token,
            refresh_token = response.refresh_token;

          navigate(
            'http://localhost:3000/feed/' +
              getQueryString({
                access_token: access_token,
                refresh_token: refresh_token,
              }),
          );
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
    storedState,
  };

  return (
    <LoginContext.Provider value={values}>
      <Outlet />
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
