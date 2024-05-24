import './page.css';

export const metadata = {
  title: 'Use & Care',
  description: 'Maintaining your products.'
};

export default async function useCarePage() {
  return (
    <>
      <h1 className="page-title m-0 pl-4 text-left text-5xl font-extrabold text-customDarkGreen">
        Use & Care <br /> Instructions
      </h1>
      <p className="page-text m-0 pl-4 text-left text-xl font-normal text-customGrey">
        The best care for your item so you can use them over and over. And over, again.
      </p>
      <div className="cards flex flex-wrap justify-around p-4">
        <div className="flip-card first m-[0.75rem] h-[250px] w-[400px] bg-transparent">
          <div className="flip-card-inner relative flex h-[100%] w-[100%] text-left">
            <div className="flip-card-front">
              <p className="title m-0 text-left text-[2em] font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Beeswax Wrap (USE)
              </p>
            </div>
            <div className="flip-card-back">
              <p className="title m-0 text-left text-[2em] font-black">Beeswax Wrap (USE)</p>
              <p>
                Use the heat of your hands to mould the wrap, stick it together and seal.
                <br />
                Use to wrap food, cover bowls and jars.
                <br />
                Fridge and freezer safe, just let it warm up a moment before unfolding.
                <br />
                Do not use with raw meat or fish.
                <br />
                Do not use in the microwave, or any other heat source.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card second m-[0.75rem] h-[250px] w-[400px] bg-transparent">
          <div className="flip-card-inner relative flex h-[100%] w-[100%] text-left">
            <div className="flip-card-front">
              <p className="title m-0 text-left text-[2em] font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Beeswax Wrap (CARE)
              </p>
            </div>
            <div className="flip-card-back">
              <p className="title m-0 text-left text-[2em] font-black">Beeswax Wrap (CARE)</p>
              <p>
                Wash with cool water and a sponge or cloth, using a light touch. Use mild dish soap
                if necessary.
                <br />
                Store in a cool, dry place ensuring they are dry before storage.
                <br />
                Can be stored folded, rolled, or unwrapped
                <br />
                Do not put in washing machine or dishwasher
                <br />
                Do not use heat, hot water and do not wring out
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card fourth m-[0.75rem] h-[250px] w-[400px] bg-transparent">
          <div className="flip-card-inner relative flex h-[100%] w-[100%] text-left">
            <div className="flip-card-front">
              <p className="title m-0 text-left text-[2em] font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Sandwich and Snack Bags
              </p>
            </div>
            <div className="flip-card-back">
              <div className="mb-10">
                <p className="title m-0 text-left text-[2em] font-black">Sandwich and Snack Bags</p>
                <p>
                  Use to store dry or damp snacks and sandwiches.
                  <br />
                  Hand wash with warm water and dish soap or wash on 30 degrees with like colours.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card fifth m-[0.75rem] h-[250px] w-[400px] bg-transparent">
          <div className="flip-card-inner relative flex h-[100%] w-[100%] text-left">
            <div className="flip-card-front">
              <p className="title m-0 text-left text-[2em] font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Cloth Napkins
              </p>
            </div>
            <div className="flip-card-back">
              <div className="mb-10">
                <p className="title m-0 text-left text-[2em] font-black">Cloth Napkins</p>
                <p>
                  Pre-treat stains by rinsing with cold water after they occur and before washing.
                  <br />
                  Wash with like colours, can tumble dry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card third m-[0.75rem] h-[250px] w-[400px] bg-transparent">
          <div className="flip-card-inner relative flex h-[100%] w-[100%] text-left">
            <div className="flip-card-front">
              <p className="title m-0 text-left text-[2em] font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                Re-useable Kitchen Roll
              </p>
            </div>
            <div className="flip-card-back">
              <div className="mb-10">
                <p className="title m-0 text-left text-[2em] font-black">Re-useable Kitchen Roll</p>
                <p>
                  Use like any other kitchen roll to wipe up spills.
                  <br />
                  To prevent stains, rinse before laundering.
                  <br />
                  Wash with like colours, can tumble dry.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flip-card sixth m-[0.75rem] h-[250px] w-[400px] bg-transparent">
          <div className="flip-card-inner relative flex h-[100%] w-[100%] text-left">
            <div className="flip-card-front">
              <p className="title m-0 text-left text-[2em] font-black"></p>
            </div>
            <div className="flip-card-back">
              <p className="title m-0 text-left text-[2em] font-black">BACK</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
