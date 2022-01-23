import React from 'react';
import { Routes, Route } from 'react-router';
import PageLayout from '../page-layout/page-layout';
import { AppRoute } from '../../const';
import Home from '../../routes/home/home';
import UnderConstruction from '../../routes/under-construction/under-construction';
import NotFound from '../../routes/not-found/not-found';

function App() {

  return (
    <Routes>
      <Route path={AppRoute.ROOT} element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path={AppRoute.DEPOSITS} element={<UnderConstruction />} />
        <Route path={AppRoute.ASSURANCE} element={<UnderConstruction />} />
        <Route path={AppRoute.ONLINE_SERVICES} element={<UnderConstruction />} />
        <Route path={AppRoute.PASSWORD} element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
