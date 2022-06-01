import {  DiReact } from 'react-icons/di';
import { SiStyledcomponents, SiTypescript } from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br /> 
    <SectionTitle>tecnologias</SectionTitle>
    
    <List>
            <ListItem>
                <DiReact size="3rem"></DiReact>
                <ListContainer>
                    <ListTitle>React</ListTitle>
                    <ListParagraph></ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <SiTypescript size="3rem"></SiTypescript>
                <ListContainer>
                    <ListTitle>Typescript</ListTitle>
                    <ListParagraph></ListParagraph>
                </ListContainer>
            </ListItem>
            <ListItem>
                <SiStyledcomponents size="3rem"></SiStyledcomponents>
                <ListContainer>
                    <ListTitle>Styled Components</ListTitle>
                    <ListParagraph></ListParagraph>
                </ListContainer>
            </ListItem>
        </List>
  </Section>
);

export default Technologies;

