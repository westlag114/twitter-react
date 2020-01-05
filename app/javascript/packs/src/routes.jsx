import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Sample from './pages/sample';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/users" component={Sample} />
      </div>
    </BrowserRouter>
  );
};

export default App;
