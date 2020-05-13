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

     getPositionAtCenter =(element)=> {
        const {top, left, width, height} = element.getBoundingClientRect();
        return {
          x: left + width / 2,
          y: top + height / 2
        };
      }


      getDistanceforAnimation =()=>{
        const { place} = this.props

        let left_elm = document.getElementById(`${place-1}`)
        let right_elm = document.getElementById(`${place+1}`)
        let element = document.getElementById(`${place}`)

        const distance_right = this.getDistanceBetweenElements(element,right_elm);
        const distance_left = this.getDistanceBetweenElements(element,left_elm);

        return {distance_right,distance_left }
      }

       getDistanceBetweenElements = (a, b) =>{
        const aPosition = this.getPositionAtCenter(a);
        const bPosition = this.getPositionAtCenter(b);
      
        return Math.hypot(aPosition.x - bPosition.x, aPosition.y - bPosition.y);  
      }

     onHover =()=>{
        const { place} = this.props

        let element = document.getElementById(`${place}`)
        element.style.transform = "scale(1.25)"


        if(window.innerWidth < 710){
            return
        }

        if(place === 0){
            document.getElementById(`${place+1}`).style.transform = "rotateY(30deg)"
            return
        }

        const distance_obj =  this.getDistanceforAnimation()

 

        if(distance_obj.distance_left < 300){
            document.getElementById(`${place-1}`).style.transform = "rotateY(-30deg)"   
        }

        if(distance_obj.distance_right < 300){
            document.getElementById(`${place+1}`).style.transform = "rotateY(30deg)"
        }

        
           
     }




     onLeaveHover=()=>{
        const { place} = this.props
        let element = document.getElementById(`${place}`)

        element.style.transform = "scale(1)"
        if(window.innerWidth < 710){
            return
        }

        if(place === 0){
            document.getElementById(`${place+1}`).style.transform = "rotateY(0deg)"
            return
        }

        const distance_obj =  this.getDistanceforAnimation()

        let left_side = element.getBoundingClientRect().left
        console.log(left_side, "left_side")
        console.log(window.innerWidth, "window.innerWidth")

        if(distance_obj.distance_left < 300){
            document.getElementById(`${place-1}`).style.transform = "rotateY(0deg)"   
        }

        if(distance_obj.distance_right < 300){
            document.getElementById(`${place+1}`).style.transform = "rotateY(0deg)"
        }  
     }


     
    render() {
        console.log("movie")
        const {show_movie_data_by_id, movieDataToggle , movie, place} = this.props
        const {poster_path , vote_average, title, id } = movie
        let show = show_movie_data_by_id === id ? true : false

        return (
            <div className="flex__mov" >
            <div id={place}
              onClick={()=>movieDataToggle(id)}
              onMouseOver={()=>this.onHover()}
              onMouseLeave={()=>this.onLeaveHover()}
              className={ "movie__container movie__img__loader"}>
                <div className="movie__hover">
                    <div className="movie__title">{title}</div>
                </div>

                
                <Fade >

                    {poster_path ?
                    
                       <img className="movie__img" src={SMALL_IMG_PATH+poster_path} alt="movie" />
                        :
                        <img className="movie__img" src={movie_icon} alt="movie" />
                    
                    }
                  </Fade>
               

            </div>
               
            <MoviePopup show={show} closePopUp={()=>movieDataToggle(id)} data={movie} /> 
            
     </div>
        );
    }
}



export default Movie;



