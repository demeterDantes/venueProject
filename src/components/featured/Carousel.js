 import React from 'react';
 import Slider from 'react-slick';
 import slide1 from '../../resources/images/slide1.jpg';
 import slide2 from '../../resources/images/slide2.jpg';
 import slide3 from '../../resources/images/slide3.jpg';
 
 
 const Carousel = () => {

    const settings ={
        dots: false,
        infinite:true,
        autoplay: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed:500
    }

     return (
         <div className="carousel_wrapper"
            style={{
                //calc the hight of window dynamicly
                height:`${window.innerHeight}px`,
                overflow:'hidden'
            }}
        >
            <Slider {...settings}>
                    <div>
                        <div className="carousel_image"
                            style = {{
                                background:`url(${slide1})`,
                                height:`${window.innerHeight}px`
                            }}
                        >
                           
                        </div>
                    </div>
                    <div>
                        <div className="carousel_image"
                            style = {{
                                background:`url(${slide2})`,
                                height:`${window.innerHeight}px`
                            }}
                        >
                           
                        </div>
                    </div>
                    <div>
                        <div className="carousel_image"
                            style = {{
                                background:`url(${slide3})`,
                                height:`${window.innerHeight}px`
                            }}
                        >
                            
                        </div>
                    </div>
              
                
            </Slider>
        </div>
     );
 };
 
 export default Carousel;