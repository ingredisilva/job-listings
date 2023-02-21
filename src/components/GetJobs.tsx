import Image, { StaticImageData } from 'next/image';
import React from 'react';

type Props = {
  menuItem: {
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
  };
};

function GetJobs({ menuItem }: Props) {
  return (
    <div className='sm:w-sm flex flex-wrap gap-4 p-2 sm:flex-col md:flex-row'>
      <span>
        <Image
          src={menuItem.logo}
          alt='companyName'
          width={30}
          height={30}
          className='w-sm'
        />
      </span>
      <div className='flex flex-col flex-wrap gap-4'>
        <span className='flex items-center gap-2 '>
          <p>{menuItem.company}</p>
          <span className='mx-2 rounded-full bg-jbprimary'>
            <p className='mx-2 '>{menuItem.new}</p>
          </span>
          <span>{menuItem.featured}</span>
        </span>
        <span className='font-bold'>
          <p>{menuItem.role}</p>
        </span>
        <span className='flex gap-2 text-gray-400'>
          <li className='text-xs'>{menuItem.postedAt}</li>
          <li className='text-xs'>{menuItem.contract}</li>
          <li className='text-xs'>{menuItem.location}</li>
        </span>
      </div>
      <hr />
    </div>
  );
}

export default GetJobs;
