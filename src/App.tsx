import { GlobalStyles } from './styles/globalStyles';
import {
  Container, Header, Logo, Main, FirstTitle, SecondTitle, Subtitle, AstrounautIllustration
} from './styles/styles';
import Button from './components/Button';

function App() {
  return (
<>
  <Container>
      <GlobalStyles />


      <Header>

        <Logo />
        
      </Header>

      <Main>

        <FirstTitle>
          Finalmente é possível!
        </FirstTitle>

        <SecondTitle>
          Sua Jornada para Marte começa aqui<span>.</span>
        </SecondTitle>

        <Subtitle>
          A primeira viagem para Marte estará disponível apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera.
        </Subtitle>

        <AstrounautIllustration />

      </Main>

      <Button text="Inscreva-se agora" />


  </Container>
</>
  );
}

export default App;
