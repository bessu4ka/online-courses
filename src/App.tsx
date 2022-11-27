import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { HomePage } from 'pages/HomePage';
import { EmptyPage } from 'pages/EmptyPage';
import { Courses } from 'pages/Courses';
import { AboutUs } from 'pages/AboutUs';
import { Events } from 'pages/Events';
import { Blog } from 'pages/Blog';
import { Contacts } from 'pages/Contacts';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='courses' element={<Courses />} />
          <Route path='events' element={<Events />} />
          <Route path='blog' element={<Blog />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
        <Route path='*' element={<EmptyPage />} />
      </Routes>
    </>
  );
};

export { App };
