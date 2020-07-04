import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import PropTypes from 'prop-types';

class Home extends React.Component {

  state = {
    value: null,
  }

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    sortColumn: PropTypes.func,
    moveCard: PropTypes.func,
  }

  getData = (valFromHamburger) => {
    console.log(valFromHamburger);
    this.setState({
      value: valFromHamburger,
    });
  }

  render() {
    const { title, subtitle, lists } = this.props;
  
    return (
      <>
        <main className={this.state.value ? styles.show : styles.close}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </main>
      </>
    );
  }
}

export default Home;
