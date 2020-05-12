import React , {useEffect} from 'react';
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
import top_rated from "../../images/topp.png"

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import ReactPlayer from 'react-player'
import * as moment from 'moment';


const MoviePopup = props => {
    const { closePopUp, data ,show ,trailer , isMoviePage , isMainBanner} = props
    console.log(data)

    const { release_date ,backdrop_path, overview , title , vote_average , id ,adult , genres}  = data
    console.log(trailer)

   

    return (
        
            <div className={show ? "main__popup__container" : "popup--off main__popup__container" }>
                <Slide top when={show} >
                    <div className="main__popup__inner__container movie__popup"
                         style ={  { backgroundImage: "url("+ORIGINAL_IMG_PATH+backdrop_path+")" } } >


                        {isMainBanner ? 
                        null :
                        <div onClick={() => closePopUp()} className="exit__popup"><i className="fas fa-times"></i></div>
                        }

                        <div><img className='top__rated__icon'  src={top_rated} alt="top rated"  /></div>

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
                                    {isMoviePage ? null : <Link to= {`/movie/${id}`}><i className="fas fa-info-circle"></i></Link> }
                                </div>
                            </div>

                            {trailer ?
                                <div className="trailer">
                                    <ReactPlayer 
                                    url={`https://www.youtube.com/watch?v=${trailer.key}`} 
                                    class ="trailer__player"
                                    // playIcon
                                    playing
                                    // width="350px"
                                    // height="198px"
                                    width="100%"
                                    height="100%"
                                    controls={true} 
                                    muted={true}
                                    config={{
                                        youtube:{
                                            playerVars: { 
                                                autoplay: 0, 
                                                playsinline: 0, 
                                                showinfo: 0, 
                                                rel: 0, 
                                              }
                                          }
                                        }}
                                    />
                                </div> 
                                : null
                            }
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