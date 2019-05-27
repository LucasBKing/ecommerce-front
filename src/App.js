import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/authentication/login.component';
import Dashboard from './components/dashboard/dashborad.component';
import SignUp from './components/authentication/signup.component';
import Provider from './components/provider/provider.component';
import Admin from './components/admin/dashboard.component';
import { Route, Switch} from 'react-router-dom'; 

function App() {
  return (
      <div className="fontAllPages">
        
        <Switch>
          <Route exact path={`/`} component= {Login}/>
          <Route path='/dashboard' component={ Dashboard } />
          <Route path='/signup' component = { SignUp } />
          <Route path='/provider' component = { Provider } />
          <Route path='/admin' component = { Admin } />
        </Switch>
      </div>

    
  );
}

export default App;
