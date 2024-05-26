'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PLASTIC_STATS = { homesHelped: 2000, singlePlastic: 100, clingFilmPrevented: 200 };
const INITIAL_STATS = { homesHelped: 0, singlePlastic: 0, clingFilmPrevented: 0 };
const getNextStat = (prevValue: number, property: keyof typeof INITIAL_STATS) => {
  const increment = Math.round(PLASTIC_STATS[property] / 20);
  return prevValue + increment;
};

export default function PlasticWasteStats() {
  const [stats, setStats] = useState(INITIAL_STATS);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView || stats.clingFilmPrevented > 0) return;
    const countUp = setInterval(() => {
      setStats((prev) => {
        if (prev.clingFilmPrevented < 200) {
          const newStats = {
            homesHelped: getNextStat(prev.homesHelped, 'homesHelped'),
            singlePlastic: getNextStat(prev.singlePlastic, 'singlePlastic'),
            clingFilmPrevented: getNextStat(prev.clingFilmPrevented, 'clingFilmPrevented')
          };
          return newStats;
        }

        clearInterval(countUp);
        return PLASTIC_STATS;
      });
    }, 50);
    return () => {
      clearInterval(countUp);
    };
  }, [inView]);

  return (
    <div className="space-y-8 rounded-lg bg-ocean bg-cover p-6 text-center text-white">
      <h2 className="text-5xl font-medium text-white">Turning the Tide</h2>

      <div className="flex gap-x-8 gap-y-12  text-xl max-md:flex-col md:gap-y-16">
        <div className=" flex-1 rounded-lg">
          <h3 className="pb-1 md:basis-1/3">
            <p ref={ref} className="text-3xl">
              {stats.homesHelped}+
            </p>{' '}
            homes we have helped ditch cling film
          </h3>
        </div>

        <div className="flex-1 rounded-lg">
          <h3 className="pb-1 md:basis-1/3">
            <p className="text-3xl">{stats.singlePlastic}%</p>
            single use plastic free{' '}
          </h3>
        </div>

        <div className=" flex-1 rounded-lg">
          <h3 className="pb-1 md:basis-1/3">
            <p className="text-3xl">{stats.clingFilmPrevented} m&#x2BD0; </p>
            cling film prevented from going into the ocean or landfill
          </h3>
        </div>
      </div>
    </div>
  );
}
