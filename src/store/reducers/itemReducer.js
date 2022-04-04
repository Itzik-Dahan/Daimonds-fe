const INITIAL_STATE = {
  // items: null,
  items: [],
  filterBy: null,
};

export function itemReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_ITEMS':
      return {
        ...state,
        items: [...action.items],
      };

    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.item],
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.itemId),
      };

    case 'UPDATE_ITEM':
      return {
        ...state,
        items: state.items.map((item) => (item.id === action.item.id ? action.item : item)),
      };
    case 'SET_FILTER_BY':
      return {
        ...state,
        filterBy: { ...action.filterBy },
      };

    default:
      return state;
  }
}
