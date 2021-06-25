import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';


import Home from "./pages/Home"

import Register from './pages/Register';

import Login from './pages/Login';

import Profile from './pages/Profile';

import Post from './pages/Post';

import AddPost from './pages/AddPost';

//style
import './styles/global.scss'



const Routes = () => {
    return (
        <Router>
            <Switch>
                <Redirect exact from='/' to='/home' />
                <Route exact path='/home' component={Home} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/profile' component={Profile} />
                <Route path='/post' component={Post} />
                <Route path='/add' component={AddPost} />
            </Switch>
      </Router>
    )
}

export default Routes
