import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Routes, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage';
import NotFoundPage from 'containers/NotFoundPage';

const App = () => (
  <>
    <Helmet
      titleTemplate="%s | brian.staruk.net"
      defaultTitle="brian.staruk.net"
      htmlAttributes={{ lang: 'en-US' }}
    >
      <meta name="description" content="Brian Staruk is a web developer from Boston, MA." />
    </Helmet>

    <Routes>
      <Route index element={<HomePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </>
);

export default App;
