import React, { useState } from 'react';
import { sendMessage } from './api';

import './App.css';


function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSendMessage = async () => {
    if (inputMessage) {
      setChatHistory([...chatHistory, { role: 'user', content: inputMessage }]);
      const response = await sendMessage(inputMessage);
      setChatHistory([...chatHistory, { role: 'assistant', content: response }]);
      setInputMessage('');
    }
  };

  return (
    <div className="App">
      <div className="chat-container">
        {chatHistory.map((message, index) => (
          <div key={index} className={`message ${message.role}`}>
            {message.content}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;