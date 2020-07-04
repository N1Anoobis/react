
import { connect } from 'react-redux';
import Hamburger from './Hamburger';
import {
  getClickedString,
  createAction_hamburgerMenu,
} from '../../redux/hamburgerRedux';

const mapStateToProps = (state) => ({
  hamburger: getClickedString(state),
  columns: state.columns,
  cards: state.cards,
});

const mapDispatchToProps = (dispatch) => ({
  hamburgerMenu: newSearchColumn => dispatch(createAction_hamburgerMenu(newSearchColumn)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);