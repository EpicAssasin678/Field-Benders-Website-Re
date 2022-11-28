import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Admin from './components/Admin/Admin';
import PostDetails from './components/PostDetails/PostDetails';
import Navbar from './components/Navbar/Navbar';
import Gallery from './components/Gallery/Gallery';
import Home from './components/Home/Home';
import Chapters from './components/Chapters/Chapters';
import Auth from './components/Auth/Auth';
import CreatorOrTag from './components/CreatorOrTag/CreatorOrTag';

import About from './components/About/About';

import Chapter1 from './components/Chapters/Chapter1/Chapter1';
import Chapter4 from './assets/chapters/Chapter4';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/admin" exact component={Admin}/>

          <Route path="/" exact component={() => <Redirect to="/home" />} />
          <Route path="/home" exact component={Home} />
          
          <Route path="/about" exact component={About} />

          <Route path="/chapters" exact component={Chapters} />
          <Route path="/chapter1" exact component={Chapter1} />
          <Route path="/chapter4" exact component={Chapter4} />
          
          <Route path="/gallery" exact component={() => <Redirect to="/posts"/>} />
          <Route path="/posts" exact component={Gallery} />
          <Route path="/posts/search" exact component={Gallery} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTag} />
          
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/home" />)} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;
