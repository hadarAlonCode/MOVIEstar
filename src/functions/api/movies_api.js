
import { MOVIE_API_KEY } from "../../tools/keys";
import axios from 'axios'



//475557 joker id
export const getMoviesApi = (page) => new Promise(resolve => {
   
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${MOVIE_API_KEY}&language=en-US&page=${page}`,  ).then(res => {
        
        const {
            results
        } = res.data
        const output = {
            ok: true, 
            result: results
        }
        resolve(output)
    }).catch(err => {
        resolve({ ok: false })
    })
})
