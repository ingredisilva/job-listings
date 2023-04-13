import Image from 'next/image';

import Filters from '@/components/Filter';
import { Job } from '@/components/JobCards';
interface GetJobsProps {
  menuItem: Job;
  filter: (button: string) => void;
  activeButton: string[];
}

const GetJobs = ({ menuItem, filter, activeButton }: GetJobsProps) => {
  const {
    company,

    new: newJob,
    featured,
    position,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = menuItem;

  const allButtons = [level, ...languages, ...tools];

  return (
    <div className='layout bg-jbprimary-light shadow-jbprimary-light m-2 flex w-full  gap-4 rounded-lg  border-l-8 border-l-jbprimary bg-slate-50 p-4 shadow-lg sm:flex-grow-0'>
      <div className='flex w-full flex-wrap items-center justify-between gap-4 p-6'>
        <div className='flex-shrink-0'>
          <Image src={menuItem.logo} alt={company} width={100} height={100} />
        </div>
        <div className='flex-grow'>
          <div className='flex items-center gap-4'>
            <p className='font-bold text-jbprimary'>{company}</p>
            {newJob && (
              <span className='bg-jbprimary-light rounded-full py-1 px-2 font-bold text-jbprimary'>
                NEW!
              </span>
            )}
            {featured && (
              <span className='rounded-full bg-jbprimary py-1 px-2 font-bold text-slate-50'>
                FEATURED
              </span>
            )}
          </div>
          <p className='my-2 text-lg font-bold'>{position}</p>
          <div className='flex items-center gap-2'>
            <p>{postedAt}</p>
            <span>&middot;</span>
            <p>{contract}</p>
            <span>&middot;</span>
            <p>{location}</p>
          </div>
        </div>
        <div className='flex-end flex flex-wrap gap-4'>
          {allButtons.map((button) => (
            <Filters
              key={button}
              buttonValue={button}
              filter={filter}
              active={activeButton.includes(button)}
            />
          ))}
        </div>
      </div>
      <hr className='my-4' />
    </div>
  );
};

export default GetJobs;
