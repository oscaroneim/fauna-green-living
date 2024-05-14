import './page.css';

export const metadata = {
  title: 'Use & Care',
  description: 'Maintaining your products.'
};

export default async function useCarePage() {
  return (
    <>
      <h1 className="page-title">
        Use & Care <br /> Instructions
      </h1>
      <p className="page-text">
        The best care for your item so you can use them over and over. And over, again.
      </p>
      <div className="cards">
        <div className="flip-card first">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Beeswax Wrap (USE)</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Beeswax Wrap (USE)</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flip-card second">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Besswax Wrap (CARE)</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Besswax Wrap (CARE)</p>
              <p></p>
            </div>
          </div>
        </div>
        <div className="flip-card third">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Re-useable Kitchen Roll</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Re-useable Kitchen Roll</p>
              <p>
                Use like any ther kitchen roll to wipe up spills.
                <br />
                To prevent stains, rinse before laundering.
                <br />
                Wash with like colours, can tumble dry.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card fourth">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Sandwich and Snack Bags</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Sandwich and Snack Bags</p>
              <p>
                Use to store dry or damp snacks and sandwiches.
                <br />
                Hand wash with warm water and dish soap or wash on 30 degrees with like colours.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card fifth">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title">Cloth Napkins</p>
            </div>
            <div className="flip-card-back">
              <p className="title">Cloth Napkins</p>
              <p>
                Pretreat stains by rinsing with cold water after they occur and before washing.
                <br />
                Wash with like colours, can tumble dry.
              </p>
            </div>
          </div>
        </div>
        <div className="flip-card sixth">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <p className="title"></p>
            </div>
            <div className="flip-card-back">
              <p className="title">BACK</p>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
