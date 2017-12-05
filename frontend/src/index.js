import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Frame from './frame';
import registerServiceWorker from './registerServiceWorker';

import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(<Frame />, document.getElementById('root'));
registerServiceWorker();
