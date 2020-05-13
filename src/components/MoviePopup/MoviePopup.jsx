import React , {useEffect, useState} from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';
import { ORIGINAL_IMG_PATH } from '../../tools/routes';
import star from "../../images/star_w.png"
import star_g from "../../images/star_g.png"
import top_rated from "../../images/topp.png"

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import * as moment from 'moment';
import Youtube from '../Youtube/Youtube';


const MoviePopup = props => {
    const { closePopUp, data ,show ,trailer , isMoviePage , isMainBanner , addMovieToFavirites } = props
    const { release_date ,backdrop_path, overview , title , vote_average , id ,adult , genres}  = data
    const [favorite, setFavorite] = useState([])


    useEffect(() => {

        let favorites_storage = localStorage.blockBaster_favorites  ? 
        JSON.parse(localStorage.blockBaster_favorites) ? 
        JSON.parse(localStorage.blockBaster_favorites) : 
        [] : 
        []

          if(JSON.stringify(favorite) !== JSON.stringify(favorites_storage)){
            setFavorite(favorites_storage)
          }

      }, []);



    const addToFavoriteStorage = (data)=>{
        let stored_favorites = JSON.parse(localStorage.getItem("blockBaster_favorites"));
        
        let favorites = []
        if(stored_favorites){
            favorites = stored_favorites
        }
      
        favorites.push(data)
        localStorage.setItem("blockBaster_favorites", JSON.stringify(favorites));
        setFavorite(favorites)

    }



    const removeFromFavoriteStorage = (data)=>{
        let stored_favorites = JSON.parse(localStorage.getItem("blockBaster_favorites"));
        
        let favorites = []
        if(stored_favorites){
            favorites = stored_favorites
        }
      
        favorites = favorites.filter(m=> m.id !== data.id)
        localStorage.setItem("blockBaster_favorites", JSON.stringify(favorites));
        setFavorite(favorites)

    }

    return (
        
            <div id={isMainBanner ? "main__popup__banner" : null } className={show ? "main__popup__container"   : "popup--off main__popup__container" }>
                <Slide top when={show} >
                    <div className="main__popup__inner__container movie__popup"
                         style ={  { backgroundImage: "url("+ORIGINAL_IMG_PATH+backdrop_path+")" } } >


                        {isMainBanner ? 
                        null :
                        <div onClick={() => closePopUp()} className="exit__popup"><i className="fas fa-times"></i></div>
                        }

                        
                        {/* <div>
                        <Fade dely={3000} right duration when={show}>
                            <img className='top__rated__icon'  src={top_rated} alt="top rated"  />
                            </Fade>
                        </div> */}
                       
                    {/*=== popup details: */}

                        <div className="movie__overview">

                            <div className="movie__overview__detailes">
                                <div className="title">{title}</div>

                                    {isMoviePage ? 
                                        <div className="movie__overview__sub__detailes" >
                                        {release_date ? <div>{moment(release_date).format('YYYY')}</div> : null }
                                        {adult ? <div>+18</div> : null } 
                                        {genres && genres.length > 0 ? genres.map((g, i) => {
                                            if(i < 3 ) {
                                                return <div>| {g.name}</div>
                                            }
                                        }) : null } 
                                        </div>
                                    : null}


                    {/*=== popup details  - stars: */}

                                <div className="stars__container">
                                    {show ? 
                                        [1,2,3,4,5,6,7,8,9,10].map(num => {
                                            return  <Zoom delay={num*100} bottom cascade>
                                                        <img 
                                                        className={parseInt(vote_average) > num  ? "fas fa-star yellow__start" : "fas fa-star"} 
                                                        src={parseInt(vote_average) > num ?  star : star_g} alt="star" height="42" width="42" />
                                                    </Zoom>
                                        })
                                        : null
                                    }
                                </div>

                    {/*=== popup details  - description: */}

                                <div className="overview">{overview}</div>
                               
                    {/*=== popup details  - icons: */}

                                <div className="icons">
                                    {favorite.find(m=>m.id===id) ?
                                        <button 
                                        onClick={()=>removeFromFavoriteStorage(data)} 
                                            className="btn">
                                            My list <i className="fas fa-check"></i>
                                        </button>

                                        :
                                                                
                                        <button 
                                        onClick={()=>addToFavoriteStorage(data)} 
                                        className="btn">
                                            My list <i className="fas fa-plus"></i>
                                        </button>
                                    }
                                    
                                    {isMoviePage ? null : <Link to= {`/movie/${id}`}><button className="btn"> More info<i className="fas fa-info-circle"></i></button></Link> }
                                </div>
                            </div>

                    {/*=== popup details  - trailer - movie page: */}

                            {trailer ?
                                <Youtube video_key={trailer.key} />
                                : null
                            }
                        </div>
                    </div>
                </Slide>

            </div>
         
    );
};


export default MoviePopup;



