import { useState } from 'react';
import './App.css';
import LiveKitModal from './components/LiveKitModal';

function App() {
  const [showSupport, setShowSupport] = useState(false);

  const handleSupportClick = () => {
    setShowSupport(true);
  };

  const features = [
    {
      icon: '⌕',
      title: 'Find Your Vehicle',
      description: 'Look up your vehicle using its VIN, year, make, and model.',
      link: 'Find your vehicle',
      action: handleSupportClick,
    },
    {
      icon: '⚙',
      title: 'Explore Car Parts',
      description: 'Get help finding parts and understanding compatibility.',
      link: 'Explore with AI',
      action: handleSupportClick,
    },
    {
      icon: '☏',
      title: 'Talk to AI Assistant',
      description: 'Ask car-related questions through a natural voice conversation.',
      link: 'Start a conversation',
      action: handleSupportClick,
    },
    {
      icon: '🚘',
      title: 'Vehicle Information',
      description: 'Get help understanding vehicle details and specifications.',
      link: 'Ask a question',
      action: handleSupportClick,
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <a className="logo" href="#home" aria-label="AutoAssist AI home">
          <span className="brand-icon">✦</span>
          <span>AutoAssist <span className="brand-accent">AI</span></span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#vehicle">Vehicle Info</a>
          <a href="#support" onClick={(event) => {
            event.preventDefault();
            handleSupportClick();
          }}>Support</a>
        </nav>

        <button className="header-cta" onClick={handleSupportClick}>
          <span>🎙</span> Talk to an Agent
        </button>
      </header>

      <main>
        <section
          className="hero"
          id="home"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(8,13,24,0.98) 0%, rgba(8,13,24,0.88) 38%, rgba(8,13,24,0.20) 100%), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2000&q=85')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              SMARTER CAR CARE STARTS HERE
            </div>

            <h1>
              Your car has
              <br />
              questions.
              <br />
              <span>AI has answers.</span>
            </h1>

            <p>
              Get help with vehicle information, VIN lookups, parts compatibility,
              and car-related questions through a natural voice conversation.
            </p>

            <form
              className="search-bar"
              onSubmit={(event) => {
                event.preventDefault();
                handleSupportClick();
              }}
            >
              <input
                type="text"
                aria-label="Car question"
                placeholder="Ask about your car or enter a VIN..."
              />
              <button type="submit">Ask AI ↗</button>
            </form>

            <div className="hero-benefits">
              <span><b>✦</b> Fast answers</span>
              <span><b>✓</b> Vehicle assistance</span>
              <span><b>◉</b> Voice-powered AI</span>
            </div>
          </div>

          <div className="image-caption">
            <span className="caption-dot"></span>
            YOUR PERSONAL CAR CARE ASSISTANT
          </div>
        </section>

        <section className="features-section" id="features">
          <div className="section-heading">
            <div>
              <span className="section-label">BUILT FOR DRIVERS</span>
              <h2>Everything your car needs.</h2>
            </div>
            <p>One conversation can help you find the information you need.</p>
          </div>

          <div className="categories">
            {features.map((feature, index) => (
              <article
                className="category-card"
                id={index === 3 ? 'vehicle' : undefined}
                key={feature.title}
              >
                <div className="feature-icon" aria-hidden="true">
                  {feature.icon}
                </div>
                <span className="feature-number">
                  0{index + 1}
                </span>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <button className="feature-link" onClick={feature.action}>
                  {feature.link} <span>→</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="bottom-cta" id="support">
          <div>
            <span className="section-label">NEED A HAND?</span>
            <h2>Let's talk about your car.</h2>
            <p>Start a voice conversation with your AI assistant.</p>
          </div>
          <button className="bottom-cta-button" onClick={handleSupportClick}>
            <span>🎙</span> Talk to an Agent
          </button>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          <span className="brand-icon">✦</span>
          <span>AutoAssist <span className="brand-accent">AI</span></span>
        </a>
        <p>AI-powered assistance for a smoother driving experience.</p>
      </footer>

      <button
        className="support-button"
        onClick={handleSupportClick}
        aria-label="Talk to the AI assistant"
      >
        <span>🎙</span> Talk to an Agent
      </button>

      {showSupport && (
        <LiveKitModal setShowSupport={setShowSupport} />
      )}
    </div>
  );
}

export default App;