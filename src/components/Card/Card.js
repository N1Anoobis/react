import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';

const Card = ({ title, dragDisable, index, id}) => (
  <Draggable draggableId={id} index={index} isDragDisabled={dragDisable}>
    {(provided) => (
      <section    className={styles.component}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}>
        <h3 className={styles.title}>{title}</h3>
      </section>
    )}
  </Draggable>
);

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  index: PropTypes.number,
  dragDisable: PropTypes.bool,
};

export default Card;