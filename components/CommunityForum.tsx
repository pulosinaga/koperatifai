
import React, { useState } from 'react';

interface Post {
  id: number;
  user: string;
  role: string;
  content: string;
  likes: number;
  comments: number;
  category: 'Business' | 'Social' | 'Help';
  time: string;
}

const CommunityForum: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const posts: Post[] = [
    { id: 1, user: 'Ibu Rahma', role: 'Platinum Member', category: 'Business', content: 'Halo teman-teman, stok beras organik saya baru masuk. Khusus anggota KoperatifAI ada diskon beli 5kg gratis 1kg ya! Langsung cek marketplace.', likes: 24, comments: 5, time: '2j lalu' },
    { id: 2, user: 'Pak Joni', role: 'Merchant', category: 'Help', content: 'Ada yang tahu bengkel las yang bisa bayar pakai saldo sukarela koperasi? Saya mau renovasi gerobak jualan.', likes: 12, comments: 8, time: '5j lalu' },
    { id: 3, user: 'Dika Art', role: 'Creative', category: 'Social', content: 'Minggu depan kita adakan kopi darat (kopdar) virtual via Zoom yuk untuk bahas strategi pemasaran bersama!', likes: 45, comments: 12, time: '1h lalu' },
  ];

  const filteredPosts = activeCategory === 'All' ? posts : posts.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-12 animate-in fade-in duration-500 pb-20 max-w-5xl mx-auto">
      {/* Forum Header */}
      <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-[3.5rem] p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"></div>
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <span className="px-4 py-1.5 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">
              Common Bond Network
            </span>
            <h2 className="text-4xl font-black leading-tight italic">Lingkaran Komunitas.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed max-w-2xl">
              Tempat bertumbuh bersama. Karena koperasi bukan sekadar aplikasi, tapi sekumpulan manusia yang saling menguatkan.
            </p>
          </div>
          <div className="flex -space-x-4">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="w-14 h-14 rounded-full border-4 border-indigo-600 bg-slate-200 flex items-center justify-center text-2xl shadow-xl">👤</div>
             ))}
             <div className="w-14 h-14 rounded-full border-4 border-indigo-600 bg-emerald-500 flex items-center justify-center text-xs font-black shadow-xl">+1.2k</div>
          </div>
        </div>
      </div>

      {/* Categories & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
         <div className="bg-white p-1.5 rounded-2xl border border-slate-100 shadow-sm inline-flex">
            {['All', 'Business', 'Social', 'Help'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
         </div>
         <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl hover:bg-black transition-all">
            + Buat Postingan Baru
         </button>
      </div>

      {/* Feed */}
      <div className="space-y-6">
         {filteredPosts.map((post) => (
           <div key={post.id} className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-md transition-all group">
              <div className="flex justify-between items-start mb-6">
                 <div className="flex gap-4">
                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center text-2xl">👤</div>
                    <div>
                       <h4 className="font-bold text-slate-800">{post.user}</h4>
                       <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{post.role}</p>
                    </div>
                 </div>
                 <span className="text-[10px] font-bold text-slate-400 uppercase">{post.time}</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8 italic">"{post.content}"</p>
              <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                 <div className="flex gap-6">
                    <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-rose-500 transition-colors">
                       <span>❤️</span> {post.likes}
                    </button>
                    <button className="flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors">
                       <span>💬</span> {post.comments} Komentar
                    </button>
                 </div>
                 <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase ${
                    post.category === 'Business' ? 'bg-emerald-50 text-emerald-600' :
                    post.category === 'Help' ? 'bg-rose-50 text-rose-600' : 'bg-blue-50 text-blue-600'
                 }`}>
                    {post.category}
                 </span>
              </div>
           </div>
         ))}
      </div>

      {/* Circular Vision */}
      <div className="p-12 bg-indigo-50 border border-indigo-100 rounded-[4rem] flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
         <div className="text-7xl">🤝</div>
         <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-black text-indigo-900">"Kekuatan di Balik Layar."</h4>
            <p className="text-indigo-700/70 text-lg leading-relaxed italic">
               Di sinilah 'Keajaiban Koperasi' terjadi. Saat anggota saling membantu tanpa melalui admin, biaya operasional kita tetap 0, dan kepercayaan antar manusia meningkat. Itulah aset yang tidak bisa dibeli bank mana pun.
            </p>
         </div>
      </div>
    </div>
  );
};

export default CommunityForum;
