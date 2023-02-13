import * as React from 'react';

import HeaderCom from '@/components/HeaderCom';

const links = [
  { href: '/', label: 'Route 1' },
  { href: '/', label: 'Route 2' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-50 bg-white'>
      <HeaderCom />
    </header>
  );
}
