import React ,{useEffect, useState} from 'react';
import Movie from '../Movie/Movie';
import Fade from 'react-reveal/Fade';
import fav from "../../images/fav.png"
import Footer from '../Footer/Footer';
import Slide from 'react-reveal/Slide';



const Favorites = props => {
    const [favorites, setFavorites] = useState([])
    const [show_movie_data_by_id, setShowMovieDataId] = useState("")


    useEffect(() => {

        let favorites_storage = localStorage.blockBaster_favorites  ? 
        JSON.parse(localStorage.blockBaster_favorites) ? 
        JSON.parse(localStorage.blockBaster_favorites) : 
        [] : 
        []

          if(JSON.stringify(favorites) !== JSON.stringify(favorites_storage)){
            setFavorites(favorites_storage)
          }
      });

      const movieDataToggle = (id) =>{
        let new_id = id === show_movie_data_by_id ? "" : id
        setShowMovieDataId(new_id)

    }



    return (
        <div className="favorites__container" >

           <Slide top >
            <div className="slider__title__container">
                <Fade left opposite cascade collapse delay={1000} > <h1>My List</h1></Fade> 
                <Fade left opposite cascade collapse delay={1500}>
                        <div className="title__underline"></div> 
                </Fade>  
                </div>
            </Slide>

            <div className="favorites__movies__container">

                {favorites.length > 0 ? 
                    favorites.map(movie => {
                        return <Movie 
                        show_movie_data_by_id={show_movie_data_by_id}
                        movieDataToggle={movieDataToggle} movie={movie} />
                    }) :   
                <div className="favorites__msg"><img className='top__rated__icon'  src={fav} alt="logo"   /></div>
                }
                 
            </div>

            <Footer />
        </div>
    );
};

export default Favorites;

