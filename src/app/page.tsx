'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Scroll progress tracking
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPostion = Math.floor(scrollTop / totalDocScrollLength * 100);
      
      setScrollProgress(scrollPostion);
    };

    // Intersection Observer for animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.cinematic-entry, .dramatic-scale, .slow-reveal');
    animatedElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-black/5 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Cinematic Hero Section */}
      <section className="cinematic-bg min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="parallax-float absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
          <div className="parallax-float absolute top-40 right-20 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
          <div className="parallax-float absolute bottom-20 left-1/3 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-6 max-w-7xl mx-auto">
          <div className="mb-12 cinematic-entry">
            <h1 className="text-cinematic text-glow mb-8">
              Your Mind.<br/>
              <span className="text-blue-300">Unlocked.</span><br/>
              In 60 Seconds.
            </h1>
            
            <p className="text-cinematic-sub text-white/90 max-w-4xl mx-auto mb-12">
              What if the most powerful thing you could do for your mental health, clarity, and self-awareness took less time than brushing your teeth?
            </p>
          </div>

          {/* Floating App Preview */}
          <div className="card-cinematic max-w-lg mx-auto p-8 mb-16 cinematic-entry">
            <div className="text-sm text-white/60 mb-3">Today's breakthrough:</div>
            <div className="text-xl text-white italic mb-6 leading-relaxed">
              "Finally understood why I've been feeling anxious - it's not about the work, it's about not setting boundaries."
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">💡</span>
                <span className="text-white/80">Insight</span>
              </div>
              <div className="flex space-x-1">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="w-2 h-2 rounded-full bg-blue-400"></div>
                ))}
                <div className="w-2 h-2 rounded-full bg-white/30"></div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center cinematic-entry">
            <a
              href="#"
              className="btn-cinematic text-white px-12 py-5 rounded-2xl font-bold text-xl"
            >
              Unlock Your Mind - iPhone
            </a>
            <a
              href="#"
              className="btn-ghost text-white px-12 py-5 rounded-2xl font-bold text-xl"
            >
              Unlock Your Mind - Android
            </a>
          </div>

          <p className="text-white/60 mt-8 cinematic-entry">
            Free forever. Private by design. Life-changing by nature.
          </p>
        </div>
      </section>

      {/* The Problem - Dark Cinematic Section */}
      <section className="section-dark cinematic-spacing">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <div className="text-center mb-20">
            <h2 className="text-impact text-white mb-8 dramatic-scale">
              The Mental Health Crisis<br/>
              <span className="text-red-400">Hidden in Plain Sight</span>
            </h2>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed dramatic-scale">
              Millions of people are drowning in their own thoughts, unable to process emotions, identify patterns, or break free from mental loops.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-20">
            <div className="text-center dramatic-scale">
              <div className="impact-number mb-6">31%</div>
              <h3 className="text-2xl font-bold mb-4">Anxiety Reduction</h3>
              <p className="text-xl text-white/70 leading-relaxed">
                Just brief writing sessions significantly reduce anxiety symptoms and racing thoughts.
              </p>
            </div>
            
            <div className="text-center dramatic-scale">
              <div className="impact-number mb-6">28%</div>
              <h3 className="text-2xl font-bold mb-4">Mood Improvement</h3>
              <p className="text-xl text-white/70 leading-relaxed">
                Regular reflection enhances emotional awareness and overall mood stability.
              </p>
            </div>
            
            <div className="text-center dramatic-scale">
              <div className="impact-number mb-6">66</div>
              <h3 className="text-2xl font-bold mb-4">Days to Habit</h3>
              <p className="text-xl text-white/70 leading-relaxed">
                Consistent daily practice becomes automatic behavior in just over 2 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution - Gradient Section */}
      <section className="section-gradient cinematic-spacing">
        <div className="max-w-6xl mx-auto px-6 text-white text-center">
          <h2 className="text-impact mb-16 dramatic-scale">
            The Revolutionary Solution:<br/>
            <span className="text-yellow-300">Stream-of-Consciousness</span><br/>
            Micro-Journaling
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slow-reveal">
              <h3 className="text-3xl font-bold mb-8">Bypass Mental Blocks, Unlock Hidden Emotions</h3>
              <div className="space-y-6 text-xl text-left">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">1</div>
                  <div>
                    <strong>No thinking required.</strong> Just write whatever comes to mind, unfiltered and raw.
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">2</div>
                  <div>
                    <strong>Surface unconscious thoughts.</strong> Your mind reveals patterns you never knew existed.
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-1">3</div>
                  <div>
                    <strong>Transform insight into action.</strong> AI-powered analysis identifies triggers and solutions.
                  </div>
                </div>
              </div>
            </div>

            <div className="card-cinematic p-10 dramatic-scale">
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6 py-3">
                  <div className="text-sm text-white/50 mb-2">Day 1: Confused</div>
                  <p className="text-white text-lg">"I don't know why I'm so tired all the time, nothing makes sense anymore..."</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-6 py-3">
                  <div className="text-sm text-white/50 mb-2">Day 15: Discovering</div>
                  <p className="text-white text-lg">"Wait, I feel tired after every meeting with Sarah - maybe it's not me, it's the dynamic?"</p>
                </div>
                <div className="border-l-4 border-green-400 pl-6 py-3">
                  <div className="text-sm text-white/50 mb-2">Day 30: Breakthrough</div>
                  <p className="text-white text-lg">"Set boundaries with Sarah today. Feel energized for the first time in weeks!"</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Story */}
      <section className="bg-white cinematic-spacing">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-impact text-gray-900 mb-16 dramatic-scale">
            From Mental Fog to<br/>
            <span className="text-blue-600">Crystal Clarity</span>
          </h2>

          <div className="card-cinematic bg-white border-gray-200 p-12 mb-16 dramatic-scale">
            <blockquote className="text-2xl text-gray-700 italic mb-8 leading-relaxed">
              "I went from someone who couldn't understand their own emotions to someone who can predict my mood patterns and proactively take care of my mental health. This app didn't just change my journaling - it changed my life."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mr-4"></div>
              <div className="text-left">
                <div className="font-bold text-lg">Sarah Chen</div>
                <div className="text-gray-600">Product Manager, recovering overthinker</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left">
            <div className="slow-reveal">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Before 1 Min Journal</h3>
              <ul className="space-y-4 text-xl text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Constant mental fog and confusion about feelings
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Overwhelming anxiety with no clear triggers
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Repeating the same emotional patterns endlessly
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3">❌</span>
                  Traditional journaling felt impossible and stressful
                </li>
              </ul>
            </div>
            
            <div className="slow-reveal">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">After 30 Days</h3>
              <ul className="space-y-4 text-xl text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✅</span>
                  Crystal-clear understanding of emotional patterns
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✅</span>
                  Can predict and prevent anxiety episodes
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✅</span>
                  Breaks negative thought loops before they start
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3">✅</span>
                  Daily reflection becomes the best part of the day
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security - Dark Section */}
      <section className="section-dark cinematic-spacing">
        <div className="max-w-4xl mx-auto px-6 text-white text-center">
          <h2 className="text-impact mb-8 dramatic-scale">
            Your Thoughts.<br/>
            <span className="text-green-400">Absolutely Private.</span><br/>
            Forever.
          </h2>
          
          <p className="text-2xl text-white/80 mb-16 leading-relaxed dramatic-scale">
            256-bit AES encryption. Zero-knowledge architecture. Even our employees cannot access your entries. Your mental health journey remains yours alone.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-cinematic p-8 cinematic-entry">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-4">Bank-Level Security</h3>
              <p className="text-white/70">Your entries are encrypted with the same technology that protects financial institutions.</p>
            </div>
            
            <div className="card-cinematic p-8 cinematic-entry">
              <div className="text-4xl mb-4">🚫</div>
              <h3 className="text-xl font-bold mb-4">No Data Mining</h3>
              <p className="text-white/70">We don't read, analyze, or profit from your personal thoughts. Ever.</p>
            </div>
            
            <div className="card-cinematic p-8 cinematic-entry">
              <div className="text-4xl mb-4">💾</div>
              <h3 className="text-xl font-bold mb-4">Local First</h3>
              <p className="text-white/70">Your data stays on your device. Optional cloud sync uses end-to-end encryption.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action - Cinematic */}
      <section className="cinematic-bg min-h-screen flex items-center justify-center relative">
        <div className="text-center text-white px-6 max-w-5xl mx-auto">
          <h2 className="text-cinematic mb-8 dramatic-scale">
            Stop Overthinking.<br/>
            <span className="text-blue-300">Start Understanding.</span>
          </h2>
          
          <p className="text-2xl text-white/90 mb-12 leading-relaxed dramatic-scale">
            Your future self is waiting for you to unlock the patterns, break the cycles, and transform your mental landscape. It starts with 60 seconds today.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 dramatic-scale">
            <a
              href="#"
              className="btn-cinematic text-white px-16 py-6 rounded-2xl font-bold text-2xl"
            >
              Transform Your Mind - iPhone
            </a>
            <a
              href="#"
              className="btn-ghost text-white px-16 py-6 rounded-2xl font-bold text-2xl"
            >
              Transform Your Mind - Android
            </a>
          </div>

          <p className="text-white/60 text-lg dramatic-scale">
            Join the mental health revolution. One sentence at a time.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-dark py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12 text-white">
            <div>
              <h3 className="font-bold text-2xl mb-4 text-blue-400">1 Min Journal</h3>
              <p className="text-white/60 leading-relaxed">
                Unlock your mind. Transform your life. One sentence at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Support</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mental Health Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Privacy</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Data Protection</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Community</h4>
              <ul className="space-y-3 text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/40">
            <p>&copy; 2024 1 Min Journal. Transforming minds, one insight at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
