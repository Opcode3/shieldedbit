
export default class Request{

    response 
  
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


// let data = null;
//      fetch('https://jsonplaceholder.typicode.com/todos/1')
//      .then(response => response.json())
//      .then(json => {
//          data = json;
//      console.log(json)})
//     return data;