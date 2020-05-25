import React from 'react';
import styles from './Hamburger.scss';
import PropTypes from 'prop-types';

class Hamburger extends React.Component {

  state = {
    close: false,
    value: this.props.hamburger,
  }

  componentDidUpdate(prevProps) {
    if (this.props.hamburger != prevProps.hamburger) {
      this.setState({ value: this.props.hamburger });
    }
  }


  static propTypes = {
    onToggle: PropTypes.func,
    columns: PropTypes.array,
    cards: PropTypes.array,
    hamburger: PropTypes.string,
    hamburgerMenu: PropTypes.func,
  }

  handleMenu = () => {
    this.setState({
      close: !this.state.close,
    });
  }

  sortFromMenu = (data) => {
    this.props.hamburgerMenu(data);
    this.setState({
      value: data,
      close: false,
    });
    console.log(data);
  }

  reset = () => {
    this.props.hamburgerMenu(null);
    this.setState({
      close: false,
    });
  }

  render() {
    const { columns, cards } = this.props;
    // console.log(this.props.hamburger);
    return (
      <div className={this.state.close ? styles.hidden : styles.show} >
        <i className={this.state.close ? 'fas fa-times' : 'fas fa-bars'} onClick={this.handleMenu}> </i>
        <nav className={this.state.close ? styles.inactive : styles.active} >
          <ul>
            {columns.map(column => (
              <li key={column.id} onClick={() => this.sortFromMenu(column.id)}>  {column.title} {cards.map(card => (
                <div key={card.id}>  {card.columnId == column.id ? card.title : null} </div>
              ))}
              </li>
            ))}
            <li onClick={this.reset}>reset view</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Hamburger;