import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

// import { settings } from '../../data/dataStore';

class SearchResults extends React.Component {

  static propTypes = {
    // title: PropTypes.string.isRequired,
    // icon: PropTypes.string,
    cards: PropTypes.array,
    // addCards: PropTypes.func,
    // id: PropTypes.string,
  }



  render() {
    const { cards } = this.props;
    console.log(this.props);
    return (
      <section className={styles.component}>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    );
  }
}

export default SearchResults;