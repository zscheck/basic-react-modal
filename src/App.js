import React, { Component } from 'react';
import ConfirmationModal from './components/ConfirmationModal';
import styled from 'styled-components';

class App extends Component {
  state = {
    open: false,
    text: '',
    blownUp: false
  }

  toggleOpenModel = () => {
    this.setState({ open: !this.state.open});
  }

  blownUp = () => {
    console.log('landed');
    this.setState({ text: 'You blew me up!', blownUp: !this.state.blownUp});
    this.toggleOpenModel();
  }

  render() {
    let modalBody = this.state.blownUp ? 'Please fix me!' : '...you want toooooo';
    return (
      <MainContainer>
        {!this.state.blownUp ?
        <a onClick={this.toggleOpenModel}>Blow up</a> :
        <div>
          <h1>{this.state.text}</h1>
          <a onClick={this.toggleOpenModel}>Fix me?</a>
        </div>
        }
        {this.state.open && <ConfirmationModal close={this.toggleOpenModel}  blownUp={this.blownUp} modalBody={modalBody} />} 
      </MainContainer>
    );
  }
}

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  a {
    -webkit-appearance: none;
    padding: 5px 15px;
    background-color: green;
    color: white;
    border: none;
    border-radius: 15px;
    margin: 0 5px;
    font-size: 1.3em;
}
`;

export default App;
