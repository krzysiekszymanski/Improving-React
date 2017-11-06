import React, { Component } from 'react';
import styled from 'styled-components';


const Navbar = styled.nav`
      min-height:50px;
      overflow: hidden;
      display: flex; 
 `;
const Text = styled.li`
      font-size: 2rem; 
 `;


class Header extends Component {
    onLoginClick(){
        this.props.onLoginClick();
    }

    render() {
        return (
            <Navbar>
                <ul>
                    <Text onClick={this.onLoginClick.bind(this)}>Login</Text>
                </ul>
            </Navbar>
        );
    }
}

export default Header;