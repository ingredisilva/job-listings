import React from 'react';

interface Props {
  button?: unknown;
  filter: () => void;
  onClick: unknown;
}

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
            /*  onClick={() => filter(btn)} */
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
