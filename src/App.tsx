import { GlobalStyles } from './styles/globalStyles';
import {
  Container, Header, Logo, Main, FirstTitle, SecondTitle, Subtitle, AstrounautIllustration, DivButton, DivIcons
} from './styles/styles';

import Button from './components/Button';
import Icon from './components/Icon';

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


        <DivButton>
          <Button text="Inscreva-se agora" fullWidth />
        </DivButton>

      </Main>
      
      <DivIcons
        // whileInView='visible'
        // initial='initial'
        // viewport={{ once: true }}
        // variants={{
        //   initial: { opacity: 0, y: 10 },
        //   visible: {
        //     opacity: 1,
        //     y: 0,
        //     transition: { duration: 1, delay: 0.3 },
        //   },
        // }}
        >
          <Icon src='/images/icon-rocket.svg' txt='Foguetes com a mais alta tecnologia e conforto.' alt='Rocket' />

          <Icon src='/images/icon-flag.svg' txt='Mais de 100 missões consecutivas com sucesso.' alt='Flag' />

          <Icon src='/images/icon-telescope.svg' txt='Experiência única e exclusiva.' alt='Telescope' />

      </DivIcons>

  </Container>
</>
  );
}

export default App;
