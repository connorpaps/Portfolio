import React from 'react';
import { DiFirebase, DiGnu, DiReact, DiSizzlejs, DiUnitySmall, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br /><br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I have experience in many front-end and back-end programming languages and frameworks including React.js, React Redux, Next.js, Tailwind CSS, Python, JavaScript and more.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            JS, React, Angular, & Tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Node, Databases, & SQL
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiUnitySmall size="3rem"/>
        <ListContainer>
          <ListTitle>Game Development</ListTitle>
          <ListParagraph>
            Experience with <br/>
            Unreal Engine & Python
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
