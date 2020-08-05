import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, FormControl, InputLabel, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import Message from './components/Message/Message';
import FlipMove from 'react-flip-move';

import styled from 'styled-components';
import { Title, FormControlWrapper, StyledFormControl, StyledInput } from './styled-components';

import firebase from 'firebase';
import db from './firebase/config';


function App() {

  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([])

  const sendMessage = (e) => {
    e.preventDefault()

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  const check = (e) => {
    if(e.key == 'Enter' && input) {
      sendMessage(e)
    }
  }

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs
        .map(doc => ({id: doc.id, message: doc.data()}) 
        ))
    })
  }, [])

  useEffect(() => {
    //  
  }, [])

  return (
    <div className="app">
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100' />
      <Title>Messenger GO BRRR 🔥 </Title>
      <h2>Hi {username || 'Unknown user'}</h2>
      <FormControlWrapper>
        <StyledFormControl onKeyPress={e => check(e)}>
          <StyledInput placeholder='Write a message...' value={input} onChange={e => setInput(e.target.value)}/>
          <IconButton 
              disabled={!input}
              onClick={e => sendMessage(e)}
              variant="contained" 
              color="primary">
            <SendIcon />
          </IconButton>
        </StyledFormControl>
      </FormControlWrapper>
        <FlipMove>
          {
            messages.map(({message, id, timestamp}) => <Message key={id} message={message} user={username} timestamp={timestamp} />)
          }
        </FlipMove>
    </div>
  );
}

export default App;
