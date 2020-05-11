import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import movie_reducer from './movie_reducer'

export default (history) => combineReducers({
    router: connectRouter(history),
    movie_reducer,
})