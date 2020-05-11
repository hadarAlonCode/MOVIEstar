import { SHOW_MOVIE_DATA } from './types'

export const toggleMovieData = (data) => async dispatch => {
    dispatch({
        type: SHOW_MOVIE_DATA,
        payload: data
    })
}