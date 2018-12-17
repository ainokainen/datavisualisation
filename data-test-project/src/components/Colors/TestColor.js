import React, { Component } from 'react';

class TestColor extends Component {
    constructor (props) {
        super(props)
        this.state= {
            hex:'fff',
            lum:0
        };
    }
    ColorLuminance(hex, lum) {
    hex= String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex= hex[0]+ hex[0]+ hex[1]+ hex[1]+ hex[2]+ hex[2];
    }
    lum = lum || 0;
    console.log(hex, 'Testi väri');

    let rgb= '#', c, i;
    for (i=0; i<3; i++) {
        c= parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c+(c*lum)), 255)).toString(16);
        rgb += ('00'+ c).substr(c.length);
    }   
    return rgb;
    }

    render() {
        return (
            <div>
    {console.log(this.state.hex, 'Testi väri')};
                { this.state.ColorLuminance('69c', 0)}
 {/*                { this.state.ColorLuminance('69c', 0.3)}
                { this.state.ColorLuminance('69c', 0.6)}
                { this.state.ColorLuminance('69c', 0.9)} */}
            </div>
        );
    }
}

export default TestColor;