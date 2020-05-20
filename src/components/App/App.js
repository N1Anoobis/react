import React from 'react';
import styles from './App.scss';
import List from '../List/ListContainer';
// import { listData, settings } from '../../data/dataStore';
// import Creator from '../Creator/Creator';
import Hamburger from '../Hamburger/Hamburger.js';
import PropTypes from 'prop-types';

class App extends React.Component {

  state = {
    // lists: this.props.lists || [],
    // lists: [listData],

    value: null,
  }
  // static defaultProps = {
  //   lists: listData,
  // }

  static propTypes = {
    lists: PropTypes.array,
    title: PropTypes.node,
    subtitle: PropTypes.node,
  }

  // addList(title) {
  //   this.setState(state => (
  //     {
  //       lists: [
  //         ...state.lists,
  //         {
  //           key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
  //           title,
  //           image: listData.image,
  //           description: settings.defaultListDescription,
  //         },
  //       ],
  //     }
  //   ));
  // }

  getData = (val) => {
    console.log(val.close);
    this.setState({
      value: val.close,
    });
  }

  render() {
    const { title, subtitle, lists } = this.props;
    // console.log(props);
    return (
      <>
        <Hamburger sendData={this.getData} />
        <main className={this.state.value ? styles.show : styles.close}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {/* <div>
            {this.state.lists.map(({ key, ...listsProps }) => (
              <List key={key} {...listsProps} />
            ))}
          </div> */}
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
