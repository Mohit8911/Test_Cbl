async function getApiData() {
  var apiData = await fetch("https://jsonplaceholder.typicode.com/posts")
    .then((data) => data.json())
    .catch((err) => console.log("Error::",err));

    if (apiData) {
    var reqData = [];
    for (let i = 0; i < 5; i++) {
      reqData.push(apiData[i].title);
    }
}
  return reqData;
}

async function a() {
  let reqData = await getApiData();
  console.log(reqData);
}

a();
