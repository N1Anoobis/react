import React from 'react';
import styles from './Hamburger.scss';

class Hamburger extends React.Component {

    state = {
        close: true,
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
                <i className={'fas fa-bars'} > </i>
            </div>
        )
    }
}

export default Hamburger;