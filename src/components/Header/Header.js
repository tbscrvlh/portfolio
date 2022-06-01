import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCode } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "17px"}}>
          <DiCode size="3rem" style={{ marginTop: 1.4 }} /> <Span>portfólio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>projetos</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>tecnologias</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>sobre mim</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/tbscrvlh">
        <AiFillGithub size="2rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/tobias-carvalho-02461a116/">
        <AiFillLinkedin size="2rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
