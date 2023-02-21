/* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/*@ts-ignore */
import axios from 'axios';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

import Filter from '@/components/Filter';
import GetJobs from '@/components/GetJobs';

interface btnFilters {
  name: string;
  type: string;
}
export interface Jobs {
  type: string;
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
  /*   const [search, setSearch] = React.useState(''); */
  const [menuItem, setMenuItem]: [Jobs[], (jobs: Jobs[]) => void] =
    React.useState(jobs);
  const [itemsForFilter, setItemsForFilter] = useState<Array<Jobs>>();
  const [buttons, setButtons] = useState<string[]>([]);
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
        setMenuItem(Response.data);
        setItemsForFilter(Response.data);
        setLoading(false);
      });
  }, []);

  /*  const filters = ['position', 'location', 'contract', 'tools', 'level']; */

  const filters = ['Junior', 'Midweight', 'Senior'];

  /*  const handleFilter = getJobs.filter((filterItems) => {
    if (filterItems === btnFilter.name) {
      return;
    }
    return <Filter buttonName={btnFilter.n} />;
  }); */
  /*  const allCategories = ['All', ...new Set(jobs.map((item) => item))]; */

  const filter = (button: string) => {
    /*   if (button === 'All') {
      setMenuItem(jobs);
      return;
    } */
    const newItems = menuItem;
    const filteredData = newItems.filter(
      (item) => item.level.toLowerCase() === button
    );

    setItemsForFilter(filteredData);
  };

  return (
    <div className='m-4 flex flex-col items-center gap-4'>
      <div>filter</div>
      <div>
        <Filter button={buttons} filter={filter} />
      </div>

      <div></div>

      <>
        <div
          className='flex flex-wrap justify-between gap-4 rounded border-l-4 border-l-jbprimary
                 bg-slate-50 p-4 shadow-sm shadow-jbprimary sm:w-full sm:flex-col  md:w-2/3  md:flex-row'
        >
          {!loading && itemsForFilter
            ? itemsForFilter.map((item) => (
                <GetJobs menuItem={item} key={item.id} />
              ))
            : '...Loading'}
        </div>
      </>

      {error && <p className='text-red-600'>{error}</p>}
    </div>
  );
}

export default JobCards;
