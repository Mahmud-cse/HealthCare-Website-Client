import React from 'react';
import img from '../img/404-p.png';

const NotFound = () => {
    return (
        <div className="p-5">
            {/* image */}
            <img style={{width:"450px"}} src={img} alt="" className="img-fluid mx-auto d-block"/>
        </div>
    );
};

export default NotFound;