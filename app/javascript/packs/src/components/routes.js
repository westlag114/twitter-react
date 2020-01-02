import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Sample from './sample'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path='/users' component={Sample} />
      </div>
    </BrowserRouter>
  )
}

export default App