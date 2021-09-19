// @flow

import { AppBar } from '@material-ui/core';
import React, { useState } from 'react';

export default function Main(): React$Element<"div"> {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
