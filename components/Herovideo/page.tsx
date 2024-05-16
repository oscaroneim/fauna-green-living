import React from 'react';
import './Herovideo.css';

const HeroVideo = () => {
  return (
    <div>
      <div className="container md:pl-40">
        <div className="videodiv">
          <video controls autoPlay muted style={{ width: '100%', height: 'auto' }}>
            <source src="videos/Fauna.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hello-all">
          <h2 className="titlehead">HOW IT WORKS</h2>
          <div className="caption-div">
            <h3 className="caption">Choose the appropriate size 📏</h3>
            <p className="caption-text">
              Select the right-sized beeswax wrap to suit your needs. Make sure it's clean and dry.
              If it's been in the fridge, allow it to warm up a bit before use.{' '}
            </p>
          </div>
          <div className="caption-div">
            <h3 className="caption">Wrap with your hands 🖐</h3>
            <p className="caption-text">
              Place the wrap around your food and, using the natural warmth of your hands, gently
              seal the edges.
            </p>
          </div>
          <div className="caption-div">
            <h3 className="caption">Chill in the fridge 🥶</h3>
            <p className="caption-text">
              Your wrapped food is now ready to be placed in the refrigerator for storage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroVideo;
