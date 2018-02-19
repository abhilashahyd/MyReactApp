import React from 'react';// create and manage components
import ReactDOM from 'react-dom';//interact with the DOM
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
