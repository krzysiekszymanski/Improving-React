import React from 'react';
import Header from '../auth/Header.jsx';
import Home from '../auth/Home.jsx';
import Auth0Lock from 'auth0-lock';

class Login extends React.Component {
    static defaultProps = {
        clientId: 'sziXgWYwZGGWkNfhHCBxj5uuxQ859QLL',
        domain:'krzysiek.auth0.com'
    }

    componentWillMount(){
        this.lock = new Auth0Lock(this.props.clientId, this.props.domain);

        // On authentication
        this.lock.on('authenticated', (authResult) => {
            this.lock.getProfile(authResult.idToken, (error, profile) => {
                if(error){
                    console.log(error);
                    return;
                }

                console.log(profile);
            });
        });
    }

    showLock(){
        this.lock.show();
    }

    render() {
        return <div>
            < Header onLoginClick={this.showLock.bind(this)} />
            < Home />
         
        </div>
    }
}
export default Login;