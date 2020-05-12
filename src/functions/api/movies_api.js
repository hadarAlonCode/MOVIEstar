
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




export const getMovieByIdApi = (id) => new Promise(resolve => {
   
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_API_KEY}&language=en-US`,  ).then(res => {
        
        const output = {
            ok: true, 
            result: res.data
        }

        resolve(output)
    }).catch(err => {
        resolve({ ok: false })
    })
})



export const getMovieDataApi = async (id) => {
   
    const [dataRes, trailerRes , castRes] = await Promise.all([
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${MOVIE_API_KEY}&language=en-US`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${MOVIE_API_KEY}&language=en-US`),
        axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${MOVIE_API_KEY}`)
      ]);

      let movie_data = dataRes.data ? dataRes.data : false
      let trailer = trailerRes.data ? trailerRes.data.results : []
      let cast = castRes.data ? castRes.data.cast : []
      let crew = castRes.data ? castRes.data.crew : []
    
      const data = { data: movie_data , trailer, cast, crew }

      const output = {
        ok: true, 
        result: data
    }

    return output
    
      
    
}

