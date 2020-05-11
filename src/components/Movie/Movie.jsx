import React , {useState, useEffect} from 'react';
import {ORIGINAL_IMG_PATH} from '../../tools/routes'
import Fade from 'react-reveal/Fade';
import MoviePopup from '../MoviePopup/MoviePopup';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../../actions/actions';

const Movie = props => {

    const {poster_path , vote_average, title, id } = props.movie
    const {show_movie_data_by_id, movieDataToggle} = props
    const [show_movie, setShowMovie] = useState(false)
    const [show_movie_popup, setShowMoviePopup] = useState(false)
    
    useEffect(() => {
        console.log(poster_path)
        if(poster_path){
            setTimeout(()=>{ 
                setShowMovie(true) }, 500);
        }
      }, []);



    return (
        <div>
            <div 
              onClick={()=>setShowMoviePopup(true)}
              className={ "movie__container movie__img__loader"}>
                <div className="movie__hover">
                    <div className="movie__title">{title}</div>
                </div>
                <Fade >
                    <img src={ORIGINAL_IMG_PATH+poster_path} alt="movie" />
                </Fade>

            </div>
               
            {show_movie_popup ? 
            <MoviePopup closePopUp={()=>setShowMoviePopup(false)} data={props.movie} /> 
            :
            null}


     </div>
        
    );
};

export default Movie;

