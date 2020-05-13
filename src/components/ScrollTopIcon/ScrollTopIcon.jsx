

import React from 'react';

const ScrollTopIcon = props => {

    const {scrollTo} = props

    return (
        <div  id={"scroll__icon"} onClick={()=>scrollTo()} className="scroll__icon--hide">
        <i className="fas fa-chevron-up arrow primera next bounceAlpha"></i>
        <i className="fas fa-chevron-up arrow segunda next bounceAlpha"></i>
     </div>
    );
};

export default ScrollTopIcon;