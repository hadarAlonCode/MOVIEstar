import React, {useState , useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Movie from '../Movie/Movie';
import {getMoviesApi} from '../../functions/api/movies_api'

const Catalog = props => {

    const [scroll_more, setScrollMore] = useState(false)
    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(1)
    const [show_movie_data_by_id, setShowMovieDataId] = useState("")


    useEffect(() => {
        console.log('useEffect')
        getMoviesFirstTime()
        
      }, []);


    const getMoviesFirstTime= async ()=>{
        console.log('getMoviesFirstTime')
        let movies_res = await getMoviesApi(1)

        if(movies_res.ok &&  movies_res.result.length > 0){
            setMovies(movies_res.result)
            setPage(2)
            
        }

        setScrollMore(true) 
    }



    const getMovies = async ()=>{
        console.log("getMovies")
        setScrollMore(false)

        let movies_res = await getMoviesApi(page)
        
        if(movies_res.ok &&  movies_res.result.length > 0){
            let copy_movies = JSON.parse(JSON.stringify(movies))
            const new_movies = copy_movies.concat(movies_res.result);
            setMovies(new_movies)
            setScrollMore(true)
            setPage(page+1)
            if(page == 10){
                setScrollMore(false)

            }
        }

        console.log(movies)

        
    }

    console.log(scroll_more)

    const movieDataToggle = (id) =>{
        let new_id = id === show_movie_data_by_id ? "" : id
        setShowMovieDataId(new_id)

    }


    return (
        <div  className="catalog__container">
            <div className="grid">
                

                {/* need to add banner component! */}
                <div className="banner"></div>

                <div className="movies__scroll__container">
                <InfiniteScroll
                            className="movies__container"
                            pageStart={0}
                            loadMore={()=>getMovies()}
                            hasMore={scroll_more}
                            useWindow={false}
                            // getScrollParent={scrollParentRef}
                        >
                            
                                {movies.map(movie => {
                                    return <Movie show_movie_data_by_id={show_movie_data_by_id} movieDataToggle={movieDataToggle} movie={movie} />
                                })}
                                 
                 </InfiniteScroll>

                </div>

                

                

      
            </div>
        </div>
    );
};

export default Catalog;