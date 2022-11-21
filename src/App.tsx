import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages/HomePage';
import { EmptyPage } from 'pages/EmptyPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route path='*' element={<EmptyPage />} />
      </Routes>
    </>
  );
};

export { App };
