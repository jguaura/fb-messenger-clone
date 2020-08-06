import React, { useState, useEffect } from 'react';

import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

import Message from './components/Message/Message';
import FlipMove from 'react-flip-move';

// Styled Components
import { Root, MainWrapper, ThemeIcon, Title, Subtitle, FormControlWrapper, StyledFormControl, StyledInput, StyledIconButton, Img, MessagesWrapper, Header } from './styled-components/components/styled-components';
import { ThemeProvider } from 'styled-components';
import lightTheme from './styled-components/themes/ligth';
import darkTheme from './styled-components/themes/dark';

import firebase from 'firebase';
import db from './firebase/config';

function App() {
  
  const getMode = () => {
    const mode = localStorage.getItem('dark')
    return JSON.parse(mode) || false
  }
  
  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([]);
  const [darkMode, setDarkMode] = useState(getMode())

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
    localStorage.setItem('dark', darkMode)
  }, [darkMode])

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
    setUsername(prompt('What is your name?') || 'Unknown user')
  }, [])

  return (
    <ThemeProvider theme={!darkMode ? lightTheme : darkTheme} >
      <Root>
        <MainWrapper>
          <Header>
            <IconButton onClick={() => darkMode ? setDarkMode(false) : setDarkMode(true)}>
              <ThemeIcon src={!darkMode ? require('./assets/dom.svg') : require('./assets/luna.svg')} alt="theme icon"/>
            </IconButton>
            <Title>Messenger GO BRRR 🔥 </Title>
            <Subtitle>Hi {username || 'Unknown user'}</Subtitle>
          </Header>
          <FormControlWrapper>
            <StyledFormControl onKeyPress={e => check(e)}>
              <StyledInput placeholder='Write a message...' value={input} onChange={e => setInput(e.target.value)}/>
              <StyledIconButton 
                  disabled={!input}
                  onClick={e => sendMessage(e)}
                  variant="contained" 
                  color="primary">
                <SendIcon />
              </StyledIconButton>
            </StyledFormControl>
          </FormControlWrapper>
          <MessagesWrapper>
            <FlipMove>
              {
                messages.map(({message, id, timestamp}) => <Message key={id} message={message} user={username} timestamp={timestamp} />)
              }
            </FlipMove>
          </MessagesWrapper>
        </MainWrapper>
      </Root>
    </ThemeProvider>
  );
}

export default App;
