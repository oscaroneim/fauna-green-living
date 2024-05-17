import './hero-carousel.css';

export async function HeroCarousel() {
  return (
    <section
      className="carousel relative h-[100vh] max-h-[550px] w-[100%] rounded"
      aria-label="Gallery"
    >
      <ol className="carousel__viewport absolute bottom-0 left-0 right-0 top-0 flex snap-x snap-mandatory overflow-x-scroll scroll-smooth ">
        <li id="carousel__slide1" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className=" hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center">
              <h2 className="hero-big-text m-4 text-center text-2xl font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white">
                Shop Now
              </button>
              <p className="hero-small-text order-2 mb-4 text-center text-sm font-light underline">
                Find out more
              </p>
            </div>
            <a href="#carousel__slide4" className="carousel__prev"></a>
            <a href="#carousel__slide2" className="carousel__next"></a>
          </div>
        </li>
        <li id="carousel__slide2" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className="hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center">
              <h2 className="hero-big-text m-4 text-center text-2xl font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white">
                Shop Now
              </button>
              <p className="hero-small-text order-2 mb-4 text-center text-sm font-light underline">
                Find out more
              </p>
            </div>
            <a href="#carousel__slide1" className="carousel__prev"></a>
            <a href="#carousel__slide3" className="carousel__next"></a>
          </div>
        </li>
        <li id="carousel__slide3" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className="hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center">
              <h2 className="hero-big-text m-4 text-center text-2xl font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white">
                Shop Now
              </button>
              <p className="hero-small-text order-2 mb-4 text-center text-sm font-light underline">
                Find out more
              </p>
            </div>
            <a href="#carousel__slide2" className="carousel__prev"></a>
            <a href="#carousel__slide4" className="carousel__next"></a>
          </div>
        </li>
        <li id="carousel__slide4" tabIndex={0} className="carousel__slide">
          <div className="carousel__snapper">
            <div className="hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center">
              <h2 className="hero-big-text m-4 text-center text-2xl font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-md border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white">
                Shop Now
              </button>
              <p className="hero-small-text order-2 mb-4 text-center text-sm font-light underline">
                Find out more
              </p>
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
