/* eslint-disable unused-imports/no-unused-vars */
import axios from 'axios';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect } from 'react';

interface btnFilters {
  name: string;
  value: string;
}
export interface Jobs {
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
const jobs: Jobs[] = [];

function JobCards() {
  const [search, setSearch] = React.useState('');
  const [getJobs, setGetJobs]: [Jobs[], (jobs: Jobs[]) => void] =
    React.useState(jobs);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] =
    React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] =
    React.useState('');

  useEffect(() => {
    axios
      .get<Jobs[]>(
        'https://my-json-server.typicode.com/ingredisilva/dbjobs/jobs',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((Response) => {
        setGetJobs(Response.data);
        setLoading(false);
      });
  }, []);

  const btnFilters = [
    {
      name: 'Position',
      value: 'position',
    },
    { name: 'Contract', value: 'contract' },
    {
      name: 'Location',
      value: 'location',
    },
    {
      name: 'Tools',
      value: 'tools',
    },
    {
      name: 'Level',
      value: 'level',
    },
  ];

  const filter = [];

  return (
    <div className='m-4 flex flex-col items-center gap-4'>
      <div>filter</div>
      <input
        type='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {getJobs.map((items) => {
        return (
          <>
            <div
              className='flex flex-wrap justify-between gap-4 rounded border-l-4 border-l-jbprimary bg-slate-50 p-4 shadow-sm shadow-jbprimary sm:w-full sm:flex-col  md:w-2/3  md:flex-row'
              key={items.id}
            >
              <div className='sm:w-sm flex flex-wrap gap-4 p-2 sm:flex-col md:flex-row'>
                <span>
                  <Image
                    src={items.logo}
                    alt='companyName'
                    width={30}
                    height={30}
                    className='w-sm'
                  />
                </span>

                <div className='flex flex-col flex-wrap gap-4'>
                  <span className='flex items-center gap-2 '>
                    <p>{items.company}</p>
                    <span className='mx-2 rounded-full bg-jbprimary'>
                      <p className='mx-2 '> New!</p>
                    </span>
                    <span>Featured</span>
                  </span>
                  <span className='font-bold'>
                    <p>{items.role}</p>
                  </span>
                  <span className='flex gap-2 text-gray-400'>
                    <li className='text-xs'>{items.postedAt}</li>
                    <li className='text-xs'>{items.contract}</li>
                    <li className='text-xs'>País</li>
                  </span>
                  <hr />
                </div>
              </div>{' '}
              <div>
                {/*  {btnFilters.map((btn) => {
                    return (
                      <Filter
                        onClick={handleFilter}
                        buttonName={btn.name}
                        value={btn.value}
                        key={items.id}
                      />
                    );
                  })} */}
              </div>
            </div>
          </>
        );
      })}
      {error && <p className='text-red-600'>{error}</p>}
    </div>
  );
}

export default JobCards;
