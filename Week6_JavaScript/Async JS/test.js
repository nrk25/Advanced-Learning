// Old method of fetching data from APIs

const todos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener("readystatechange", (err, data) => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback("data coud not found", undefined);
    }
  });

  request.open("GET", resource);
  request.send();
};

todos("https://jsonplaceholder.typicode.com/albums", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
