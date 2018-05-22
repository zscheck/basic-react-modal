import React, { Component } from 'react';
import styled from 'styled-components';

class ConfirmationModal extends Component {
    render() {
        const { close, blownUp, modalBody } = this.props;
        return(
            <Overlay onClick={close}>
                <Container onClick={e => e.stopPropagation()}>
                    <Header>
                        <h3>Are you sure?</h3>
                    </Header>
                    <Body>
                        <p>
                            {modalBody}
                        </p>
                    </Body>
                    <Footer>
                        <button onClick={blownUp}>Do It!</button>
                        <button onClick={close}>Nevermind</button>
                    </Footer>
                </Container>
            </Overlay>
        );
    }
}

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const Container = styled.div`
    background-color: white;
    padding: 20px;
    max-width: 500px;
    width: 60%;
    min-height: 300px;
    display: flex;
    flex-direction: column;
`;
const Header = styled.div``;
const Body = styled.div`
    display: flex;
    flex: 1;
    padding: 20px;
`;
const Footer = styled.div`
    display: flex;
    justify-content: flex-end;

    button {
        -webkit-appearance: none;
        padding: 5px 15px;
        background-color: #dd0000;
        color: white;
        border: none;
        margin: 0 5px;
        font-size: 1.3em;
    }
`;

export default ConfirmationModal;