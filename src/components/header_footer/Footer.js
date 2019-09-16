import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer  style={{marginTop:500}}>
                <Fade delay={500}>

                    <div className="font_righteous footer_logo_venue">Venue</div>
                        <div className="footer_copyright">

                            All rights reserved @venue.org 2019<br/>
                            email: venue@org.com | tel: +4951754523
                        </div>
                </Fade>
        </footer>
    );
};

export default Footer;