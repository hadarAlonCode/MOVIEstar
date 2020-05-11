import React from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

import { ORIGINAL_IMG_PATH } from '../../tools/routes';

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from '../../actions/actions';
import star from "../../images/star_w.png"
import star_g from "../../images/star_g.png"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const MoviePopup = props => {
    const { closePopUp, data ,show} = props
    const {poster_path ,backdrop_path, overview , title , vote_average , id}  = data
    console.log(show)
    return (
        
            <div className={show ? "main__popup__container" : "popup--off main__popup__container" }>
                <Slide top when={show} >
                    <div className="main__popup__inner__container movie__popup"
                         style ={  { backgroundImage: "url("+ORIGINAL_IMG_PATH+backdrop_path+")" } } >

                        <div onClick={() => closePopUp()} className="exit__popup"><i className="fas fa-times"></i></div>

                        <div className="movie__overview">
                            <div className="title">{title}</div>
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
                            <div className="overview">{overview}</div>
                            <div className="icons">
                               <i className="fab fa-gratipay"></i>
                               <Link to= {`/movie/${id}`}><i className="fas fa-info-circle"></i></Link>
                            </div>
                        </div>
                    </div>
                </Slide>

            </div>
        
    );
};





function mapStateToProps({ movie_reducer}) {
    return { movie_reducer };
  }
  
export default withRouter(connect(mapStateToProps, actions)(MoviePopup))