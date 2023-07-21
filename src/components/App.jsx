import { lazy } from 'react';
// import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
// import { useAuth } from 'hooks/useAuth';
// import { refreshUser } from 'redux/auth/operations';

import AppNav from '../components/AppNav/AppNav';
const HomePage = lazy(() => import('../pages/Home/Home.jsx'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts.jsx'));
const JoinUsPage = lazy(() => import('../pages/JoinUs/JoinUs.jsx'));
const AboutUsPage = lazy(() => import('../pages/AboutUs/AboutUs.jsx'));

export const App = () => {
  return (
    <div>
      <AppNav />
      <Suspense fallback={null}>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/join_us" element={<JoinUsPage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
