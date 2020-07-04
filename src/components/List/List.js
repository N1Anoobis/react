import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer';
import Creator from '../Creator/Creator';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser';
import Container from '../Container/Container';
import { flag } from '../../data/dataStore';
import {DragDropContext} from 'react-beautiful-dnd';

class List extends React.Component {

  static propTypes = {
    title: PropTypes.string,
    image: PropTypes.string,
    description: PropTypes.string,
    action: PropTypes.string,
    text: PropTypes.string,
    titleText: PropTypes.string,
    columns: PropTypes.array,
    addColumn: PropTypes.func,
    moveCard: PropTypes.func,
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.image,
  }

  render() {
    const { title, image, description, columns, addColumn, moveCard } = this.props;
    
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        moveCard({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };

    return (
      <DragDropContext onDragEnd={moveCardHandler}>
        <Container>
          <section className={styles.component}>
            <Hero titleText={title} image={image} />
            <div className={styles.description}>
              {ReactHtmlParser(description)}
            </div>
            <div className={styles.columns}>
              {columns.map(columnData => (
                <Column key={columnData.id} {...columnData} />
              ))}
            </div>
            <div className={styles.creator}>
              {flag.flag?<Creator text={settings.columnCreatorText} action={addColumn} />:null}
            </div>
          </section>
        </Container>
      </DragDropContext>
    );
  }
}

export default List;
