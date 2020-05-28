import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { faqContent } from '../../data/dataStore';

const Faq = () => (
   
  <Container>
    <Hero titleText={faqContent.title} image={faqContent.image} />
    <h2>{faqContent.title}</h2>
    <p>{faqContent.text}</p>
  </Container>
);

Faq.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Faq;