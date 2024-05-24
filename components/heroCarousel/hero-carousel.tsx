import Link from 'next/link';
import './hero-carousel.css';

export async function HeroCarousel() {
  return (
    <section
      className="carousel relative h-[100vh] max-h-[550px] w-[100%] rounded-lg md:flex md:max-h-[600px] md:justify-center"
      aria-label="Gallery"
    >
      <ol className="carousel__viewport absolute bottom-0 left-0 right-0 top-0 flex snap-x snap-mandatory overflow-x-scroll scroll-smooth ">
        <li
          id="carousel__slide1"
          tabIndex={0}
          className="carousel__slide relative w-[100%] flex-shrink-0 flex-grow-0 basis-full"
        >
          <div className="carousel__snapper">
            <div className=" hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center md:flex-col md:items-start md:justify-center md:p-11">
              <h2 className="hero-big-text m-4 text-center text-xl font-bold md:m-0 md:text-left md:text-5xl md:font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-lg border-none bg-customDarkGreen px-4 py-2 text-sm font-bold text-white md:order-2 md:h-[62px] md:w-[310px] md:text-base">
                <Link href="/search">Shop Now</Link>
              </button>
              <p className="hero-small-text order-2 mb-4 mt-4 text-center text-base font-light underline md:order-1">
                <Link href="/about">Find out more</Link>
              </p>
            </div>
            <a href="#carousel__slide4" className="carousel__prev"></a>
            <a href="#carousel__slide2" className="carousel__next"></a>
          </div>
        </li>
        <li
          id="carousel__slide2"
          tabIndex={0}
          className="carousel__slide relative w-[100%] flex-shrink-0 flex-grow-0 basis-full"
        >
          <div className="carousel__snapper">
            <div className="hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center md:flex-col md:items-start md:justify-center md:p-11">
              <h2 className="hero-big-text m-4 text-center text-2xl font-bold md:m-0 md:text-left md:text-5xl md:font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-lg border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:h-[62px] md:w-[310px] md:text-base">
                Shop Now
              </button>
              <p className="hero-small-text order-2 mb-4 mt-4 text-center text-sm font-light underline md:order-1">
                Find out more
              </p>
            </div>
            <a href="#carousel__slide1" className="carousel__prev"></a>
            <a href="#carousel__slide3" className="carousel__next"></a>
          </div>
        </li>
        <li
          id="carousel__slide3"
          tabIndex={0}
          className="carousel__slide relative w-[100%] flex-shrink-0 flex-grow-0 basis-full"
        >
          <div className="carousel__snapper">
            <div className="hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center md:flex-col md:items-start md:justify-center md:p-11">
              <h2 className="hero-big-text m-4 text-center text-2xl font-bold md:m-0 md:text-left md:text-4xl md:font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-lg border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:h-[62px] md:w-[310px] md:text-base">
                Shop Now
              </button>
              <p className="hero-small-text order-2 mb-4 mt-4 text-center text-base font-light underline md:order-1">
                Find out more
              </p>
            </div>
            <a href="#carousel__slide2" className="carousel__prev"></a>
            <a href="#carousel__slide4" className="carousel__next"></a>
          </div>
        </li>
        <li
          id="carousel__slide4"
          tabIndex={0}
          className="carousel__slide relative w-[100%] flex-shrink-0 flex-grow-0 basis-full"
        >
          <div className="carousel__snapper">
            <div className="hero-text absolute flex h-[100%] w-[100%] flex-col items-center justify-center md:flex-col md:items-start md:justify-center md:p-11">
              <h2 className="hero-big-text m-4 text-center text-2xl font-bold md:m-0 md:text-left md:text-4xl md:font-bold">
                Plastic Free
                <br />
                Zero Waste
                <br />
                Locally Sourced
              </h2>
              <button className="shop_now_button order-1 cursor-pointer rounded-lg border-none bg-customDarkGreen px-4 py-2 text-base font-bold text-white md:order-2 md:h-[62px] md:w-[310px] md:text-base">
                Shop Now
              </button>
              <p className="hero-small-text order-2 mb-4 mt-4 text-center text-sm font-light underline md:order-1">
                Find out more
              </p>
            </div>
            <a href="#carousel__slide3" className="carousel__prev"></a>
            <a href="#carousel__slide1" className="carousel__next"></a>
          </div>
        </li>
      </ol>
      <aside className="carousel__navigation">
        <ol className="carousel__navigation-list inline-block">
          <li className="carousel__navigation-item inline-block">
            <a
              href="#carousel__slide1"
              className="carousel__navigation-button inline-block h-6 w-6 rounded-full border-4 border-solid border-transparent bg-transparent bg-clip-content transition-transform duration-100 "
            >
              Go to slide 1
            </a>
          </li>
          <li className="carousel__navigation-item inline-block">
            <a
              href="#carousel__slide2"
              className="carousel__navigation-button inline-block h-6 w-6 rounded-full border-4 border-solid border-transparent bg-transparent bg-clip-content transition-transform duration-100"
            >
              Go to slide 2
            </a>
          </li>
          <li className="carousel__navigation-item inline-block">
            <a
              href="#carousel__slide3"
              className="carousel__navigation-button inline-block h-6 w-6 rounded-full border-4 border-solid border-transparent bg-transparent bg-clip-content transition-transform duration-100"
            >
              Go to slide 3
            </a>
          </li>
          <li className="carousel__navigation-item inline-block">
            <a
              href="#carousel__slide4"
              className="carousel__navigation-button inline-block h-6 w-6 rounded-full border-4 border-solid border-transparent bg-transparent bg-clip-content transition-transform duration-100"
            >
              Go to slide 4
            </a>
          </li>
        </ol>
      </aside>
    </section>
  );
}
