import React from 'react';
import Link from 'next/link';
import { Heading } from './styles';

const Header: React.FC = () => {
  return (
    <Heading>
      <Link href="/">
        <h1>Discounter</h1>
      </Link>
    </Heading>
  );
};

export default Header;
