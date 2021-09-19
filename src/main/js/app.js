// @flow

import React, { Component } from 'react';
import { render as _render } from 'react-dom';
import Main from './Main.react';

type Props = {};
class App extends Component<Props> {
  componentDidMount() {
  }

  render(): React$MixedElement {
    return (
      <Main />
    );
  }
}

_render(
  <App />,
  document.getElementById('react'),
);
