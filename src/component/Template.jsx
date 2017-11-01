import React from 'react';
import Photo from './Photo.jsx'
import {
    IndexLink
} from 'react-router';
import styled from 'styled-components';


 const Bar = styled.div`
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
 `;
const Menu = styled.ul`
    background-color: blue;
    margin: 0 5px;
    border-radius: 5px;        
`;
const Link = styled(IndexLink)`
        margin 0 5px;
        font-size: 40px;
`;

const Content = styled.div`
        border-radius: 5px;
        -webkit-box-shadow: 0px 0px 4px 0px rgba(172,172,172,0.5);
        -moz-box-shadow: 0px 0px 4px 0px rgba(172,172,172,0.5);
        box-shadow: 0px 0px 4px 0px rgba(172,172,172,0.5);
        min-height: 200px;
        margin: 0 5px;
        font-size: 40px;
`;

class Template extends React.Component {
    render() {

        const activeStyle = {
            backgroundColor: 'green',
        }
        return (
            <section>
                <Bar>
                    <Photo/>
                </Bar>
                <Menu>
                    <Link activeStyle={activeStyle} to="/">home</Link>
                    <Link activeStyle={activeStyle} to="/contact">contact</Link>
                    <Link activeStyle={activeStyle} to="/gallery">gallery</Link>
                </Menu>
                <Content>

                    {this.props.children}
                </Content>

            </section>
        )
    }
}
export default Template;