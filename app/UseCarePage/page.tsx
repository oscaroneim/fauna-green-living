import 'app/UseCarePage/page.css';
import 'react';

export const metadata = {
  title: 'Use & Care',
  description: 'Maintaining your products.'
};

export default async function useCarePage() {
  return (
    <>
      <h1>Use & Care</h1>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <p className="title">FLIP CARD</p>
            <p>Hover Me</p>
          </div>
          <div className="flip-card-back">
            <p className="title">BACK</p>
            <p>Leave Me</p>
          </div>
        </div>
      </div>
    </>
  );
}
