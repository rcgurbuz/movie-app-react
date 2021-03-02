import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../src/components/elements/Header/Header';
import Home from '../src/components/Home/Home';
import Movie from '../src/components/Movie/Movie';
import NotFound from '../src/components/elements/NotFound/NotFound';

const App = () => (
  <BrowserRouter>
    <React.Fragment>
      <Header />
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/:movieId' component={Movie} exact />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default App;
