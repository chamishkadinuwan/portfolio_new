import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader, Minimize2, Maximize2 } from 'lucide-react';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm an AI assistant. Ask anything About Dinuwan",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const messagesEndRef = useRef(null);
  const chatRef = useRef(null);
  
  // The API key is now an empty string and will be provided by the environment
  const GEMINI_API_KEY = 'AIzaSyCPQPqOIF3RiDuH2zfsoKK0ZjHqekKLtm4';
  // The Gemini API URL has been updated to the correct endpoint
  const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=" + GEMINI_API_KEY;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (chatRef.current) {
      observer.observe(chatRef.current);
    }

    return () => {
      if (chatRef.current) {
        observer.unobserve(chatRef.current);
      }
    };
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendToGemini = async (message) => {
    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                text: `You are an AI assistant trained to answer questions only about Dinuwan.
                Known Information: 
                - Name: Chamishka Dinuwan
                - Skills: React, Vite, PHP, SQL, Java, Firebase, API integration
                - Interests: Application Development, LLM, OCR, Embedded Code, Tech Research
                - Projects: Portfolio Website, TechPulse News App (Java + Firebase), Attendese Attendance System (HTML, CSS, PHP, SQL)
                Rules:
                1. Only use this information to answer.
                2. Do not invent facts.
                3. Keep answers concise and friendly.
                4. When ask somthing about dinuwan you dont know, give the commen answer or cant give commen answer you can say sorry dont know about that like.
                
                User Question: ${message}`
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 1024,
          },
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      return "Sorry, I'm having trouble connecting right now. Please try again later.";
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const botResponse = await sendToGemini(inputMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, I encountered an error. Please try again.",
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTimestamp = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section id="chat" className={`chat-section ${isVisible ? 'visible' : ''}`} ref={chatRef}>
      {/* Animated Background */}
      <div className="chat-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
        <div className="chat-particles">
          {[...Array(8)].map((_, i) => (
            <div 
              key={i} 
              className="particle"
              style={{ 
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            >
              💬
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className={`section-header ${isVisible ? 'visible' : ''}`}>
          <span className="section-badge">
            <span className="badge-icon">🤖</span>
            AI Assistant
          </span>
          <h2 className="section-title">Chat with AI</h2>
          <p className="section-subtitle">
            Ask me anything!
          </p>
        </div>

        {/* Chat Container */}
        <div className={`chat-container ${isMinimized ? 'minimized' : ''} ${isVisible ? 'visible' : ''}`}>
          {/* Chat Header */}
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="bot-avatar">
                <Bot size={24} />
              </div>
              <div className="chat-title">
                <h3>AI Assistant</h3>
                <span className="status">Online</span>
              </div>
            </div>
            <button 
              className="minimize-btn"
              onClick={() => setIsMinimized(!isMinimized)}
            >
              {isMinimized ? <Maximize2 size={20} /> : <Minimize2 size={20} />}
            </button>
          </div>

          {/* Chat Messages */}
          <div className="chat-messages">
            {messages.map((message) => (
              <div key={message.id} className={`message ${message.sender}`}>
                <div className="message-avatar">
                  {message.sender === 'bot' ? <Bot size={20} /> : <User size={20} />}
                </div>
                <div className="message-content">
                  <div className="message-bubble">
                    <p>{message.text}</p>
                  </div>
                  <span className="message-timestamp">
                    {formatTimestamp(message.timestamp)}
                  </span>
                </div>
              </div>
            ))}
            
            {/* Loading Indicator */}
            {isLoading && (
              <div className="message bot">
                <div className="message-avatar">
                  <Bot size={20} />
                </div>
                <div className="message-content">
                  <div className="message-bubble loading">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <div className="chat-input">
            <div className="input-container">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message here..."
                rows="1"
                disabled={isLoading}
              />
              <button 
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isLoading}
                className="send-button"
              >
                {isLoading ? <Loader className="spinning" size={20} /> : <Send size={20} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .chat-section {
          padding: 8rem 0 6rem;
          background: linear-gradient(135deg, #0a0f1c 0%, #1a1f2e 50%, #0f1419 100%);
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        .chat-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .gradient-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.1;
          animation: float 12s ease-in-out infinite;
        }

        .orb-1 {
          width: 300px;
          height: 300px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          top: 20%;
          right: 10%;
          animation-delay: 0s;
        }

        .orb-2 {
          width: 250px;
          height: 250px;
          background: linear-gradient(135deg, #10B981, #06B6D4);
          bottom: 30%;
          left: 15%;
          animation-delay: -4s;
        }

        .orb-3 {
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #F59E0B, #8B5CF6);
          top: 60%;
          right: 70%;
          animation-delay: -8s;
        }

        .chat-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .particle {
          position: absolute;
          color: rgba(99, 102, 241, 0.1);
          font-size: 1.5rem;
          animation: particleFloat linear infinite;
        }

        .container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 2rem;
          position: relative;
          z-index: 1;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .section-header.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .section-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          color: #6366F1;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 0.95rem;
          font-weight: 500;
          border: 1px solid rgba(99, 102, 241, 0.2);
          margin-bottom: 1.5rem;
          backdrop-filter: blur(10px);
        }

        .badge-icon {
          font-size: 1.2rem;
        }

        .section-title {
          font-size: 4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #ffffff 0%, #6366F1 50%, #EC4899 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          margin-bottom: 1rem;
          line-height: 1.1;
        }

        .section-subtitle {
          font-size: 1.3rem;
          color: #9CA3AF;
          font-weight: 400;
        }

        .chat-container {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          backdrop-filter: blur(20px);
          overflow: hidden;
          max-width: 800px;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3);
        }

        .chat-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .chat-container.minimized .chat-messages,
        .chat-container.minimized .chat-input {
          display: none;
        }

        .chat-header {
          background: rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-header-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .bot-avatar {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #6366F1, #EC4899);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
        }

        .chat-title h3 {
          color: #ffffff;
          margin: 0;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .status {
          color: #10B981;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .status::before {
          content: '';
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        .minimize-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 8px;
          color: #ffffff;
          padding: 0.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .minimize-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .chat-messages {
          height: 500px;
          overflow-y: auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .chat-messages::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }

        .chat-messages::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.3);
          border-radius: 3px;
        }

        .message {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }

        .message.user {
          flex-direction: row-reverse;
        }

        .message-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .message.bot .message-avatar {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          color: white;
        }

        .message.user .message-avatar {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }

        .message-content {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          max-width: 70%;
        }

        .message.user .message-content {
          align-items: flex-end;
        }

        .message-bubble {
          padding: 1rem 1.5rem;
          border-radius: 18px;
          word-wrap: break-word;
        }

        .message.bot .message-bubble {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          color: #ffffff;
        }

        .message.user .message-bubble {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          color: white;
        }

        .message-bubble p {
          margin: 0;
          line-height: 1.5;
        }

        .message-bubble.loading {
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
        }

        .message-timestamp {
          font-size: 0.75rem;
          color: #9CA3AF;
          margin: 0 1rem;
        }

        .typing-indicator {
          display: flex;
          gap: 4px;
          align-items: center;
        }

        .typing-indicator span {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #6366F1;
          animation: typing 1.4s infinite;
        }

        .typing-indicator span:nth-child(2) {
          animation-delay: 0.2s;
        }

        .typing-indicator span:nth-child(3) {
          animation-delay: 0.4s;
        }

        .chat-input {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding: 1.5rem 2rem;
          background: rgba(255, 255, 255, 0.02);
        }

        .input-container {
          display: flex;
          gap: 1rem;
          align-items: flex-end;
        }

        .input-container textarea {
          flex: 1;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 1rem;
          color: #ffffff;
          resize: none;
          max-height: 120px;
          min-height: 44px;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-container textarea::placeholder {
          color: #9CA3AF;
        }

        .input-container textarea:focus {
          border-color: #6366F1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .send-button {
          background: linear-gradient(135deg, #6366F1, #EC4899);
          border: none;
          border-radius: 12px;
          color: white;
          padding: 0.75rem;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          height: 44px;
        }

        .send-button:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99, 102, 241, 0.3);
        }

        .send-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .spinning {
          animation: spin 1s linear infinite;
        }

        .api-notice {
          text-align: center;
          margin-top: 2rem;
          padding: 1rem;
          background: rgba(245, 158, 11, 0.1);
          border: 1px solid rgba(245, 158, 11, 0.2);
          border-radius: 12px;
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s;
        }

        .api-notice.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .api-notice p {
          color: #F59E0B;
          margin: 0;
          font-size: 0.9rem;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes particleFloat {
          from {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          to {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        @keyframes typing {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .chat-section {
            padding: 6rem 0 4rem;
          }

          .container {
            padding: 0 1rem;
          }

          .section-title {
            font-size: 2.5rem;
          }

          .chat-container {
            margin: 0;
          }

          .chat-header {
            padding: 1rem 1.5rem;
          }

          .chat-messages {
            height: 400px;
            padding: 1.5rem;
          }

          .chat-input {
            padding: 1rem 1.5rem;
          }

          .message-content {
            max-width: 85%;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 2rem;
          }

          .chat-messages {
            height: 300px;
            padding: 1rem;
          }

          .chat-header {
            padding: 1rem;
          }

          .chat-input {
            padding: 1rem;
          }

          .input-container {
            gap: 0.5rem;
          }

          .message-content {
            max-width: 90%;
          }
        }
      `}</style>
    </section>
  );
};

export default Chat;
