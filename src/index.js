import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons'; // Tachyons is just the same as bootstrap classes as it provides styling in JSX
import App from './App'; // This is the father of all our components
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<App />,document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
