import React, { Component } from 'react'
import UButton from '../ui/uButton';
import Zoom from 'react-reveal/Zoom';

export default class Pricing extends Component {

    state={
        prices:[55,100,250],
        positions:['Balcony','Medium','Star'],
        description:['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' ],
        linkto:['http://b','http://m','http://s'],
        delay:[500,0,500]
    }

    //use parenthesis to return jsx not brackets
    showBoxes = () => (
        this.state.prices.map((box, i) =>(

        <Zoom key={i} delay={this.state.delay[i]}>
            
        
                <div className="pricing_item">
                        <div className="pricing_inner_wrapper">

                            <div className="pricing_title">
                                    <span>€{this.state.prices[i]}</span>
                                    <span>{this.state.positions[i]}</span>
                            </div>
                            <div className="pricing_description">
                                    <span>{this.state.description[i]}</span>
                            </div>
                            <div className="pricing_buttons">
                                    <UButton
                                        text="Purchase"
                                        background="#ffa800"
                                        color="#ffffff"
                                        link={this.state.linkto[i]}
                                    />
                            </div>
                        </div>

                    </div>
        
        
        
        
        </Zoom>
           
        ))
    )
  render() {
    return (
      <div className="bck_gray">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>
                <div className="pricing_wrapper">

                    {this.showBoxes()}

                </div>

            </div>
          
      </div>
    )
  }
}
