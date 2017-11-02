import React from 'react';
import ReactDOM from 'react-dom';
import Main from '../src/component/Main.jsx';
import Contact from '../src/component/Contact.jsx';
import Gallery from '../src/component/Gallery.jsx';
import Login from '../src/component/Login.jsx';
import Template from '../src/component/Template.jsx';
import NotFound from '../src/component/NotFound.jsx';
import { Router,
    Route,
    IndexRoute,
    hashHistory
} from 'react-router';
import baseStyles from '../src/component/Index'



document.addEventListener('DOMContentLoaded', function(){
    baseStyles()
    class App extends React.Component {
        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Template}>
                        <IndexRoute component={Main} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/gallery' component={Gallery} />
                        <Route path='/login' component={Login} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});