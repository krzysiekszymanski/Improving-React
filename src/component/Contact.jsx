import React from 'react';
import {
    Link
} from 'react-router';
class Contact extends React.Component {
    render() {
        return <div>
            <h1>Contact</h1>
            <Link to="/"><span>wróc do strony głównej</span></Link>
        </div>
    }
}
export default Contact;