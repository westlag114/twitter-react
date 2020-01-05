import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UsersIndex from './pages/Users';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/users" component={UsersIndex} />
      </div>
    </BrowserRouter>
  );
};

export default App;
