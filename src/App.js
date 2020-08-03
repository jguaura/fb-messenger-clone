import React, { useState, useEffect } from 'react';
import './App.css';

import { Button, FormControl, InputLabel, Input } from '@material-ui/core'
import Message from './components/Message/Message';

function App() {

  const [input, setInput] = useState('');
  const [username, setUsername] = useState('');
  const [messages, setMessages] = useState([{username: 'Jos', message:'msg44'}, {username: 'Jos', message:'msg22'}, {username: 'Jos', message: 'mshg1'}])

  const sendMessage = (e) => {
    e.preventDefault()
    input && setMessages([...messages, {username: username, message:input}])
    setInput('');
  }

  const check = (e) => {
    if(e.key == 'Enter' && input) {
      sendMessage(e)
    }
  }

  useEffect(() => {
    setUsername(prompt('What is your name?'))
  }, [])

  return (
    <div className="app">
      <h1>Messenger GO BRRR 🔥 </h1>
      <h2>Hi {username}</h2>
        <FormControl onKeyPress={e => check(e)}>
          <InputLabel>Enter a Message</InputLabel>
          <Input value={input} onChange={e => setInput(e.target.value)}/>
          <Button
          disabled={!input}
          onClick={e => sendMessage(e)}
          variant="contained" 
          color="primary"> SEND </Button>
        </FormControl>
      {
        messages.map((message, index) => <Message key={index} message={message} user={username} />)
      }
    </div>
  );
}

export default App;
