async function getApiData() {
  var response = await fetch("https://jsonplaceholder.typicode.com/posts")  // Api fetch request
    .then((data) => data.json())                                            //convert raw data to json format
    .catch((err) => console.log("Error:", err));                          // Throw Error

  if (response) {                                          // If we got the response
    var reqData = [];
    for (let i = 0; i < 5; i++) {
      reqData.push(response[i].title);   // Adding titles from response data into new array 
    }
  }
  return reqData;
}

getApiData().then((data) => {
  console.log(data);
});
