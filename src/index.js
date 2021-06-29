import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import BlogPosts from './components/index';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/blogposts" exact component={BlogPosts}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);