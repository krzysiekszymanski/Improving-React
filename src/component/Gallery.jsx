import React from 'react';
import styled from 'styled-components';

const Panels = styled.div`
      min-height:300px;
      overflow: hidden;
      display: flex;
    
 `;
const Panel = styled.div`
      background:#6B0F9C;
      box-shadow:inset 0 0 0 5px rgba(255,255,255,0.1);
      color:white;
      text-align: center;
      align-items:center;
      /* Safari transitionend event.propertyName === flex */
      /* Chrome + FF transitionend event.propertyName === flex-grow */
      transition:
        font-size 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        flex 0.7s cubic-bezier(0.61,-0.19, 0.7,-0.11),
        background 0.2s;
      font-size: 20px;
      background-size:cover;
      background-position:center;
      flex: 1;
      justify-content: center;
      display: flex;
      flex-direction: column;
      > * {
      margin:0;
      width: 100%;
      transition:transform 0.5s;
      flex: 1 0 auto;
      display:flex;
      justify-content: center;
      align-items: center;
    }
    :nth-child(1) { background-image:url(https://source.unsplash.com/gYl-UtwNg_I/1500x1500); }
    :nth-child(2) { background-image:url(https://source.unsplash.com/rFKUFzjPYiQ/1500x1500); }
    :nth-child(3) { background-image:url(https://images.unsplash.com/photo-1465188162913-8fb5709d6d57?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&cs=tinysrgb&w=1500&h=1500&fit=crop&s=967e8a713a4e395260793fc8c802901d); }
    :nth-child(4) { background-image:url(https://source.unsplash.com/ITjiVXcwVng/1500x1500); }
    :nth-child(5) { background-image:url(https://source.unsplash.com/3MNzGlQM7qs/1500x1500); }
    > *:first-child { transform: translateY(-100%); }
 
    > *:last-child { transform: translateY(100%); }

    
    p {
      text-transform: uppercase;
    
      text-shadow:0 0 4px rgba(0, 0, 0, 0.72), 0 0 14px rgba(0, 0, 0, 0.45);
      font-size: 2em;
    }
    
    p:nth-child(2) {
      font-size: 2em;
    }
    
    
 `;



class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            style: '',
        }
    }

    handleClick = (e) => {
        console.log('działą')
        if (this.state.style == '') {
            this.setState({
                style: '5'
            })
        } else {
            this.setState({
                style: '5'
            })
        }

    }


    render() {
        let divStyle = {
            flex: this.state.style
        }

        return(

        <Panels>
            <Panel onClick={this.handleClick} style={divStyle} key={'firstphoto'}>
                <p>Hey</p>
                <p>Let's</p>
                <p>Dance</p>
            </Panel>
            <Panel onClick={this.handleClick} style={divStyle} key={'secondphoto'}>
                <p>Give</p>
                <p>Take</p>
                <p>Receive</p>
            </Panel>
            <Panel>
                <p>Experience</p>
                <p>It</p>
                <p>Today</p>
            </Panel>
            <Panel>
                <p>Give</p>
                <p>All</p>
                <p>You can</p>
            </Panel>
            <Panel>
                <p>Life</p>
                <p>In</p>
                <p>Motion</p>
            </Panel>
        </Panels>
        )
    }
}
export default Gallery;