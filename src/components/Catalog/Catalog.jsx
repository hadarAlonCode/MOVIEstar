// @ts-nocheck
import React, {useState , useEffect} from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import Movie from '../Movie/Movie';
import {getMoviesApi, getTopRatedApi, getMoviesSearch} from '../../functions/api/movies_api'
import MoviePopup from '../MoviePopup/MoviePopup';
import Footer from '../Footer/Footer';
import SearchBar from '../SearchBar/SearchBar';

const Catalog = props => {

    const [scroll_more, setScrollMore] = useState(false)
    const [movies, setMovies] = useState([])
    const [top_rated_movies, setTopRatedMovies] = useState([])

    const [page, setPage] = useState(1)
    const [show_movie_data_by_id, setShowMovieDataId] = useState("")

    const [search_toggle, setSearchToggle] = useState(false)
    const [search_keyword, setSearchKeyword] = useState("")


    useEffect(() => {
        console.log('useEffect')
        getMoviesFirstTime()
        getTopRated()
        
      }, []);



      const getTopRated = async ()=>{
        console.log('getTopRated')
        let movies_res = await getTopRatedApi()
        

        if(movies_res.ok &&  movies_res.result.length > 0){
            console.log(movies_res.result)
            setTopRatedMovies(movies_res.result)      
        }

    }


    const getMoviesFirstTime= async ()=>{
        console.log('getMoviesFirstTime')
        setSearchToggle(false)
        setMovies([])
        let movies_res = await getMoviesApi(1)

        if(movies_res.ok &&  movies_res.result.length > 0){
            setMovies(movies_res.result)
            setPage(2)
            
        }

        setScrollMore(true) 
    }



    const getMovies = async ()=>{
        console.log(search_keyword ,"getMovies")
        setScrollMore(false)

        let movies_res

        if(search_toggle){
            movies_res = await getMoviesSearch(search_keyword, page)
        }else{
            movies_res = await getMoviesApi(page)
        }
        
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
    }


    const movieDataToggle = (id) =>{
        let new_id = id === show_movie_data_by_id ? "" : id
        setShowMovieDataId(new_id)

    }

    const onScroll =()=>{
        var element = document.getElementById("movies-scroll");

        var body = document.body, timer
        clearTimeout(timer);
        if(!element.classList.contains('disable-hover')) {
            element.classList.add('disable-hover')
        }
        timer = setTimeout(function(){
            element.classList.remove('disable-hover')
        },1500);
     }


     

     const searchMovie = async (keyword)=>{
        setMovies([])
        let movies_res = await getMoviesSearch(keyword, 1)
      
        console.log(movies_res)
        if (movies_res.ok) {
            
            setMovies(movies_res.result)
            setPage(2)
            setSearchToggle(true)
        }
     }


   

    return (
        <div  className="catalog__container">
            <div className="grid">

                
                
                <div className="movies__scroll__container" onScroll={()=>onScroll()}>
                <InfiniteScroll
                            className="movies__container"
                            id="movies-scroll"
                            pageStart={0}
                            loadMore={()=>getMovies()}
                            hasMore={scroll_more}
                            useWindow={false}
                        >

                            {/* main banner */}
                            {top_rated_movies.length > 0 ? 
                                <div className="main__banner">
                                     <MoviePopup isMainBanner={true} show={  true } data={top_rated_movies[0]} />
                                </div>
                            : null
                            }

                            {/* search bar */}

                            <SearchBar getMoviesFirstTime={getMoviesFirstTime} searchMovie={searchMovie} setSearchKeyword={setSearchKeyword} />


                            {/* movies */}
                            
                                {movies.map(movie => {
                                    return <Movie show_movie_data_by_id={show_movie_data_by_id} movieDataToggle={movieDataToggle} movie={movie} />
                                })}

               
                                 
                </InfiniteScroll>

                </div>

                

                

      
            </div>
            <Footer />
        </div>
    );
};

export default Catalog;