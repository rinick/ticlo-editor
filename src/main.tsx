import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {App} from './App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

// Promise.all([import('react'), import('react-dom'), import('antd'), import('./App')]).then(([React, ReactDOM, Antd, App]) => {
//   ReactDOM.render(
//     <App />,
//     document.getElementById('app')
//   );
// });
