import React from 'react';

interface Props {
  buttonName: string;
  value: string;
  onClick: () => void;
}

function Filter({ buttonName }: Props) {
  return (
    <div>
      <button className='rounded bg-teal-400 text-jbprimary'>
        <p className='z-10 mx-2 border-none p-1 font-bold text-slate-50'>
          {buttonName}
        </p>
      </button>
    </div>
  );
}

export default Filter;
