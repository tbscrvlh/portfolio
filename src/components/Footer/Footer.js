import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>telefone</LinkTitle>
          <LinkItem href="tel:(51)99959-2324">(51) 99959-2324</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>e-mail</LinkTitle>
          <LinkItem href="mailto:tobias.jung.carvalho@gmail.com">tobias.jung.carvalho@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
      <SocialIcons href="https://github.com/tbscrvlh">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tobias-carvalho-02461a116/">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
    
  );
};

export default Footer;
