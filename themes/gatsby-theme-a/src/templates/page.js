import React from 'react';
import Foo from '../components/foo';

const Page = () => (
  <React.Fragment>
    <h1>Component Shadowing Test</h1>
    <Foo />
  </React.Fragment>
);

export default Page;
