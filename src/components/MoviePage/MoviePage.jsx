import React , {useState, useEffect} from 'react';
import { getMovieByIdApi,  getMovieDataApi } from '../../functions/api/movies_api';
import MoviePopup from '../MoviePopup/MoviePopup';
import Slider from '../Slider/Slider';

const MoviePage = props => {

    console.log(window.location.pathname)
    const [movie_id, setMovieId] = useState("")
    const [movie_data, setMovieData] = useState({})
    const [show_movie, setShowMovie] = useState(false)
    const [movie_trailer, setMovieTrailer] = useState(false)




    useEffect(function() {
        let movie_id_path = window.location.pathname.split("/")[2]
        setMovieId(movie_id_path)
        getMovie(movie_id_path)
    
       }, []);

       const getMovie = async (id)=>{
         let movie_res = await getMovieDataApi(id)
         
         console.log(movie_res)
         if(movie_res.ok){
            setMovieData(movie_res.result.data)
            setShowMovie(true)
            let movie_trailer_obj = movie_res.result.trailer.length > 0 ? movie_res.result.trailer.find(t => t.site === "YouTube") : false
            console.log(movie_trailer_obj)
            setMovieTrailer(movie_trailer_obj)

         }
       }


       const backToCatalog = ()=>{
        window.location.href = "/";

       }


    //    closePopUp={}/ back to 

    return (
        <div className="movie__page__container">

            <MoviePopup isMoviePage={true} show={show_movie}  data={movie_data} closePopUp={backToCatalog} trailer={movie_trailer}  />
            <Slider />
        </div>
    );
};

export default MoviePage;