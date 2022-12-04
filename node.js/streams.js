const fs = require("fs");

const readStream = fs.createReadStream("./docs/patients1.json", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/patients.json");

// readStream.on("data", (chunk) => {
//   console.log("----New Chunk----");
//   console.log(chunk);

//   writeStream.write("\nnew chunk\n");
//   writeStream.write(chunk);
// });

//piping
readStream.pipe(writeStream);
