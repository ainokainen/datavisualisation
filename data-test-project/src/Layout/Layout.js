import React, { Component } from 'react';
import ChartWindow from '../containers/ChartWindow';
import Info from "../components/Info/Info";
import './Layout.css';
import DataForm from '../components/DataForm';
import ChartView from '../components/ChartView';

class Layout extends Component {
    render() {
        return (
            <div className='flex-container'>
            <div className='header' >Data visualisation</div>  
            <div>
                <div className='row'>
                    <div className='side'>
                        <h3>Diagram Window</h3>
                            <div className='diagram-window'>
                                <ChartWindow /> 
                            </div>        
                            <div>Interaction settings
                            </div> 
                        </div>
                     <div className='right-side'>
                        <Info />
                        <div>
                            <DataForm />
                            <p>Headline</p>
                            <p>X-value</p>
                            <p>Y-value</p>
                            <p>Text field for data</p>
                                <ChartView />
                        </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Layout;