import './Features.css';

function Features() {
  const features = [
    {
      id: 1,
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Experience blazing-fast performance with our optimized infrastructure'
    },
    {
      id: 2,
      icon: '🔒',
      title: 'Secure & Safe',
      description: 'Your data is protected with enterprise-grade security measures'
    },
    {
      id: 3,
      icon: '📊',
      title: 'Analytics',
      description: 'Get detailed insights with our comprehensive analytics dashboard'
    },
    {
      id: 4,
      icon: '🚀',
      title: 'Scalable',
      description: 'Grow your business without worrying about infrastructure limits'
    },
    {
      id: 5,
      icon: '🤝',
      title: '24/7 Support',
      description: 'Our dedicated team is always here to help you succeed'
    },
    {
      id: 6,
      icon: '💡',
      title: 'Innovation',
      description: 'Stay ahead with cutting-edge features and regular updates'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="features-container">
        <h2 className="section-title">Our Features</h2>
        <p className="section-subtitle">Everything you need to succeed</p>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
