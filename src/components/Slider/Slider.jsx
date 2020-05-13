// @ts-nocheck
import React , {useEffect , useState} from 'react';
import ItemsCarousel from 'react-items-carousel';
import { SMALL_IMG_PATH } from '../../tools/routes';
import Fade from 'react-reveal/Fade';

const Slider = props => {

    const {slider_data, defult_pic, title} = props

    // const [slider_data, setSliderData] = useState([1,2,3,4,5,6])
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const [number_of_cards, setnumberOfCards] = useState(0);

    const chevronWidth = 40;
    const autoPlayDelay = 2000;

    const changeNumber =(number)=>{
        if(number > 3){
            if(window.innerWidth < 400){
                if(number > 2 ){
                    setnumberOfCards(2)
                }
            }else if(window.innerWidth < 500){
                if(number > 3 ){
                    setnumberOfCards(3)
                }
            }else if (window.innerWidth < 730){
                if(number > 4 ){
                    setnumberOfCards(4)
                }
            }else if (window.innerWidth < 1000){
                if(number > 6 ){
                    setnumberOfCards(6)
                }
            }else{
                let number =slider_data.length > 7 ? 7 : slider_data.length
                setnumberOfCards(number)
            }
        }
    }

  

       useEffect(function() {
           
        if(slider_data.length > 0){

            let number = slider_data.length > 7 ? 7 : slider_data.length
            if(window.innerWidth < 400){
                number = 2
            }

            setnumberOfCards(number)
            changeNumber(number)
            setActiveItemIndex(parseInt(slider_data.length/2))
        
            window.addEventListener('resize', function(event){
                changeNumber(number)
              });
        }
          
       }, [slider_data]);



    return (
        <div className="slider__container">

             <div className="slider__title__container">
             <Fade left opposite cascade collapse > <h2>{title}</h2></Fade> 
             <Fade left opposite cascade collapse delay={1000}>
                    <div className="title__underline"></div> 
              </Fade>  
            </div>
           
        <div  style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
               
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={number_of_cards}
                gutter={20}
                leftChevron={<button><i className="fas fa-chevron-left"></i></button>}
                rightChevron={<button><i className="fas fa-chevron-right"></i> </button>}
                outsideChevron
                chevronWidth={chevronWidth}

            >

             { 
                slider_data.map(item => {
                    return (
                        <div className="slider__item" style={{ height: 200 }}>
                            <div style ={  { backgroundImage: "url("+SMALL_IMG_PATH+ (item.profile_path ? item.profile_path : defult_pic) +")" } } className="slider__img__container"></div>
                            <div>{item.name}</div>
                            {item.job ? <div>{item.job}</div> : null}
                        </div>
                            )  
                })
                                        
             }
                
            </ItemsCarousel>
            </div>
            
        </div>




    );
};


export default Slider;