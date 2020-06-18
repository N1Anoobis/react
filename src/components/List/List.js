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
  }

  static defaultProps = {
    description: settings.defaultListDescription,
    image: settings.image,
  }

  render() {
    const { title, image, description, columns, addColumn } = this.props;
    return (
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
    );
  }
}

export default List;
