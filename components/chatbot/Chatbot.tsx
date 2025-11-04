
import React, { useState, useRef, useEffect } from 'react';
import Icon from '../Icon';
import { Message } from '../../types';
import { getChatbotResponse } from '../../services/geminiService';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: '¡Hola! Soy Guaraní Guide. ¿En qué puedo ayudarte con tu mudanza a Paraguay?' },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isOpen]);

  const handleSend = async () => {
    if (userInput.trim() === '' || isLoading) return;

    const newMessages: Message[] = [...messages, { sender: 'user', text: userInput }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    try {
        const botResponse = await getChatbotResponse(userInput);
        setMessages([...newMessages, { sender: 'bot', text: botResponse }]);
    } catch (error) {
        setMessages([...newMessages, { sender: 'bot', text: 'Tuve un problema al procesar tu solicitud.' }]);
    } finally {
        setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* FAB */}
      <div className="fixed bottom-5 right-5 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-py-blue hover:bg-py-blue-dark text-white rounded-full p-4 shadow-lg transform transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-py-blue focus:ring-opacity-50"
          aria-label="Toggle Chat"
        >
          <Icon name={isOpen ? 'close' : 'chat'} className="w-8 h-8" />
        </button>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-20 right-5 z-50 w-[90vw] max-w-md h-[70vh] max-h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="bg-py-blue text-white p-4 rounded-t-2xl flex items-center shadow-md">
            <Icon name="bot" className="w-8 h-8 mr-3" />
            <div>
                <h3 className="font-bold text-lg">Guaraní Guide</h3>
                <p className="text-xs">Asistente para expatriados</p>
            </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}>
                {msg.sender === 'bot' && <div className="w-8 h-8 rounded-full bg-py-blue-dark flex items-center justify-center flex-shrink-0"><Icon name="bot" className="w-5 h-5 text-white" /></div>}
                <div className={`max-w-[80%] p-3 rounded-2xl ${msg.sender === 'user' ? 'bg-py-blue text-white rounded-br-none' : 'bg-gray-200 text-py-blue-dark rounded-bl-none'}`}>
                  <p className="text-sm" dangerouslySetInnerHTML={{ __html: msg.text.replace(/\n/g, '<br />') }} />
                </div>
                {msg.sender === 'user' && <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center flex-shrink-0"><Icon name="user" className="w-5 h-5 text-py-blue-dark" /></div>}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-py-blue-dark flex items-center justify-center flex-shrink-0"><Icon name="bot" className="w-5 h-5 text-white" /></div>
                <div className="p-3 rounded-2xl bg-gray-200 rounded-bl-none">
                  <div className="flex items-center space-x-1">
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-0"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-150"></span>
                      <span className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-300"></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="relative">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Escribe tu pregunta..."
              className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-py-blue"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-py-blue text-white rounded-full p-2 hover:bg-py-blue-dark disabled:bg-gray-400 transition-colors"
              disabled={isLoading || userInput.trim() === ''}
              aria-label="Send Message"
            >
              <Icon name="send" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
