import * as React from 'react';

import HeaderCom from '@/components/HeaderCom';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeaderCom />
      {children}
    </>
  );
}
