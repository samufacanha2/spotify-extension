import Layout from 'components/Layout';
import { LoginProvider } from 'Contexts/login';
import Login from 'pages/Login';
import Callback from 'pages/Login/Callback';
import Playlist from 'pages/Playlist';
import Playlists from 'pages/Playlists';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/';

//TODO: Fix Context inside route

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginProvider />}>
          <Route path="/login" element={<Login />} />
          <Route path="/login/callback" element={<Callback />} />
        </Route>

        <Route path="/" element={<Layout />}>
          <Route path="feed/*" element={<Home />} />
          <Route path="playlist/:playlistId" element={<Playlist />} />

          <Route path="playlists" element={<Playlists />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
