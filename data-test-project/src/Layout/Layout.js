import React, { Component } from 'react';
import ChartWindow from '../containers/ChartWindow';
import Info from "../components/Info/Info";
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div>
               <div className='header' >Data visualisation</div>  
                    <div className='row'>
                        <div className='left-side'>
                        <div>Diagram Window
                        <ChartWindow/>  
                        </div>        
                        <div>Interaction settings
                        </div> 
                    </div>
                <div className='right-side'>
                    <Info/>
                    <div>Data thingies</div>
                    <p>Headline</p>
                    <p>X-value</p>
                    <p>Y-value</p>
                    <p>Text field for data</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Layout;