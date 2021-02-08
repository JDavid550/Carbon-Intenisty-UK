let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const fetch = (carbon_api_url)=>{
    return new Promise((resolve,reject)=>{
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',carbon_api_url,true);
        xhttp.onreadystatechange = ()=>{
            if(xhttp.readyState === 4){
                if(xhttp.status ===200){
                    resolve(JSON.parse(xhttp.responseText));
                }else{
                    reject (new Error('Error in your request'));
                }      
            }
        }
        xhttp.send()

    });
};

module.exports=fetch;

