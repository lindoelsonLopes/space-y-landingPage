import React from 'react';
import { GlobalStyles } from './styles/globalStyles';
import { Header } from './styles/styles';
import Button from './components/Button';

function App() {
  return (
    <>
      <GlobalStyles />

      <Header>
        <h1>Hello world</h1>
      </Header>


      <Button text="Inscreva-se agora" />

    </>
  );
}

export default App;
