import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

// From public/index.html, we get div id of 
// root and we plop all the HTML code in there
ReactDOM.render(<App />, document.getElementById('root')); 