import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

const Column = (props) => (
 <section className={styles.component}>
     <h3 className={styles.title}>{props.column}</h3>
 </section>
);

Column.propTypes = {
//   titleText: PropTypes.node,
  column: PropTypes.node,
};

export default Column;