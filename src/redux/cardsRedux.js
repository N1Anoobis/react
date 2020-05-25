import shortid from 'shortid';

// selectors
export const getCardsForColumns = ({ cards, searchString }, columnId) => cards.filter(card => card.columnId == columnId && new RegExp(searchString, 'i').test(card.title));
//
// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARD = createActionName('ADD_CARD');

// action types
export const MOVE_CARD = createActionName('MOVE_CARD');

// action creators
export const createActionAddCards = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });


export const createAction_moveCard = payload => ({ payload: payload, type: MOVE_CARD });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARD:
      return [...statePart, action.payload];
     
    default:
      return statePart;
  }
}