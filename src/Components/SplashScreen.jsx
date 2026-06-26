import React, { useEffect, useState } from 'react';

export default function SplashScreen({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Hold splash for 3.5 seconds, then trigger exit fade out
    const timer = setTimeout(() => {
      setIsExiting(true);
      // Allow fade-out animation to complete before unmounting
      setTimeout(onComplete, 800);
    }, 3500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className={`splash ${isExiting ? 'splash--exit' : ''}`}>
      <div className="splash__stage">
        
        {/* The dramatic 3D rotating showcase card */}
        <div className="splash__card-wrapper">
          <div className="splash__card">
            <div className="splash__card-face splash__card-front">
              <span className="splash__card-icon">🧠</span>
            </div>
            <div className="splash__card-face splash__card-back">
              <span className="splash__card-icon">✨</span>
            </div>
          </div>
        </div>

        {/* Dynamic Title reveal */}
        <div className="splash__typography">
          <h1 className="splash__title">
            <span>MEMORY</span>
            <span>MATRIX</span>
          </h1>
          <p className="splash__tagline">Flip · Match · Conquer</p>
        </div>

        {/* Decorative Ring Elements */}
        <div className="splash__ring" aria-hidden="true" />
        <div className="splash__ring splash__ring--delayed" aria-hidden="true" />
      </div>
    </div>
  );
}