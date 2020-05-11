import {
    SHOW_MOVIE_DATA
} from '../actions/types'

const initialState = {
    movie_id: "",
    show_movie_data: false,
}


export default function (state = initialState, action) {

    switch (action.type) {

        case SHOW_MOVIE_DATA:
            const { id } = action.payload
            console.log(state.movie_id ,"SHOW_MOVIE_DATA");
            
            let show_movie_data =  id === state.movie_id ? false : true
            return {
                ...state,
                movie_id: id,
                show_movie_data,

            }
        default:
            return state
    }
}