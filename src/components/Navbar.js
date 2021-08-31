import React, { Component } from 'react'

export class Navbar extends Component {
    
    render() {
        console.log(this.props.menulist[0]);
        return (
            <div>
                <nav>
                    <div class="nav-wrapper">         
                        <a href="" className="brand-logo">KM Demo</a> 
                        <a href="" className="sidenav-trigger" data-target="mobile-menu"><i className="material-icons">menu</i></a> 
                        <ul class="text-blue right hide-on-med-and-down">         
                            <li><a herf=""><i className="material-icons left">home</i>{this.props.menulist[0]}</a></li>        
                            <li><a herf=""><i className="material-icons left">contacts</i>{this.props.menulist[1]}</a></li>        
                            <li><a herf=""><i className="material-icons left">settings</i>{this.props.menulist[2]}</a></li>        
                        </ul>  
                    </div>
                </nav>
                <ul class="sidenav red lighten-3" id = "mobile-menu">         
                    <li><a herf=""><i className="material-icons">home</i>{this.props.menulist[0]}</a></li>        
                    <li><a herf=""><i className="material-icons">contacts</i>{this.props.menulist[1]}</a></li>        
                    <li><a herf=""><i className="material-icons">settings</i>{this.props.menulist[2]}</a></li>        
                </ul>         
            </div>
        )
    }
}

export default Navbar;
