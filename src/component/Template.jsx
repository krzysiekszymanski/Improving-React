import React from 'react';
import {
    IndexLink
} from 'react-router';
import styled from 'styled-components';



const Menu = styled.ul`
        background-color: blue;
`;
const Link = styled(IndexLink)`
        background-color:yellow;
        font-size: 40px;
`;

class Template extends React.Component {
    render() {

        const activeStyle = {
            backgroundColor: 'green',
        }
        return (
            <div>
                <h1>App</h1>
                <Menu>
                    <Link activeStyle={activeStyle} to="/">home</Link>
                    <Link activeStyle={activeStyle} to="/contact">contact</Link>
                </Menu>

                {this.props.children}
            </div>
        )
    }
}
export default Template;