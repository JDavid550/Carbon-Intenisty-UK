const fetch = require('../utils/fetch.js');

const API = 'https://api.carbonintensity.org.uk/intensity/stats/2021-01-01T00:00Z/2021-01-30T00:00Z/24';



const execute = async () => {
    try{
        const data = await fetch(API);
        for (let i = 0; i < API.length; i++) {
            console.log(data.data[i].from);
            console.log(data.data[i].intensity.average)
        }
        
    }catch(error){
        console.log(error);
    }
}

execute();




        

    