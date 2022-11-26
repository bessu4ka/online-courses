import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages/HomePage';
import { EmptyPage } from 'pages/EmptyPage';
import { Courses } from 'pages/Courses';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='courses' element={<Courses />} />
        </Route>
        <Route path='*' element={<EmptyPage />} />
      </Routes>
    </>
  );
};

export { App };
