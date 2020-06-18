import React from 'react';
import styles from './Home.scss';
// import List from '../List/ListContainer';
import ListLink from '../ListLink/ListLink';
// import Search from '../Search/SearchContainer';
// import Creator from '../Creator/Creator';
// import Hamburger from '../Hamburger/HamburgerContainer.js';
import PropTypes from 'prop-types';
// import { DragDropContext } from 'react-beautiful-dnd';

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
    // const moveCardHandler = result => {
    //   if(
    //     result.destination
    //     &&
    //     (
    //       result.destination.index != result.source.index
    //       ||
    //       result.destination.droppableId != result.source.droppableId
    //     )
    //   ){
    //     moveCard({
    //       id: result.draggableId,
    //       dest: {
    //         index: result.destination.index,
    //         columnId: result.destination.droppableId,
    //       },
    //       src: {
    //         index: result.source.index,
    //         columnId: result.source.droppableId,
    //       },
    //     });
    //   }
    // };
    return (
      
      <>
        {/* <Hamburger onToggle={this.getData} lists={lists} action={sortColumn} /> */}
        <main className={this.state.value ? styles.show : styles.close}>
          <h1 className={styles.title}>{title}</h1>
          <h2 className={styles.subtitle}>{subtitle}</h2>
          {/* <Search /> */}

          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}

          {/* <DragDropContext onDragEnd={moveCardHandler}>
            {lists.map(listData => (
              <ListLink key={listData.id} {...listData} />
            ))}
          </DragDropContext> */}
          {/* <div className={styles.component}>
            <Creator text='Add new list' action={title => this.addList(title)} />
          </div> */}
        </main>
      </>
    );
  }
}

export default Home;
