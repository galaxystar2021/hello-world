import React, { Component } from 'react';
import { render as _render } from 'react-dom';
import Main from './Main';

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <Main />
    );
  }
}

_render(
  <App />,
  document.getElementById('react'),
);
