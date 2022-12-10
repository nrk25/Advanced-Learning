const fs = require("fs").promises;
const path = require("path");

async function main() {
  const storesResult = await findStoreFiles(path.join(__dirname, "stores"));

  const todosDir = path.join(__dirname, "TotosList");
  //console.log(storesResult);

  try {
    await fs.mkdir(todosDir);
  } catch {
    console.log(`${todosDir} already exists.`);
  }

  const readTodo = JSON.parse(
    await fs.readFile(path.join(todosDir, "todoList.json"))
  );
  readTodo.push({
    name: "Mathias Fall",
    "emp id": "14325",
    Age: "28",
    Native: "Australian",
  });

  const todo = await fs.writeFile(
    path.join(todosDir, "todoList.json"),
    JSON.stringify(readTodo, null, 2)
  );
}

main();

async function findStoreFiles(folderName) {
  let storeFiles = [];
  const items = await fs.readdir(folderName, { withFileTypes: true });
  for (let item of items) {
    if (item.isDirectory()) {
      storeFiles = storeFiles.concat(
        await findStoreFiles(path.join(folderName, item.name))
      );
    } else {
      storeFiles.push(path.join(folderName, item.name));
    }
  }
  return storeFiles;
}
