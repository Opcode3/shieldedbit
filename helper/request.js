
export async function postRequest(url, form_data, success_call, failure_call){

  fetch(url, { method: 'POST', body: form_data })
    .then(function(response){
        response.json().then(function(data) {
          success_call(data);
    });
  }).catch(function(error) {
      failure_call(error);
  });

}



// fetch('https://passbuttons.com/fnn/registration', {
//   method: 'POST',
//   body: form_data
// }).then(function(response){
//     response.json().then(function(data) {

//         setLoading(false)
//         if(data.code == 200){
//           console.log('Success');
//           setLevel(1)
//         }else{
//           console.log(data)
//           setAlert(data.message)
//         }

//     });
// }).catch(function(error) {
//     console.log('Fetch Error:', error);
//     setLoading(false)
//     setAlert('Unable to make request. Check your internet connection')

// });