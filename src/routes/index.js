import { Route }   from 'react-router';
import React       from 'react';
import CoreLayout  from 'layouts/CoreLayout';
import HomeView    from 'views/HomeView';
import LoginView   from 'views/LoginView';

export default (
  <Route component={CoreLayout}>
    <Route name='home' path='/' component={HomeView} />
    <Route name='login' path='/login' component={LoginView} />
  </Route>
);
