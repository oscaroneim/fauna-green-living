import './hero-carousel.css';

export async function HeroCarousel() {
  return (
    <section className="carousel" aria-label="Gallery">
      <ol className="carousel__viewport">
        <li id="carousel__slide1" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className="hero-text">
              <h2 className="hero-big-text">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button">Shop Now</button>
              <p className="hero-small-text">Find out more</p>
            </div>
            <a href="#carousel__slide4" className="carousel__prev"></a>
            <a href="#carousel__slide2" className="carousel__next"></a>
          </div>
        </li>
        <li id="carousel__slide2" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className="hero-text">
              <h2 className="hero-big-text">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button">Shop Now</button>
              <p className="hero-small-text">Find out more</p>
            </div>
            <a href="#carousel__slide1" className="carousel__prev"></a>
            <a href="#carousel__slide3" className="carousel__next"></a>
          </div>
        </li>
        <li id="carousel__slide3" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className="hero-text">
              <h2 className="hero-big-text">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button">Shop Now</button>
              <p className="hero-small-text">Find out more</p>
            </div>
            <a href="#carousel__slide2" className="carousel__prev"></a>
            <a href="#carousel__slide4" className="carousel__next"></a>
          </div>
        </li>
        <li id="carousel__slide4" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className="hero-text">
              <h2 className="hero-big-text">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button">Shop Now</button>
              <p className="hero-small-text">Find out more</p>
            </div>
            <a href="#carousel__slide3" className="carousel__prev"></a>
            <a href="#carousel__slide1" className="carousel__next"></a>
          </div>
        </li>
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list">
          <li className="carousel__navigation-item">
            <a href="#carousel__slide1" className="carousel__navigation-button">
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide2" className="carousel__navigation-button">
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide3" className="carousel__navigation-button">
              Go to slide 3
            </a>
          </li>
          <li className="carousel__navigation-item">
            <a href="#carousel__slide4" className="carousel__navigation-button">
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
}
