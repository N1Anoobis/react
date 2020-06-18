// selectors

export const getClickedString = state => state.hamburger;


// action name creator
const reducerName = 'hamburger';
const createActionName = name => `app/${reducerName}/${name}`;
// actions types
export const DISPLAY_MENU = createActionName('DISPLAY_MENU');

// action creators
export const createAction_hamburgerMenu = payload => ({ 
  payload,
  type: DISPLAY_MENU });



// reducer
export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case DISPLAY_MENU:
      return action.payload;
    default:
      return statePart;
  }
}
