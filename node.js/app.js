const os = require("os");
const people = ["Ryan", "Rob", "clister", "properite"];
const ages = [22, 54, 32, 44];

console.log(os.platform(), os.homedir());

module.exports = {
  people,
  ages,
};
