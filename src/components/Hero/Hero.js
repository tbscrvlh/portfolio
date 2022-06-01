import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';



const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <div>Tobias Carvalho</div>
        <SectionText>desenvolvedor front-end</SectionText>
        <SectionText>Sou um desenvolvedor que constrói aplicações web focadas na interação do usuário; residente em Porto Alegre.</SectionText>
      </SectionTitle>
    </LeftSection>
    <Img src="images/tobias.jpg" />

  </Section>
    </>
);

export default Hero;