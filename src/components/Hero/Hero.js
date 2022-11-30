import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, my name is Connor.
        <br/>
        I'm a software developer that specializes in web technologies like React and JavaScript, along with game and backend development through langauges such as Python. I enjoy learning new languages and software while bringing real ideas to life. Below are some of my projects I have worked on over the past few months. I am currently open to work and can be contacted through LinkedIn or reached through the contact details below.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'}>
        View Resume (fix)
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;