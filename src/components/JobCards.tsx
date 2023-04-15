/* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/*@ts-ignore */
import axios from 'axios';
import { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

import GetJobs from '@/components/GetJobs';
interface MenuItem {
  level: string;
  languages: string[];
}

export interface Job {
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
  languages: string[];
  tools: string[];
}

const Jobs: Job[] = [];

const levels = ['junior', 'midweight', 'senior'];
const langs = ['javascript', 'python', 'css', 'scss'];
interface ActiveFiltersProps {
  filters: string[];
  onFilterRemove: (filter: string) => void;
}

const ActiveFilters = ({ filters, onFilterRemove }: ActiveFiltersProps) => {
  const handleFilterRemove = (filter: string) => {
    onFilterRemove(filter);
  };

  return (
    <div className='layout relative top-[-22px] flex w-full justify-between rounded-lg border border-primary-50 bg-slate-50 p-4 shadow-lg'>
      <div className='mx-4 flex flex-wrap gap-4 p-2'>
        {filters.map((filter) => (
          <button
            key={filter}
            className='flex items-center gap-2 rounded bg-green-50 font-bold text-jbprimary'
            onClick={() => handleFilterRemove(filter)}
          >
            <span>{filter}</span>
            <span className='flex h-full w-4 items-center justify-center rounded-r bg-[#5CA5A5] text-white'>
              x
            </span>
          </button>
        ))}
      </div>
      <button
        className='font-bold hover:underline'
        onClick={() => onFilterRemove(filters[0])}
      >
        Limpar
      </button>
    </div>
  );
};

function JobCards() {
  const [activeButton, setActiveButton] = useState<string[]>([]);
  const [menuItem, setMenuItem] = useState<Job[]>(Jobs);
  const [itemsForFilter, setItemsForFilter] = useState<Job[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    axios
      .get<Job[]>(
        'https://my-json-server.typicode.com/ingredisilva/dbjobs/jobs',
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        setMenuItem(response.data);
        setItemsForFilter(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const filter = (button: string) => {
    const lowercaseButton = button.toLowerCase();

    const filteredData = menuItem.filter((item: Job) => {
      const lowercaseLanguages = item.languages.map((language) =>
        language.toLowerCase()
      );

      return (
        item.level.toLowerCase() === lowercaseButton ||
        lowercaseLanguages.some((language) => language === lowercaseButton)
      );
    });

    setItemsForFilter(filteredData);
    setActiveButton((prevActiveFilters) =>
      prevActiveFilters.includes(button)
        ? prevActiveFilters.filter((filter) => filter !== button)
        : [...prevActiveFilters, button]
    );
  };

  const removeButton = (buttonValue: string) => {
    const updatedButtons = activeButton.filter((item) => item !== buttonValue);
    setActiveButton(updatedButtons);
    if (updatedButtons.length === 0) {
      setItemsForFilter(menuItem);
    }
  };

  return (
    <div className=''>
      <div className=''>
        {activeButton.length > 0 && (
          <ActiveFilters filters={activeButton} onFilterRemove={removeButton} />
        )}
      </div>

      <div className='flex flex-wrap items-center justify-center '>
        {!loading && itemsForFilter
          ? itemsForFilter.map((item) => (
              <GetJobs
                menuItem={item}
                key={item.id}
                filter={filter}
                activeButton={[]}
              />
            ))
          : '...Loading'}
      </div>
      {error && <p className='text-red-600'>{error}</p>}
    </div>
  );
}

export default JobCards;
