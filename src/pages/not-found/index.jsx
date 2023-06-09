import React from 'react';
import { Title, Paragraph, Image } from './styled';
import { Container } from '../../styles/GlobalStyle';
import '../../index.css';
import history from '../../services/history';

const Index = () => {
  history.push('/');

  return (
    <Container>
      <div className="flex flex-col items-center justify-center h-[calc(100vh-60px)] overflow-hidden">
        <Title>Algo deu errado</Title>
        <Paragraph>Não foi possível encontrar essa página.</Paragraph>
        <div className="flex">
          <Image src="/resources/img/Monster%20404%20Error.gif" />
        </div>
      </div>
    </Container>
  );
};

export default Index;
