
export default class Request{ 
  
    post(url, data, header = ''){
        return 'Making use of Post request'
    }

    get(url, data, header = ''){
        // let response = null
        // fetchApi(url, function(data){
        //     response = data;
        //     // console.log(response);
        // });
        // console.log(response)
        // return response;
        return 'Making use of get request'

    }

    put(url, data, header = '') {
        return 'Making use of put request'
    }

    delete(url, data, header = ''){
        return 'Making use of delete request'
    }
}

function fetchApi(url, callback){
     fetch('https://jsonplaceholder.typicode.com/todos/1')
     .then(response => response.json())
     .then(json => callback(json))
}

export const postData =  async (url = '', data = {}) => {
    // Default options are marked with *
    const response = await fetch(url, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'no-cors', // no-cors, *cors, same-origin
      cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    //   credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        // 'Content-Type': 'application/json'
        'Content-Type': 'application/x-www-form-urlencoded'
      },
    //   redirect: 'follow', // manual, *follow, error
    //   referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


// let data = null;
//      fetch('https://jsonplaceholder.typicode.com/todos/1')
//      .then(response => response.json())
//      .then(json => {
//          data = json;
//      console.log(json)})
//     return data;