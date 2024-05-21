'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const PLASTIC_STATS = { sqmPlastic: 24_356, singlePlastic: 10_322, cpFree: 100 };
const INITIAL_STATS = { sqmPlastic: 0, singlePlastic: 0, cpFree: 0 };
const getNextStat = (prevValue: number, property: keyof typeof INITIAL_STATS) => {
  const increment = Math.round(PLASTIC_STATS[property] / 20);
  return prevValue + increment;
};

export default function PlasticWasteStats() {
  const [stats, setStats] = useState(INITIAL_STATS);

  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView || stats.cpFree > 0) return;
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
  }, [inView]);

  return (
    <div className="space-y-8 rounded-lg bg-customGreen p-16 text-center text-black">
      <h2 className="text-5xl font-medium text-white">Turning the Tide.</h2>

      <div className="flex gap-x-8 gap-y-10 text-xl max-md:flex-col">
        <div className="flex-1 rounded-lg bg-white p-10 py-12">
          <h3 className="md:basis-1/3">
            <p ref={ref} className="text-4xl">
              {stats.sqmPlastic}
              <hr className="mx-auto my-4 h-px w-20 border-0 bg-gray-200 dark:bg-gray-700" />
            </p>{' '}
            sqm plastic reduced from landfill and ocean
          </h3>
        </div>

        <div className="flex-1 rounded-lg bg-white p-10 py-12">
          <h3 className="md:basis-1/3">
            <p className="text-4xl">{stats.singlePlastic}</p>
            <hr className="mx-auto my-4 h-px w-20 border-0 bg-gray-200 dark:bg-gray-700" />
            single use plastic reduced{' '}
          </h3>
        </div>

        <div className="flex-1 rounded-lg bg-white p-10 py-12">
          <h3 className="md:basis-1/3">
            <p className="text-4xl">{stats.cpFree}%</p>
            <hr className="mx-auto my-4 h-px w-20 border-0 bg-gray-200 dark:bg-gray-700" />
            cotton, plastic free and home compostable
          </h3>
        </div>
      </div>
    </div>
  );
}
