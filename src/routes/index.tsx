import Layout from 'components/Layout';
import Login from 'pages/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from '../pages/Home/';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
          <Route path="feed/*" element={<Home />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
