import React from 'react';
import { Nav } from './style';
import { FaHome, FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Index = () => {
  const botaoClicado = useSelector((state) => state.exemple.botaoClidado);

  return (
    <div>
      <Nav>
        <Link to="/">
          <FaHome size={24} fill="white" /> <span>Home</span>
        </Link>
        <Link to="/test">
          <FaPlus size={24} fill="white" /> <span>404</span>
        </Link>
        {botaoClicado ? 'clicado' : 'não clicado'}
      </Nav>
    </div>
  );
};

export default Index;
