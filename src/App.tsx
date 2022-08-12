import { GlobalStyles } from './styles/globalStyles';
import {
  Container, Header, Logo, Main, FirstTitle, SecondTitle, Subtitle, AstrounautIllustration, DivButton, DivIcons, SectionAbout, ContainerAbout, ImageMars, DivAboutMars, SecondSubTitle, TextMars
} from './styles/styles';

import Button from './components/Button';
import Icon from './components/Icon';
import pixelToRem from './utils/pxToRem';

function App() {
  return (
<>
  <Container flex='column'margin={pixelToRem(24, 112, 50)}>
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
    
    
  <SectionAbout
    flex='column'
  >

    <Container width='100%' >

      <ContainerAbout width='100%' alignItems='center' justifyContent='center'>

        <ImageMars />

        <DivAboutMars>

          <FirstTitle>Por que Marte?</FirstTitle>

          <SecondSubTitle>Sobre o planeta vermelho</SecondSubTitle>

          <TextMars>A uma distância média de 140 milhões de milhas, Marte é um dos vizinhos habitáveis ​​mais próximos da Terra. Marte está mais ou menos a metade da distância da Terra do Sol, então ainda tem luz solar decente. Está um pouco frio, mas podemos esquentar. Sua atmosfera é composta principalmente de CO2 com um pouco de nitrogênio e argônio e alguns outros oligoelementos, o que significa que podemos cultivar plantas em Marte apenas comprimindo a atmosfera.</TextMars>

          <TextMars>A gravidade em Marte é cerca de 38% da da Terra, então você seria capaz de levantar coisas pesadas e dar voltas. Além disso, o dia está notavelmente próximo ao da Terra.</TextMars>

        </DivAboutMars>

      </ContainerAbout>

    </Container>



  </SectionAbout>
</>
  );
}

export default App;
