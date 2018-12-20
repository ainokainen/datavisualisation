import { scaleOrdinal } from 'd3-scale';


function ColorLuminance(hex , lum) {

    hex= String(hex).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
        hex= hex[0]+ hex[0]+ hex[1]+ hex[1]+ hex[2]+ hex[2];
    }
    lum = lum || 0;

    let rgb= '#', c, i;
                    console.log(rgb,'Color 3 rgb') ;
    for (i=0; i<3; i++) {
        c= parseInt(hex.substr(i*2,2), 16);
        c = Math.round(Math.min(Math.max(0, c+(c*lum)), 255)).toString(16);
        rgb += ('00'+ c).substr(c.length);
    }  
                    console.log(rgb,'Color 3 rgb') ;
 
    return rgb;
}


const color3 = scaleOrdinal().range([
    ColorLuminance('#6699cc', 0),
    ColorLuminance('69C', 0.3),
    ColorLuminance('69C', 0.6),
    ColorLuminance('69C', 0.9),
]); 

export default color3;

