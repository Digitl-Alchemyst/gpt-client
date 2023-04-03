//import logo from './logo.svg';
import './normalize.css';
import './App.css';
import { useState, } from 'react';

function App() {

  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  async function handleSubmit(e){
    e.preventDefault();
    setChatLog([...chatLog, { user: "me", message: '${input}'}])
    setInput("");
    
  }
 
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-log">
          <ChatMessage message={message} />
          <div className="chat-message chatgpt">
            <div className="chat-message-center">
              <div className="avatar chatgpt">
              
                  </div>
                    <div className="message">
                      hello i am gypsy
                    </div>
              </div>
            </div>
          </div>
        <div className="chat-input-holder">
          <form onSubmit={handleSubmit}>
          <input 
          rows="1"
          value={input}
          onChange={(e)=> setInput (e.target.value)}
          className="chat-input-textarea" placeholder="To start a conversation with Gypsy, type a message here..."></input>
          </form>
        </div>

      </section>

    </div>
  );
}

const ChatMessage = ({ message }) => {
  return (
    <div className={`chat-message ${message.user == "gpt" && "chatgpt"}`}>
      <div className="chat-message-center">
        <div className={`avatar ${message.user == "gpt" && "chatgpt"}`}>
          {message.user == "gpt" && <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                strokeWidth={1 / 5}
                viewBox="0 0 40 40"
              >
                <path 
                d="M239.184 106.203a64.716 64.716 0 00-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0052.096 45.22a64.716 64.716 0 00-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.665 64.665 0 005.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0048.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.767 64.767 0 0043.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483zm-97.56 136.338a48.397 48.397 0 01-31.105-11.255l1.535-.87 51.67-29.825a8.595 8.595 0 004.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601zm-104.466-44.61a48.345 48.345 0 01-5.781-32.589l1.534.921 51.722 29.826a8.339 8.339 0 008.441 0l63.181-36.425v25.221a.87.87 0 01-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803zM23.549 85.38a48.499 48.499 0 0125.58-21.333v61.39a8.288 8.288 0 004.195 7.316l62.874 36.272-21.845 12.636a.819.819 0 01-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405v.256zm179.466 41.695l-63.08-36.63L161.73 77.86a.819.819 0 01.768 0l52.233 30.184a48.6 48.6 0 01-7.316 87.635v-61.391a8.544 8.544 0 00-4.4-7.213zm21.742-32.69l-1.535-.922-51.619-30.081a8.39 8.39 0 00-8.492 0L99.98 99.808V74.587a.716.716 0 01.307-.665l52.233-30.133a48.652 48.652 0 0172.236 50.391v.205zM88.061 139.097l-21.845-12.585a.87.87 0 01-.41-.614V65.685a48.652 48.652 0 0179.757-37.346l-1.535.87-51.67 29.825a8.595 8.595 0 00-4.246 7.367l-.051 72.697zm11.868-25.58l28.138-16.217 28.188 16.218v32.434l-28.086 16.218-28.188-16.218-.052-32.434z" 
                fill="currentColor"
                />
                </svg>}
        </div>
        
              <div className="message">
                {message.message}
              </div>
            </div>
          </div>
  )
}

export default App;
