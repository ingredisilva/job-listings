/* eslint-disable unused-imports/no-unused-vars */

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/*@ts-ignore */
import React from 'react';

interface Props {
  button?: unknown;
  filter: (value: string) => void;
}

const btnFilters = [
  /*   {
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
  }, */

  {
    name: 'Junior',
    value: 'junior',
  },
  {
    name: 'Midweight',
    value: 'midweight',
  },
  {
    name: 'Senior',
    value: 'senior',
  },
];

// eslint-disable-next-line unused-imports/no-unused-vars
function Filter({ filter }: Props) {
  return (
    <div>
      {btnFilters.map((btn, index) => {
        return (
          <button
            key={index}
            type='button'
            className='rounded bg-teal-200 text-jbprimary'
            onClick={() => filter(btn.value)}
          >
            <p className='z-10 mx-2 border-none p-1 font-bold text-slate-50'>
              {btn.name}
            </p>
          </button>
        );
      })}
    </div>
  );
}

export default Filter;
