export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
          1 Min Journal
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Capture your entire day in just one sentence. Fast, simple, meaningful.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="#"
            className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Download for iPhone
          </a>
          <a
            href="#"
            className="bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
          >
            Download for Android
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why 1 Min Journal?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
              <p className="text-gray-600">
                Record your day in seconds, not minutes. One sentence is all it takes.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Track Your Mood</h3>
              <p className="text-gray-600">
                Add your daily emoji, energy level, and focus score to see patterns over time.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-3">Beautiful Insights</h3>
              <p className="text-gray-600">
                View your data in stunning charts and discover trends in your daily life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Simple as 1-2-3</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-semibold mb-3">Write One Sentence</h3>
              <p className="text-gray-600">
                Summarize your entire day in a single, meaningful sentence.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-semibold mb-3">Add Your Metrics</h3>
              <p className="text-gray-600">
                Pick your emoji of the day, rate your energy and focus levels.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-semibold mb-3">See Your Progress</h3>
              <p className="text-gray-600">
                Watch your patterns emerge with beautiful visualizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial-like Section */}
      <section className="px-6 py-16 bg-blue-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Build a Life-Changing Habit</h2>
          <p className="text-lg text-gray-700 mb-8">
            Journaling doesn't have to be complicated. One sentence a day is enough to build self-awareness, 
            track your mood, and create a meaningful record of your life.
          </p>
          <p className="text-lg font-medium text-blue-600">
            Start your journey today. Your future self will thank you.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-gray-900 text-white text-center">
        <p>&copy; 2024 1 Min Journal. Simple journaling for everyone.</p>
      </footer>
    </div>
  );
}
