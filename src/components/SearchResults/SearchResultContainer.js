import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsSorted } from '../../redux/cardsRedux';
// import { searchString } from '../../redux/searchStringRedux';

const mapStateToProps = (state, props) => {
  const inputString = props.match.params.id;
  console.log('state',state);
  console.log('props',props);
  return {
    cards: getCardsSorted(state, inputString),
  };
};


export default connect(mapStateToProps)(SearchResults);