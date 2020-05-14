import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => (
   
 <section  className={styles.component}>
     <h3 className={styles.title}>{props.title}</h3>
 </section>
);

Card.propTypes = {
  column: PropTypes.node,
};

export default Card;