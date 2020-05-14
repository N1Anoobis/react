import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import { settings } from '../../data/dataStore';

class App extends React.Component {
 
  state = {

    lists: this.props || [],
  }
  static defaultProps = {
    props: listData,
  }

  addList() {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
        ]
      }
    ));
  }
 
  render() {
  
    return (
      <main className={styles.component}>
      <h1 className={styles.title}>{pageContents.title}</h1>
      <h2 className={styles.subtitle}>{pageContents.subtitle}</h2>
      <List {...listData} />
      

      <div className={styles.component}>
          <Creator text='Add new list' action={title => this.addList(title)} />
        </div>


    </main>
    )
  }
}

export default App;
