import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import UButton from '../ui/uButton';


export default class Discount extends Component {
    state={
        discountStart:0,
        discountEnd:30
    }
    percentage = () =>{
        
        if(this.state.discountStart < this.state.discountEnd){
                this.setState({
                    discountStart: this.state.discountStart + 1
                })
        }
    }

//call the porcentage function again 
    componentDidUpdate(){
        setTimeout(() =>{
            this.percentage()
        },30)
    }


  render() {
    return (
      <div className="center_wrapper">
        <div className="discount_wrapper">
            <Fade
                onReveal={() =>this.percentage()}
            >
                 <div className="discount_prcnt">
                    <span>{this.state.discountStart}%</span>
                    <span>OFF</span>
                </div>
            </Fade>
           <Slide>
               <div className="discount_description">
                    <h3>Purchase tickets before 16th June</h3>
                    <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                   
                        <UButton 
                            text="Purchase tickets"
                            background="red"
                            color="#ffffff"
                            link="/"
                        />
                    
            </div>
           </Slide>
            
      </div>
      
    </div>
        
      
    )
  }
}
