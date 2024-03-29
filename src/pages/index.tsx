import * as React from 'react';

import JobCards from '@/components/JobCards';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <JobCards />
    </Layout>
  );
}
