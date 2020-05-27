import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';
import { listData, infoContent } from '../../data/dataStore';

const Info = () => (
  <Container>
    <Hero titleText={listData.title} image={infoContent.image} />
    <h2>{infoContent.title}</h2>
    <p>{infoContent.text}</p>
  </Container>
);

Info.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
};

export default Info;