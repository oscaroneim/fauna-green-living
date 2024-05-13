'use client';

import { useEffect, useState } from 'react';

const PLASTIC_STATS = { sqmPlastic: 24_356, singlePlastic: 10_322, cpFree: 100 };
const INITIAL_STATS = { sqmPlastic: 0, singlePlastic: 0, cpFree: 0 };
const getNextStat = (prevValue: number, property: keyof typeof INITIAL_STATS) => {
  const increment = Math.round(PLASTIC_STATS[property] / 20);
  return prevValue + increment;
};

export default function PlasticWasteStats() {
  const [stats, setStats] = useState(INITIAL_STATS);
  useEffect(() => {
    const countUp = setInterval(() => {
      setStats((prev) => {
        if (prev.cpFree < 100) {
          const newStats = {
            sqmPlastic: getNextStat(prev.sqmPlastic, 'sqmPlastic'),
            singlePlastic: getNextStat(prev.singlePlastic, 'singlePlastic'),
            cpFree: getNextStat(prev.cpFree, 'cpFree')
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
  }, []);

  return (
    <div className="space-y-8 rounded-lg bg-customGreen p-16 text-center text-white">
      <h2 className="text-5xl font-medium">Turning the Tide</h2>
      <div className="flex gap-x-8 gap-y-10 text-xl max-md:flex-col">
        <h3 className="md:basis-1/3">
          <p className="text-4xl">{stats.sqmPlastic}</p> sqm plastic reduced from landfill and ocean
        </h3>
        <h3 className="md:basis-1/3">
          <p className="text-4xl">{stats.singlePlastic}</p>single use plastic reduced{' '}
        </h3>
        <h3 className="md:basis-1/3">
          <p className="text-4xl">{stats.cpFree}%</p>cotton, plastic free and home compostable
        </h3>
      </div>
    </div>
  );
}
