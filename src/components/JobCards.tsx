/* eslint-disable unused-imports/no-unused-vars */
import Data from 'data.json';
import Image, { StaticImageData } from 'next/image';
import React, { useState } from 'react';
import theme from 'tailwind.config';

interface jobs {
  id: number;
  company: string;
  logo: StaticImageData;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: [];
  tools: [];
}

function JobCards() {
  /*   const [data, setData] = useState<jobs>(); */
  const [search, setSearch] = useState('');
  /*   const [q, setQ] = useState('');
  const [searchParam] = useState([
    'position',
    'contract',
    'location',
    'tools',
    'level',
  ]);
 */

  return (
    <div className='m-4 flex flex-col items-center gap-4'>
      <div>filter</div>
      <input
        type='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {Data?.map((jobs) => {
        return (
          <>
            <div
              className='flex flex-wrap justify-between gap-4 rounded border-l-4 border-l-jbprimary bg-slate-50 p-4 shadow-sm shadow-jbprimary sm:w-full sm:flex-col  md:w-2/3  md:flex-row'
              key={jobs.id}
            >
              <div className='sm:w-sm flex flex-wrap gap-4 p-2 sm:flex-col md:flex-row'>
                <span>
                  {theme.screen === 'sm' ? (
                    <Image
                      src={jobs.logo}
                      alt='companyName'
                      width={30}
                      height={30}
                      className='w-sm'
                    />
                  ) : (
                    <Image
                      src={jobs.logo}
                      alt='companyName'
                      width={100}
                      height={100}
                      className='w-lg'
                    />
                  )}
                </span>

                <div className='flex flex-col flex-wrap gap-4'>
                  <span className='flex items-center gap-2 '>
                    <p>j{jobs.company}</p>
                    <span className='mx-2 rounded-full bg-jbprimary'>
                      <p className='mx-2 '> New!</p>
                    </span>
                    <span>Featured</span>
                  </span>
                  <span className='font-bold'>
                    <p>{jobs.role}</p>
                  </span>
                  <span className='flex gap-2 text-gray-400'>
                    <li className='text-xs'>1day ago</li>
                    <li className='text-xs'>{jobs.contract}</li>
                    <li className='text-xs'>País</li>
                  </span>
                  <hr />
                </div>
              </div>{' '}
              <div>
                <button className='rounded bg-teal-400 text-jbprimary'>
                  <p className='z-10 mx-2 border-none p-1 font-bold text-slate-50'>
                    {' '}
                    Front End
                  </p>
                </button>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default JobCards;
