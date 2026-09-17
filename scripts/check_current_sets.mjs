import fs from "fs";
const content = fs.readFileSync("scripts/write_posts.mjs", "utf8");
const setMatches = [...content.matchAll(/"(\d+)":\s*\{\s*id:\s*"set-(\d+)"/g)];
console.log("Sets in write_posts.mjs:", setMatches.map(m => m[1]));
const postMatches = [...content.matchAll(/id:\s*"post-(\d+)"/g)];
console.log("Posts in write_posts.mjs:", postMatches.map(m => m[1]));

