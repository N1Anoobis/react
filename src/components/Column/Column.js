import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class Column extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCards: PropTypes.func,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }

  render() {
    const { title, icon, cards, addCards } = this.props;
    // console.log(cards);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}>
          <Icon key='3' name={icon} />
        </span>{title}
        </h3>
        <div className={styles.cards}>
          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCards} />
        </div>
      </section>
    );
  }
}

export default Column;