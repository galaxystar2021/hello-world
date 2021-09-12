import React, { Component } from 'react';
import { render as _render } from 'react-dom';

class App extends Component {
  componentDidMount() {
  }

  render() { // <3>
    return (
      <div>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</div>
    );
  }
}

_render(
  <App />,
  document.getElementById('react'),
);
// end::render[]
