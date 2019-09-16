import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import SideDrawer  from './SideDrawer';


export default class Header extends Component {

  state ={
    drawerOpen:false,
    headerShow:false
  }
// after the component its mounts => adds a event listener
// remenber to remove the eventlisteners whenever you use a defrent component  -> didUnmount
  componentDidMount(){
      window.addEventListener('scroll', this.handleScroll);
  }
handleScroll = () => {
    if(window.scrollY>0){
        this.setState({
            headerShow:true
        })
    }else{
        this.setState({
            headerShow:false
        })
    }
}
  toggleDrawer = (value) =>{
      this.setState({
            drawerOpen:value
      })
  }

  render() {
    return (
      <AppBar
        position="fixed"
        style = {{
          backgroundColor:this.state.headerShow ? '#212121' : 'transparent',
          boxShadow:'none',
          padding:'10px 0px'
        }}
      >
        <Toolbar>
          <div className="header_logo">
              <div className="font_righteous header_logo_venue">Venue</div>
              <div className="header_logo_title font_newrocker">Musical Event Orginizer</div>
          </div>
          <IconButton
              aria-label="Menu"
              color="inherit"
              onClick={()=>this.toggleDrawer(true)}
          >
              <MenuIcon />
          </IconButton>
          <SideDrawer 
              open={this.state.drawerOpen}
              onClose={(value) => this.toggleDrawer(value) }
          />
        </Toolbar>
      </AppBar>
    )
  }
}
