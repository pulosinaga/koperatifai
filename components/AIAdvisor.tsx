import React, { useState, useRef, useEffect } from 'react';
import { getFinancialAdvice } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Selamat malam Bapak/Ibu Founder! Saya Asisten AI KoperatifAI. Ada yang bisa saya bantu terkait strategi pengembangan koperasi atau pengelolaan kas hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const aiResponse = await getFinancialAdvice(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: aiResponse }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: 'Maaf, sistem sedang sibuk menyinkronkan data kedaulatan. Mohon coba sesaat lagi.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-14rem)] lg:h-[calc(100vh-10rem)] bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden animate-in fade-in duration-500">
      {/* Header AI */}
      <div className="p-6 bg-slate-900 text-white flex items-center justify-between border-b-4 border-indigo-600">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl shadow-lg animate-pulse">
            🤖
          </div>
          <div>
            <h3 className="font-black italic uppercase tracking-tighter text-indigo-400">Master Advisor AI</h3>
            <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Online & Guarding Funds
            </p>
          </div>
        </div>
        <div className="hidden sm:block text-right">
           <p className="text-[8px] font-black text-slate-500 uppercase">Integrity Score</p>
           <p className="text-xs font-black text-emerald-400 italic">99.9% ACCURACY</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50/50 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
            <div className={`max-w-[85%] lg:max-w-[70%] px-5 py-4 rounded-[2rem] shadow-sm ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
            }`}>
              <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">
                {msg.text}
              </p>
              <p className={`text-[8px] mt-2 font-black uppercase opacity-40 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                {msg.role === 'user' ? 'Anda' : 'Koperatif AI'} • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
              </p>
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-in fade-in">
            <div className="bg-white px-6 py-4 rounded-[2rem] shadow-sm border border-slate-100 rounded-tl-none flex gap-2 items-center">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2">Menyusun Strategi...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-6 bg-white border-t border-slate-100">
        <div className="flex gap-3 bg-slate-50 p-2 rounded-[2.5rem] border border-slate-200 focus-within:border-indigo-400 focus-within:ring-4 focus-within:ring-indigo-50 transition-all shadow-inner">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tanyakan strategi bisnis atau kedaulatan modal..."
            className="flex-1 bg-transparent px-6 py-3 outline-none text-sm font-medium text-slate-700 placeholder:text-slate-400"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-indigo-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-indigo-700 transition-all active:scale-90 disabled:opacity-30 disabled:grayscale"
          >
            <span className="text-xl">🚀</span>
          </button>
        </div>
        <p className="text-center text-[9px] text-slate-400 mt-4 uppercase font-black tracking-widest">
           🔒 Percakapan ini dienkripsi & dilindungi protokol kedaulatan data.
        </p>
      </div>
    </div>
  );
};

export default AIAdvisor;