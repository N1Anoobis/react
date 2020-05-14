import React from 'react';
import Icon from '../Icon/Icon';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class Column extends React.Component {

  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    image: PropTypes.string,
    column: PropTypes.node,
    description: PropTypes.string,
    columns: PropTypes.array,
    icon: PropTypes.string,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
    description: settings.defaultListDescription,
    column: "animal",
  }

  addCard(title) {
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length - 1].key + 1 : 0,
            title,
            icon: 'list-alt',
            cards: []
          }
        ]
      }
    ));
  }

  render() {
    return (
      < section className={styles.component} >
        <h3 className={styles.title}><span className={styles.icon}>
          <Icon key='3' name={this.props.icon} />
        </span>{this.props.title}
        </h3>
        <div className={styles.cards}>
          {this.state.cards.map(({ key, ...columnProps }) => (
            <Card key={key} {...columnProps} />
          ))}
        </div>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={title => this.addCard(title)} />
        </div>
      </section >
    )
  }
}

export default Column;