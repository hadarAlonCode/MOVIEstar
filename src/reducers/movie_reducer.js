import {
    ADD_TO_FAVORITES
} from '../actions/types'

const initialState = {
    movie_id: "",
    favorites: []
}


export default function (state = initialState, action) {

    switch (action.type) {

        case ADD_TO_FAVORITES:
            console.log("ADD_TO_FAVORITES");
            
            return {
                ...state,
                favorites: [...state.favorites , action.payload],

            }
        default:
            return state
    }
}