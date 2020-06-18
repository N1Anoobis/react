import { connect } from 'react-redux';
import SearchResults from './SearchResults';
import { getCardsSorted } from '../../redux/cardsRedux';
import { getColumnsForList } from '../../redux/columnsRedux';
// import { searchString } from '../../redux/searchStringRedux';
import {
  // getClickedString,
  // countVisibleColumns,
  
  createAction_hamburgerMenu,
} from '../../redux/hamburgerRedux';


const mapStateToProps = (state, props) => {
  const inputString = props.match.params.id;
  console.log('state',state);
  console.log('props',props);
  return {
    cards: getCardsSorted(state, inputString),
    columns: getColumnsForList(state, inputString ),
    lists: state.lists,
  };
};

const mapDispatchToProps = (dispatch) => ({
  hamburgerMenu: newSearchColumn => dispatch(createAction_hamburgerMenu(newSearchColumn)),
  // searchFraze: newSearchFraze => dispatch(createAction_hamburgerMenu(newSearchFraze)),
});



// export default connect(mapStateToProps)(SearchResults);
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);