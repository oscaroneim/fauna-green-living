import './Herovideo.css';

const HeroVideo = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="container flex justify-center lg:gap-4">
        <div className="videodiv">
          <video className="rounded-lg " controls autoPlay muted>
            <source src="videos/Sandwitch-wrap.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="hello-all rounded-md">
          <h2 className="titlehead text-5xl">HOW IT WORKS</h2>
          <div className="videodiv-mobile">
            <video controls autoPlay muted>
              <source src="videos/Sandwitch-wrap.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
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
