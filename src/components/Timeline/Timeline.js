import React, { useState, useRef, useEffect } from 'react';
import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { TimelineSectionText } from './TimelineStyles';


const Timeline = () => {
  

  return (
    <Section id="about">
      <SectionTitle>sobre mim</SectionTitle>
      <TimelineSectionText>
          Olá! Meu nome é Tobias e eu estou buscando uma oportunidade como desenvolvedor web. Até agora a vida me trouxe alguns desafios que me trouxeram até aqui. Em 2019, me formei em Relações Internacionais pela UFRGS. Durante o curso, tive uma ampliação da minha visão de mundo e alcancei a fluência em inglês e espanhol, além de um francês intermediário. Perto da minha formatura, minha vida enveredou pelo caminho da literatura: inscrevi um original no Prêmio Sesc de Literatura e fui premiado; passei a ir a bate-papos ao redor de todo o Brasil para falar do meu trabalho, e concluí o mestrado em Escrita Criativa pela PUCRS. Durante a pandemia, fui introduzido ao mundo da programação e me apaixonei. Decidi então aliar todos os meus conhecimentos e buscar uma oportunidade nessa área tão cheia de possibilidades. Sempre em frente!
      </TimelineSectionText>
    </Section>
  );
};

export default Timeline;