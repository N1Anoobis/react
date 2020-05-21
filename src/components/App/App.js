import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
import Search from '../Search/SearchContainer';
// import Creator from '../Creator/Creator';
import Hamburger from '../Hamburger/Hamburger.js';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    value: null,
  }
  
  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.string,
    subtitle: PropTypes.string,
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
        <Hamburger onToggle={this.getData} />
        <main className={this.state.value ? styles.show : styles.close}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          <Search />
          {lists.map(listData => (
            <List key={listData.id} {...listData} />
          ))}
          {/* <div className={styles.component}>
            <Creator text='Add new list' action={title => this.addList(title)} />
          </div> */}
        </main>
      </>
    );
  }
}

export default App;
