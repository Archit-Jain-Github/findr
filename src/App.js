import React from 'react'
import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { sendMsgToOpenAI } from './openai';

function App() {

  const msgEnd = React.useRef(null);

  const [input, setInput] = React.useState("");
  const [messages, setMessages] = React.useState([{
    text: "Hi, how can I help you?",
    isBot: true,
  }]);


  React.useEffect(() => {
    msgEnd.current.scrollIntoView();
  }, [messages]);

  const handleSend = async () => {
  if (!input.trim()) {
    console.warn("Empty input — not sending to OpenAI");
    return;
  }

    try {
      const text = input;
      setInput("");
      setMessages([
        ...messages,
        { text, isBot: false }
      ]);
    const res = await sendMsgToOpenAI(text);
    setMessages([...messages,
      {text, isBot: false},
      {text: res, isBot: true}
    ]);
    console.log(res);
  } catch (err) {
    console.error("The sample encountered an error:", err);
  }
};


  const handleEnter = async (e) => {
    if (e.key === "Enter") await handleSend();
  }

  const handleQuery = async (e) => { if (!e.target.value.trim()) {
    console.warn("Empty input — not sending to OpenAI");
    return;
  }

    try {
      const text = e.target.value;
      setInput("");
      setMessages([
        ...messages,
        { text, isBot: false }
      ]);
    const res = await sendMsgToOpenAI(text);
    setMessages([...messages,
      {text, isBot: false},
      {text: res, isBot: true}
    ]);
    console.log(res);
  } catch (err) {
    console.error("The sample encountered an error:", err);
  }}




  return (
    <div className='App'>
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'> <img src={gptLogo} alt="Logo" className='logo' /> <span className='brand'>Findr.</span>
            <button className='midBtn' onClick={() => {window.location.reload() }}>
              <img src={ addBtn} alt='New Chat' className='addBtn'/>New Chat
            </button>
            <div className='upperSideBottom'>
              <button className='query' onClick={handleQuery} value={ "What is an API?"}><img src={ msgIcon} alt='Query' />What is an API?</button>
              <button className='query' onClick={handleQuery}  value={ "What is Programming?"}><img src={ msgIcon} alt='Query'/>What is Programming?</button>
            </div>
          </div>
        </div>
        <div className='lowerSide'>
          <div className='listItems'>
            <img src={ home} alt='Home' className='listItemsImg'/> Home
          </div>
          <div className='listItems'>
            <img src={ saved} alt='Saved' className='listItemsImg'/> Save
          </div>
          <div className='listItems'>
            <img src={rocket} alt='Rocket' className='listItemsImg'/> Upgrade
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          {messages.map((message, i) =>
            <div key={ i } className={message.isBot ? 'chat bot' : 'chat' }>
            <img className='chatImg' src={ message.isBot ? gptImgLogo : userIcon} alt=''/><p className='txt'>
              {message.text}
            </p>
          </div>
          )}
          <div ref={ msgEnd } />
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' placeholder='Type your query here...' value={input} onKeyDown={handleEnter} onChange={(e) => { setInput(e.target.value)}} /><button className='send' onClick={handleSend}><img src={sendBtn} alt='send' /></button>
          </div>
          <p>By messaging findr, you agree to our Terms and have read our Privacy Policy. See Cookie Preferences.</p>
        </div>
      </div>
    </div>
  )
}

export default App