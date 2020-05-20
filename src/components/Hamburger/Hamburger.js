import React from 'react';
import styles from './Hamburger.scss';
import PropTypes from 'prop-types';

class Hamburger extends React.Component {

    state = {
      close: true,
    }

    static propTypes = {
      onToggle: PropTypes.func,
    }

    handleMenu = () => {
      this.setState({
        close: !this.state.close,
      });
      this.props.onToggle(this.state.close);
    }

    render() {
      return (
        <div className={this.state.close ? styles.hidden : styles.show} onClick={this.handleMenu}>
          <i className={this.state.close ? 'fas fa-bars' : 'fas fa-times'} > </i>
        </div>
      );
    }
}

export default Hamburger;