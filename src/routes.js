import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Buckets from './Components/Buckets/Buckets'
import Moments from './Components/Moments/Moments'
import Contact from './Components/Contact/Contact'
// import Post from './Components/Post/Post';




export default (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route path="/buckets" component={Buckets} />
    <Route path="/moments" component={Moments} />
    <Route path="/contact" component={Contact} />
    {/* <Route path="/post/:id" component={Post} /> */}
  </Switch>
)