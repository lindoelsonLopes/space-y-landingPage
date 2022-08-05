import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Header, Logo, Main, FirstTitle, SecondTitle, Subtitle } from './styles/styles';
import Button from './components/Button';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header>
        <Logo>
          <img src='/images/logo.svg' alt="" />
        </Logo>
      </Header>

      <Main>

        <FirstTitle>
          Finalmente é possível!
        </FirstTitle>

        <SecondTitle>
          Sua Jornada para Marte começa aqui.
        </SecondTitle>

        <Subtitle>
          A primeira viagem para Marte estará disponível apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.
        </Subtitle>

      </Main>

      <Button text="Inscreva-se agora" />

    </>
  );
}

export default App;
