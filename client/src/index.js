import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { HashRouter as Router} from "react-router-dom";
import { createBrowserHistory } from 'history';
const historyInstance = createBrowserHistory({ forceRefresh: true });

ReactDOM.render(
    <React.StrictMode>
        <Router history={historyInstance}>
            <App />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);
