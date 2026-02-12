import React, { useState, useRef, useEffect } from 'react';
import { getFinancialAdvice } from '../services/geminiService.ts';
import { ChatMessage } from '../types.ts';

const AIAdvisor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Selamat malam Bapak Founder! **Strategi-AI** siap membedah potensi cuan koperasi kita. Apa ide besar yang ingin Bapak "Online-kan" hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages, isLoading]);

  const formatText = (text: string) => {
    // Fungsi sederhana untuk merender **bold** tanpa library eksternal
    return text.split('**').map((part, i) => 
      i % 2 === 1 ? <strong key={i} className="text-indigo-600 font-black">{part}</strong> : part
    );
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getFinancialAdvice(userMsg);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: '⚠️ Terjadi kegagalan sinkronisasi dengan otak AI. Mohon kirim ulang.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-12rem)] lg:h-[calc(100vh-10rem)] bg-white rounded-[3.5rem] shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in duration-500">
      {/* Header Strategis */}
      <div className="p-8 bg-[#020617] text-white flex items-center justify-between border-b-4 border-indigo-600 relative">
        <div className="flex items-center gap-5">
          <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-3xl shadow-lg animate-pulse border border-white/10">
            🤖
          </div>
          <div>
            <h3 className="font-black italic uppercase tracking-tighter text-indigo-400 text-xl">Strategist Oracle v5.0</h3>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping"></span> 
              Sovereign Mind Online
            </p>
          </div>
        </div>
        <div className="hidden sm:block text-right">
           <p className="text-[8px] font-black text-slate-500 uppercase">Analysis Precision</p>
           <p className="text-sm font-black text-emerald-400 italic">ULTRA-HIGH</p>
        </div>
      </div>

      {/* Area Percakapan */}
      <div className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 bg-slate-50/30 custom-scrollbar">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-4`}>
            <div className={`max-w-[90%] md:max-w-[75%] px-8 py-6 rounded-[2.5rem] shadow-sm relative group ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white rounded-tr-none' 
                : 'bg-white text-slate-800 border border-slate-200 rounded-tl-none'
            }`}>
              <div className="text-sm md:text-base leading-relaxed whitespace-pre-wrap font-medium">
                {formatText(msg.text)}
              </div>
              <div className={`flex items-center gap-2 mt-4 opacity-30 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <p className="text-[8px] font-black uppercase tracking-widest">
                  {msg.role === 'user' ? 'Founder' : 'Sovereign AI'} • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
              </div>
              
              {/* Floating Action (Copy) */}
              {msg.role === 'model' && (
                <button 
                  onClick={() => { navigator.clipboard.writeText(msg.text); alert('Strategi disalin!'); }}
                  className="absolute -right-4 -bottom-4 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:bg-indigo-50"
                >
                  📋
                </button>
              )}
            </div>
          </div>
        ))}
        
        {isLoading && (
          <div className="flex justify-start animate-in fade-in">
            <div className="bg-white px-8 py-6 rounded-[2.5rem] shadow-sm border border-slate-200 rounded-tl-none flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                <div className="w-2 h-2 bg-indigo-600 rounded-full animate-bounce [animation-delay:0.4s]"></div>
              </div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Mengkalkulasi Profitabilitas...</span>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>

      {/* Input Center */}
      <div className="p-8 bg-white border-t border-slate-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        <div className="flex gap-4 bg-slate-50 p-2 rounded-[3rem] border-2 border-slate-200 focus-within:border-indigo-500 focus-within:ring-8 focus-within:ring-indigo-50 transition-all shadow-inner group">
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Tanyakan cara menghasilkan uang dari koperasi online..."
            className="flex-1 bg-transparent px-8 py-4 outline-none text-base font-bold text-slate-700 placeholder:text-slate-400"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="bg-indigo-600 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:bg-indigo-700 transition-all active:scale-90 disabled:opacity-20 disabled:grayscale group-hover:scale-105"
          >
            <span className="text-2xl">🚀</span>
          </button>
        </div>
        <div className="flex justify-center gap-8 mt-4">
           <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full"></span> Data Secure & Encrypted
           </p>
           <p className="text-[9px] text-slate-400 uppercase font-black tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-indigo-500 rounded-full"></span> Powered by Gemini 3 Flash
           </p>
        </div>
      </div>
    </div>
  );
};

export default AIAdvisor;