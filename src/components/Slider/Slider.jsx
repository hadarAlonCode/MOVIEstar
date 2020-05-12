import React , {useEffect , useState} from 'react';
import ItemsCarousel from 'react-items-carousel';

const Slider = props => {

    const [slider_data, setSliderData] = useState([1,2,3,4,5,6])
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;

    
    return (
        <div className="slider__container">

        <div  style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={6}
                gutter={20}
                leftChevron={<button>{'<'}</button>}
                rightChevron={<button>{'>'}</button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >

             { 
                                        slider_data.map(num => {
                                            return   <div style={{ height: 200, background: '#EEE' }}>ssd
                                            <img src={''} alt="img" />
                                          </div>
                                        })
                                        
             }
                {/* <div style={{ height: 200, background: '#EEE' }}>ssd
                   <img src={''} alt="img" />
                </div>
                <div style={{ height: 200, background: '#EEE' }}>Second card</div>
                <div style={{ height: 200, background: '#EEE' }}>Third card</div>
                <div style={{ height: 200, background: '#EEE' }}>Fourth card</div> */}
            </ItemsCarousel>
            </div>
            
        </div>




    );
};


export default Slider;