import { actionTypes } from "./actions/actionTypes";

const initialState = {
  popularMovies: [],
  genres: [],
  isLoading: true,
};

export const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    // popüler filmleri store'a aktarma state'i güncelleyip
    case actionTypes.SET_MOVIES:
      return {
        ...state,
        popularMovies: action.payload,
        isLoading: false,
      };

      case actionTypes.SET_CATEGORIES:
        // katrgorileri store'a aktarma
        return {...state,genres:action.payload}
      default:
        return state;
    }
  };