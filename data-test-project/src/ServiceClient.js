import Axios from 'axios';
var localhost = "http://localhost:63377";

export function AddNewChart() {
    //adding a new chart
}

export function GetCharts(callback) {
    Axios.get(localhost + "/api/Chart").then(response => {
        callback(response.data);
    })
}


export default function() {}

