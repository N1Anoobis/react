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
    
    flag.id = id;
    console.log( this.props.match.params.id ,'props.match.params.id ');
  }

 

  render() {
    const { cards} = this.props;
    console.log( this.props.match.params.id ,'props.match.params.id ');
  
    return (

      <section  className={styles.component}>
        {cards.map(cardData => (
          <>
            <Link to={`/List/${cardData.columnId}`}  onClick={() => this.sortFromMenu(cardData.columnId)}>
              <Card key={cardData.id}  {...cardData} />
            </Link>
          </>
        ))}
      </section>
    );
  }
}

export default SearchResults;