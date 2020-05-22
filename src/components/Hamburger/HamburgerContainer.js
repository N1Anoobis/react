import { connect } from 'react-redux';
import Hamburger from './Hamburger';
// import {
   
//   createAction_hamburgerMenu,
// } from '../../redux/HamburgerRedux';

const mapStateToProps = (state) => ({
  
  columns: state.columns,
  cards: state.cards,
});

// const mapDispatchToProps = (dispatch) => ({
//   changeSearchString: newSearchString => dispatch(createAction_hamburgerMenu(newSearchString)),
// });

export default connect(mapStateToProps)(Hamburger);