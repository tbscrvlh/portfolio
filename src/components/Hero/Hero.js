import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img, WhiteLink } from './HeroStyles';
import Link from 'next/link';


const Hero = (props) => (
  <>
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        <div>Tobias Carvalho</div>
        <SectionText>desenvolvedor front-end</SectionText>
        <SectionText>Sou um desenvolvedor que constrói aplicações web focadas na interação do usuário; residente em Porto Alegre. <Link href="#about"><WhiteLink>Saiba mais ↴</WhiteLink></Link></SectionText>
      </SectionTitle>
      
    </LeftSection>
    <Img src="images/tobias.jpg" />

  </Section>
    </>
);

export default Hero;