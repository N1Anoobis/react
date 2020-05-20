import { connect } from 'react-redux';
import Column from './Column';
import { getCardsForColumns, createActionAddCards} from '../../redux/cardsRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumns(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCards: title => dispatch(createActionAddCards({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);