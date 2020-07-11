import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import Home from './17-router/components/home/home';
// import Contacts from './17-router/components/contacts/contacts';
// import Posts from './17-router/components/posts/posts';
// import AppRouter from './17-router/Lesson';
import Home from './18-router/components/home/home';
import Contacts from './18-router/components/contacts/contacts';
import Posts from './18-router/components/posts/posts';
import Post from './18-router/components/post/post';
import AppRouter from './18-router/Lesson';
import Error from './18-router/components/error/error';

ReactDOM.render(
  <BrowserRouter>
  {/* <App /> */}
    {/* <AppRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/posts' component={Posts} />
      </Switch>
    </AppRouter> */}
    <AppRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contacts' component={Contacts} />
        <Route exact path='/posts' component={Posts} />
        <Route path='/posts/:id' component={Post} />
        <Route path='*' component={Error} />
      </Switch>
    </AppRouter>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
