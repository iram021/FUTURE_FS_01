import React, { useState, useEffect } from 'react';
import { SKILLS, PROJECTS, SOCIAL_LINKS } from './constants';
import { Github, Linkedin, MapPin, Mail, Sun, Moon, ExternalLink } from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`${darkMode ? 'bg-[#0d2661] text-slate-200' : 'bg-slate-50 text-slate-800'} min-h-screen transition-colors duration-500 p-4 md:p-8 font-sans`}>
      
      {/* Theme Toggle */}
      <button 
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-6 right-6 z-50 p-3 rounded-2xl bg-pink-600 text-white shadow-xl hover:scale-110 active:scale-95 transition-all"
      >
        {darkMode ? <Sun size={24} /> : <Moon size={24} />}
      </button>

      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
        
        {/* SIDEBAR */}
        <aside className="md:w-1/3 lg:w-1/4 w-full">
          <div className={`${darkMode ? 'bg-[#1e293b] border-slate-800' : 'bg-white border-slate-200'} rounded-3xl p-8 sticky top-8 border shadow-2xl flex flex-col items-center text-center`}>
            
            <div className="w-32 h-32 rounded-full border-4 border-pink-500/30 overflow-hidden mb-6">
              <img src="/ira.jpg" alt="Iram Bano" className="w-full h-full object-cover" />
            </div>

            <h1 className="text-2xl font-bold mb-1 italic">Iram Bano</h1>
            <p className="text-pink-500 font-bold text-xs tracking-widest mb-8 uppercase">Full Stack Developer</p>
            
            <div className="w-full space-y-4 border-t border-slate-700/20 pt-6">
              <div className="flex items-center justify-center gap-3">
                <Mail size={18} className="text-pink-500"/>
                <span className="text-sm truncate">{SOCIAL_LINKS.email}</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin size={18} className="text-pink-500"/>
                <span className="text-sm">Ayodhya, India</span>
              </div>
            </div>

            {/* Social Links Buttons */}
            <div className="flex flex-col w-full gap-3 mt-8">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-500/10 rounded-xl hover:bg-black hover:text-white transition-all font-bold">
                <Github size={20}/> GitHub
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-slate-500/10 rounded-xl hover:bg-[#0077b5] hover:text-white transition-all font-bold">
                <Linkedin size={20}/> LinkedIn
              </a>
            </div>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <main className="md:w-2/3 lg:w-3/4 w-full space-y-6">
          
          {/* Skills Section */}
          <section className={`${darkMode ? 'bg-[#1e293b] border-slate-800' : 'bg-white border-slate-200'} rounded-3xl p-8 border shadow-xl`}>
            <h2 className="text-2xl font-bold mb-8">Technical Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {SKILLS.map((skill) => (
                <div key={skill.name} className={`${darkMode ? 'bg-[#0f172a] border-slate-700' : 'bg-slate-50 border-slate-200'} p-4 rounded-2xl border flex flex-col items-center gap-2 hover:border-pink-500 transition-all group`}>
                  <skill.icon size={32} className={`${skill.color} group-hover:scale-110 transition-transform`} />
                  <span className="font-bold text-[10px] uppercase tracking-wider">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className={`${darkMode ? 'bg-[#1e293b] border-slate-800' : 'bg-white border-slate-200'} rounded-3xl p-8 border shadow-xl`}>
            <h2 className="text-2xl font-bold mb-8 italic">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {PROJECTS.map((p, i) => (
                <div key={i} className={`${darkMode ? 'bg-[#0f172a]' : 'bg-slate-100'} rounded-2xl overflow-hidden group border border-transparent hover:border-pink-500 transition-all flex flex-col h-full`}>
                  <div className="h-40 bg-slate-800 relative">
                    <img src={p.image} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-all" alt={p.title} />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-pink-500 uppercase mb-2">{p.tech}</span>
                    <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                    <p className="text-xs opacity-70 mb-4 flex-grow">{p.desc}</p>
                    <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-pink-500 font-bold text-sm hover:underline mt-auto">
                      Visit Project <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;