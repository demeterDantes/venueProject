import React from 'react';
import Iframe from 'react-iframe';

const Location = () => {
    return (
        <div className="location_wrapper">
       
            <Iframe 
                    url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2080.896354043511!2d12.380437725003878!3d51.33781786581588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a6f824c7749bef%3A0xfa71f92754b5f214!2sGewandhaus%2C+Augustusplatz+8%2C+04109+Leipzig!5e0!3m2!1sen!2sde!4v1548244216251" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0"  
                    allowFullScreen
            />
           
    </div>
    );
};

export default Location;