import React from 'react';
//router components
import { BrowserRouter, Route, Switch } from "react-router-dom";
//created components
import Layout from './common/Layout';
import Profile from './Profile';
import Landing from './Landing';
import Projects from './Projects';

export default function App()  {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' >
              <Layout content={Profile} />
            </Route>
            <Route exact path='/landing'>
              <Layout content={Landing} />
            </Route>
            <Route exact path='/projects'>
              <Layout content={Projects} />
            </Route>
          </Switch>
        </BrowserRouter>
        
      </>
    )
  
}

