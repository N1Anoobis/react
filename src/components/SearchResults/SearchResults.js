import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
// import Column from '../Column/Column';
import { Link} from 'react-router-dom';
// import initialStoreData from '../../data/dataStore';
import { flag } from '../../data/dataStore';

class SearchResults extends React.Component {

  static propTypes = {
    // title: PropTypes.string.isRequired,
    match: PropTypes.any,
    cards: PropTypes.array,
    columns: PropTypes.array,
    hamburgerMenu: PropTypes.any,
    history: PropTypes.any,
  }

  sortFromMenu = (data) => {
    
    this.props.hamburgerMenu(data);
    flag.flag = false;
    // this.setState({
    
    // });
   
  }

  passInputValue =(id) => {
    // console.log( id,'podalo sie');
    flag.id = id;
  
  }

  render() {
    const { cards} = this.props;
    // console.log(this.props.history.location.pathname.replace('/List/', ''));
    // console.log(this.props.match.params.id );
    // this.props.history.location.pathname.replace('/List/', '')
    return (

      <section  className={styles.component}>
        {cards.map(cardData => (
          console.log(cardData,'cardData'),
          <>
            {/* <Column key={columnData.id} {...columnData} /> */}
            <Link to={`/List/${cardData.columnId}`} onChange={this.passInputValue(this.props.match.params.id)} onClick={() => this.sortFromMenu(cardData.columnId)}>
              <Card key={cardData.id}  {...cardData} />
            </Link>
            {/* <Route exact path="/list/:id" component={cardData.listId} /> */}
            
          </>
        ))}
      </section>
    );
  }
}
// {column.title} {cards.map(card => (
//   <div key={card.id}>  {card.columnId == column.id ? card.title : null} </div>
// ))}
export default SearchResults;