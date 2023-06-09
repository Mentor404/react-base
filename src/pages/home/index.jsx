import React from 'react';
import '../../index.css';

import { Title, Paragraph } from './style';
import { Container } from '../../styles/GlobalStyle';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as exempleActions from '../../store/modules/exemple/actions';

const Index = () => {
  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(exempleActions.botaoClickRequest());
  }

  return (
    <Container>
      <Title>Página Inicial</Title>
      <Paragraph>Olá mundo</Paragraph>
      <Link to="/teste" className="underline">
        Página protegida
      </Link>
      <button type="button" className="bg-red-100 rounded-md py-1" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
};

export default Index;
