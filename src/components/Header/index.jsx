import React from 'react';
import { Nav } from './style';
import { FaHome } from 'react-icons/fa';

const Index = () => {
  return (
    <div>
      <Nav>
        <a>
          <FaHome /> Home
        </a>
      </Nav>
    </div>
  );
};

export default Index;
