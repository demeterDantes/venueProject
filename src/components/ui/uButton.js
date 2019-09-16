import React from 'react';
import Button from '@material-ui/core/Button'

import TicketIcon from '../../resources/images/icons/ticket.png';

const uButton = (props) => {
    return (
        
            <Button 
                href={props.link}
                variant="contained"
                size="small"
                style={{
                    background: props.background,
                    color:props.color
                }}
            > 
            
                <img
                     
                   src = {TicketIcon}
                   className="iconImage"
                   alt="icon-button"
                />
                {/* dynamicle passing props to button */}
                {props.text}
            </Button>
        
        
    );
};

export default uButton;