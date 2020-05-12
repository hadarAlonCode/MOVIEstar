// @ts-nocheck
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
    let show = show_movie_data_by_id === id ? true : false

    
    return (
        <div className="flex__mov">
            <div 
              onClick={()=>movieDataToggle(id)}
              className={ "movie__container movie__img__loader"}>
                <div className="movie__hover">
                    <div className="movie__title">{title}</div>
                </div>
                <Fade >
                    <img src={ORIGINAL_IMG_PATH+poster_path} alt="movie" />
                </Fade>

            </div>
               
            <MoviePopup show={show} closePopUp={()=>movieDataToggle(id)} data={props.movie} /> 
            
     </div>
    );
};

export default Movie;

