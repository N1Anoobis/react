import { connect } from 'react-redux';
import Header from './Header';
import {
//   getClickedString,
  // countVisibleColumns,
  // countAllColumns,
  createAction_hamburgerMenu,
} from '../../redux/hamburgerRedux';

// const mapStateToProps = (state) => ({
//   hamburger: getClickedString(state), // countVisible: countVisibleColumns(state),// countAll: countAllColumns(state),
//   columns: state.columns,
//   cards: state.cards,
// });

const mapDispatchToProps = (dispatch) => ({
  hamburgerMenu: newSearchColumn => dispatch(createAction_hamburgerMenu(newSearchColumn)),
});

export default connect(mapDispatchToProps)(Header);