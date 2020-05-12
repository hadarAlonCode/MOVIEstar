import { ADD_TO_FAVORITES } from './types'

export const addMovieToFavirites = (id) => async dispatch => {
    dispatch({
        type: ADD_TO_FAVORITES,
        payload: id
    })
}