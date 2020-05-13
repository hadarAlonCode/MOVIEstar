export const ScrollToTopMovieCatalog =()=>{
    let movie_catalog = document.getElementById("movies__scroll__container");

    if(movie_catalog){
        movie_catalog.scrollTo({top: 0, behavior: 'smooth'});

    }
}