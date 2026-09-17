import fs from "fs";

const alts = [
  "https://www.lego.com/cdn/cs/set/assets/blt0e81d1708c094553/10303.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/blta36d50150d4f6227/10303_alt1.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/blt8339b9be174e3eaf/10303_alt2.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/blt4662a8298ae7273a/10303_alt3.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/bltc0e7acab47e8652c/10303_alt4.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/blt949e1afdb48054b1/10303_alt5.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/blt4aaa1f6f8792a2f1/10303_alt6.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/bltbbde02e2c3a58071/10303_alt7.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/bltd92c66637c40053e/10303_alt8.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/blt2aaa0cb4c5e28a98/10303_alt9.png?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/blt58e8667fe42f278d/10303_alt10.jpg?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1",
  "https://www.lego.com/cdn/cs/set/assets/bltfdc96d625144c251/10303_alt11.jpg?fit=bounds&format=webply&quality=85&width=1200&height=1200&dpr=1"
];

async function check() {
  for (const url of alts) {
    const res = await fetch(url, { method: "HEAD" });
    console.log(`${res.status} -> ${url.split("/").pop().split("?")[0]}`);
  }
}
check();
