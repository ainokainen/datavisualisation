import React, { Component } from 'react';
import ChartWindow from '../containers/ChartWindow';
import './Layout.css';

class Layout extends Component {
    render() {
        return (
            <div>
               <div className='Header'>Data visualisation</div>  
                    <div className='Row'>
                        <div className='LeftSide'>
                        <div>Diagram Window
                        <ChartWindow/>  
                        </div>        
                        <div>Interaction settings</div> 
                    </div>
                <div className='RightSide'>
                    <div>Info</div>
                    <div>Data thingies</div>
                </div>
                </div>
            </div>
        );
    }
}

export default Layout;