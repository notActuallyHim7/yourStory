import { FETCH_CATEGORIES, FETCH_TAGS } from '../actions'

const initialState = {};

export default function(state = initialState,action) {
    switch (action.type){
        case FETCH_CATEGORIES:
            return {
              ...state,
              items: action.payload
            }
    }
    return state;
}
