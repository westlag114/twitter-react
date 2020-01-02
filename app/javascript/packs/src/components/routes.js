import page from "page";
import React from "react";
import ReactDOM from "react-dom";
import Sample from './sample'

export default function routes() {
  page("/users", () => {
    ReactDOM.render(
      <Sample/>,
      document.getElementById('root')
    );
  });
}