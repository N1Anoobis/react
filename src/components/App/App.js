import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import { pageContents, listData, settings } from '../../data/dataStore';
import Creator from '../Creator/Creator';

class App extends React.Component {

  state = {

    lists: this.props.lists || [],
  }
  static defaultProps = {
    lists: listData.lists,
  }

  // static propTypes = {
  //   lists: this.propTypes.array,
  // }

  addList(title) {

    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
            title,
            image: this.props.lists[0].image,
            description: settings.defaultListDescription,
          }
        ]
      }
    ));
  }

  render() {

    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1>
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
        <div>
          {this.state.lists.map(({ key, ...listsProps }) => (
            <List key={key} {...listsProps} />
          ))}
        </div>
        <div className={styles.component}>
          <Creator text='Add new list' action={title => this.addList(title)} />
        </div>
      </main>
    )
  }
}

export default App;
