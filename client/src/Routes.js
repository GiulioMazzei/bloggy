import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Home from "./pages/Home"

import Register from './pages/Register';

import Login from './pages/Login';

import Post from './pages/Post';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route exact path='/home' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route path='/post' component={Post} />
            </Switch>
      </Router>
    )
}

export default Routes
