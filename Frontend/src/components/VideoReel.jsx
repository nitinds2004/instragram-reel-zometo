// import React { useEffect, useRef } from 'react';
import React, { useEffect, useRef } from 'react';
// import '../../styles/reels.css';
import '../styles/reels.css';
import { Link, Links } from 'react-router-dom';

const VideoReel = ({ src, author, caption, storeUrl }) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const videoEl = videoRef.current;
    const container = containerRef.current;
    if (!videoEl || !container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            const p = videoEl.play();
            if (p && p.catch) p.catch(() => { /* autoplay blocked */ });
          } else {
            videoEl.pause();
            videoEl.currentTime = 0;
          }
        });
      },
      { threshold: [0.25, 0.6, 0.9] }
    );

    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <section className="reel" ref={containerRef} aria-label={`Video by ${author}`}>
      <video
        ref={videoRef}
        src={src}
        className="reel-video"
        playsInline
        muted
        loop
        preload="metadata"
      />
      {/* Top overlay: description (truncated to 2 lines) + Visit store button */}
      <div className="reel-top">
        <div className="reel-top-left">
          <div className="reel-desc" title={caption}>{caption}</div>
          <Link className="reel-store-btn" to={"/food-partner/"+ storeUrl} target="_blank" rel="noreferrer">Visit store</Link>
        </div>

        {/* keep actions column on the right */}
        <div className="reel-actions">
          <button className="reel-btn" aria-label="Like">♥</button>
          <button className="reel-btn" aria-label="Comment">💬</button>
          <button className="reel-btn" aria-label="Share">↗</button>
        </div>
      </div>

      {/* bottom meta (optional, small author label) */}
      <div className="reel-overlay">
        <div className="reel-author">@{author}</div>
      </div>
    </section>
  );
};

export default VideoReel;
