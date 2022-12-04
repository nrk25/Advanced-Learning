const fs = require("fs");

//reading files
// fs.readFile("./docs/patients.json", (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString());
// });

//writing files
// fs.writeFile("./docs.patients.json", `{"name": "Hitler"}`, () => {
//   console.log("file written with new lines");
// });
// fs.writeFile("./docs/patients1.json", `{"name": "Harrel"}`, () =>
//   console.log("new file created")
// );

//directories
// if (!fs.existsSync("./docs/assets")) {
//   fs.mkdir("./docs/assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("fodler created");
//   });
// } else {
//   console.log("folder already exists, hence, deleting it!");
//   fs.rmdir("./docs/assets", (err) => {
//     console.log("Folder delted");
//   });
// }

//deleting files
fs.existsSync("./docs/patients1.json", (err) => {
  if (err) {
    console.log(err);
  }
  console.log(file);
});
