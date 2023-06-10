import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyle';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Container>
      <Title>Faça login</Title>
      <Link to="/" className="underline">
        Voltar
      </Link>
    </Container>
  );
};

export default Index;
