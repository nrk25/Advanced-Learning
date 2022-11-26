const album = (resource) => {
  return new Promise((resolve, rejecct) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        rejecct("error getting resource");
      }
    });

    request.open("GET", resource);
    request.send();
  });
};

album("https://jsonplaceholder.typicode.com/albums")
  .then((data) => console.log("Promise resolved: ", data))
  .catch((err) => console.log("Promise rejected", err));
