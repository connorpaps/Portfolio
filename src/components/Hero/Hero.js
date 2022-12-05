import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Hi, I'm Connor.
        <br/>
        I'm a software developer that specializes in web technologies like React and JavaScript, along with game and backend development through langauges such as Python. I enjoy learning new languages and software while bringing real ideas to life. Below are some of my projects I have worked on over the past few months. I am currently open to work and can be contacted through LinkedIn or reached through the contact details below.
      </SectionText>
      <Link href="ConnorP_Resume.pdf" download>
      <Button>
          View Resume
        </Button>
        </Link>
    </LeftSection>
  </Section>
);

export default Hero;