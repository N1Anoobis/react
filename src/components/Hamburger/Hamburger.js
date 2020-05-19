import React from 'react';
import styles from './Hamburger.scss';
import PropTypes from 'prop-types';

class Hamburger extends React.Component {

    state = {
      close: true,
    }

    static propTypes = {
      sendData: PropTypes.func,
    }

    handleMenu = () => {
      this.props.sendData(this.state);
      this.setState({
        close: !this.state.close,
      });
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