// @ts-nocheck
import React , {useState, useEffect} from 'react';
import { getMovieByIdApi,  getMovieDataApi } from '../../functions/api/movies_api';
import MoviePopup from '../MoviePopup/MoviePopup';
import Slider from '../Slider/Slider';
import Footer from '../Footer/Footer';

const MoviePage = props => {

    console.log(window.location.pathname)
    const [movie_id, setMovieId] = useState("")
    const [movie_data, setMovieData] = useState({})
    const [show_movie, setShowMovie] = useState(false)
    const [movie_trailer, setMovieTrailer] = useState(false)
    const [movie_cast, setMovieCast] = useState([])
    const [movie_crew, setMovieCrew] = useState([])





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
            setMovieCrew(movie_res.result.crew)
            setMovieCast(movie_res.result.cast)

         }
       }


       const backToCatalog = ()=>{
        window.location.href = "/";

       }


    //    closePopUp={}/ back to 

    return (
        <div className="movie__page__container">

            <MoviePopup isMoviePage={true} show={show_movie}  data={movie_data} closePopUp={backToCatalog} trailer={movie_trailer}  />
             
            {movie_cast.length > 0 ? 
                   <Slider title={"CAST"} slider_data={movie_cast} defult_pic={movie_data.poster_path} /> 
            : null }
        
            {movie_crew.length > 0 ? 
                    <Slider title={"CREW"} slider_data={movie_crew} defult_pic={movie_data.poster_path} /> 
            : null }

        <Footer />
        </div>
    );
};

export default MoviePage;