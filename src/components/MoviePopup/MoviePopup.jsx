import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import { ORIGINAL_IMG_PATH } from '../../tools/routes';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../../actions/actions';
import star from "../../images/star_w.png"
import star_g from "../../images/star_g.png"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const MoviePopup = props => {
    const { closePopUp, data } = props
    const {poster_path , overview , title , vote_average , id}  = data
    console.log(vote_average)


    // for(let i=0; i<vote_average; i++){
    //     let star = <i className="fas fa-star"></i>
    //     star.push()

    //    let stars = []

    // }

    return (
        
            <div className="main__popup__container">
                <div onClick={() => closePopUp()} className="overlay"></div>
                <Zoom   bottom opposite collapse >
                    <div className="main__popup__inner__container movie__popup"
                         style ={  { backgroundImage: "url("+ORIGINAL_IMG_PATH+poster_path+")" } } >

                        <div className="movie__overview">

                            <div className="stars__container">

                            {[1,2,3,4,5,6,7,8,9,10].map(num => {
                                    return  <Zoom delay={num*100} bottom cascade>
                                                <img 
                                                className={parseInt(vote_average) > num  ? "fas fa-star yellow__start" : "fas fa-star"} 
                                                src={parseInt(vote_average) > num ?  star : star_g} alt="star" height="42" width="42" />
                                            </Zoom>
                                })}
                            </div>

                            <div className="title">{title}</div>
                            <div className="overview">{overview}</div>
                            <div className="icons">
                               <i className="fab fa-gratipay"></i>
                               <Link to= {`/movie/${id}`}><i className="fas fa-info-circle"></i></Link>
                               
                            </div>
                        </div>
                        

                    </div>
                </Zoom>

            </div>
        
    );
};





function mapStateToProps({ movie_reducer}) {
    return { movie_reducer };
  }
  
  export default withRouter(connect(mapStateToProps, actions)(MoviePopup))