// @ts-nocheck
// import React , {useState, useEffect} from 'react';
import {SMALL_IMG_PATH} from '../../tools/routes'
import Fade from 'react-reveal/Fade';
import MoviePopup from '../MoviePopup/MoviePopup';

import movie_icon from "../../images/movie.png"

// const Movie = props => {

//     const {poster_path , vote_average, title, id } = props.movie
//     const {show_movie_data_by_id, movieDataToggle} = props
//     let show = show_movie_data_by_id === id ? true : false
//     console.log("movie")

   


//     return (
//         <div className="flex__mov">
//             <div 
//               onClick={()=>movieDataToggle(id)}
//               className={ "movie__container movie__img__loader"}>
//                 <div className="movie__hover">
//                     <div className="movie__title">{title}</div>
//                 </div>

//                 <Fade duration={1500} >
//                     {poster_path ?
//                        <img src={ORIGINAL_IMG_PATH+poster_path} alt="movie" />
//                         :
//                         <img src={movie_icon} alt="movie" />
//                     }
//                 </Fade>

//             </div>
               
//             <MoviePopup show={show} closePopUp={()=>movieDataToggle(id)} data={props.movie} /> 
            
//      </div>
//     );
// };




// export default React.memo(Movie) ;


import React, { Component } from 'react';

class Movie extends Component {
    constructor(props) {
        super(props);

    }


   
    shouldComponentUpdate(nextProps, nextState) {
        const {show_movie_data_by_id, movieDataToggle , movie} = this.props

        if(JSON.stringify(movie) !== JSON.stringify(nextProps.movie) 
           || show_movie_data_by_id !== nextProps.show_movie_data_by_id){
            return true
        }else{
            return false
        }

    }


    render() {
        console.log("movie")
        const {show_movie_data_by_id, movieDataToggle , movie} = this.props
        const {poster_path , vote_average, title, id } = movie
        let show = show_movie_data_by_id === id ? true : false

        return (
            <div className="flex__mov">
            <div 
              onClick={()=>movieDataToggle(id)}
              className={ "movie__container movie__img__loader"}>
                <div className="movie__hover">
                    <div className="movie__title">{title}</div>
                </div>

                

                    {poster_path ?
                       <img className="movie__img" src={SMALL_IMG_PATH+poster_path} alt="movie" />
                        :
                        <img className="movie__img" src={movie_icon} alt="movie" />
                    }
               

            </div>
               
            <MoviePopup show={show} closePopUp={()=>movieDataToggle(id)} data={movie} /> 
            
     </div>
        );
    }
}



export default Movie;



