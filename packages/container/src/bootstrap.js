import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

const element = document.querySelector('#root');
const containerRoot = ReactDOM.createRoot(element);

containerRoot.render(<App />);
