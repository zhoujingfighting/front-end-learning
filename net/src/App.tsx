import React from 'react';
import { HashRouter,Route,Switch} from 'react-router-dom'
import HeaderComponent from './component/header'
import {Redirect} from 'react-router'
function App():JSX.Element {
  return (
    <HashRouter>
      <Switch>
        <Route path='/' exact component={HeaderComponent} >
          <Redirect from='/' to='/workspaces' />
        </Route>
        <Route path='/workspaces' component={HeaderComponent} ></Route>
        <Route path='/settings' component={HeaderComponent} ></Route>
        <Route path='/docs' ></Route>
        <Route path='/community' ></Route>
        </Switch>
    </HashRouter>
  );
}
export default App;
