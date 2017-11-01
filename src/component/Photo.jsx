import React from 'react';
import styled from 'styled-components';

const Zdjecie = styled.img`
        background-color: pink;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position absolute;
        margin: 0 auto;
`;


class Photo extends React.Component {
    render() {
        return (


                <Zdjecie src="../src/images/face.png" alt="face"/>

        )
    }
}
export default Photo;