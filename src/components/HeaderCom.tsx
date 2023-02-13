/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import BGHeader from 'public/images/bg-header-desktop.png';
import React from 'react';

function Header() {
  return (
    <div className='flex w-full items-center justify-center'>
      <Image src={BGHeader} alt='header' width={2000} height={156} />
    </div>
  );
}

export default Header;
