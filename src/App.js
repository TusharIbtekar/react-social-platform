import { Route, Link, Switch, Redirect } from 'react-router-dom'
import Home from './components/home-page.component';
import Login from './components/login-form.component';
import Navbar from './components/navbar.component';
import SignUp from './components/sign-up-form.component';


function App() {
  return (
    <>
    <Navbar />
      <h1>Hello world</h1>
      <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/home" component={Home} />
          <Route path="/" />
      </Switch>
    </>
  );
}

export default App;
