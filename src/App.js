import React, { useState } from 'react';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([])

  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, input])
  }

  return (
    <div className="app">
      <h1>Messenger GO BRRR 🔥 </h1>
      <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
      <button onClick={sendMessage}>send</button>
    </div>
  );
}

export default App;
