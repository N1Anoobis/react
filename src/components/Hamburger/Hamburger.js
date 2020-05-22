import React from 'react';
import styles from './Hamburger.scss';
import PropTypes from 'prop-types';

class Hamburger extends React.Component {

  state = {
    close: false,
  }

  static propTypes = {
    onToggle: PropTypes.func,
    columns: PropTypes.array,
    cards: PropTypes.array,
  }

  handleMenu = () => {
    this.setState({
      close: !this.state.close,
    });
    // this.props.onToggle(this.state.close);
  }

  render() {
    const { columns, cards } = this.props;
    return (
      <div className={this.state.close ? styles.hidden : styles.show} >
        <i className={this.state.close ? 'fas fa-times' : 'fas fa-bars'} onClick={this.handleMenu}> </i>
        <nav className={this.state.close ? styles.inactive : styles.active} >
          <ul>

            {columns.map(column => (
              <li key={column.id}>  {column.title}  {cards.map(card => (
                <div key={card.id}>  {card.columnId == column.id ? card.title : null} </div>
              ))}
              </li>
            ))}

          </ul>
        </nav>
      </div>
    );
  }
}

export default Hamburger;