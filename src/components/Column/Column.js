import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Creator from '../Creator/Creator';
// import { cards } from '../../data/dataStore';

class Column extends React.Component {

  // state = {
  //   cards: this.props.cards || [],
  // }

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
  }

  // addCard(title) {
  //   this.setState(state => (
  //     {
  //       cards: [
  //         ...state.cards,
  //         {
  //           key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
  //           title,
  //           icon: 'list-alt',
  //           cards: [],
  //         },
  //       ],
  //     }
  //   ));
  // }

  render() {
    const { title, icon, cards } = this.props;
    console.log(cards);
    return (
      <section className={styles.component}>
        <h3 className={styles.title}><span className={styles.icon}>
          <Icon key='3' name={icon} />
        </span>{title}
        </h3>
        <div className={styles.cards}>
          {/* {this.state.cards.map(({ key, ...columnProps }) => (
            <Card key={key} {...columnProps} /> */}


          {cards.map(cardsData => (
            <Card key={cardsData.id} {...cardsData} />
          ))}


          {/* ))} */}
        </div>
        {/* <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div> */}
      </section>
    );
  }
}

export default Column;