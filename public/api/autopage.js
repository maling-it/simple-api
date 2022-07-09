const path = require("path");
const fs = require("fs");
// Specific a path for output json
const spFile = path.join(".", "page.json");
const spFolder = path.join("page");

const spContent = fs.readFileSync(spFile).toString();
const deserializedSpdf = JSON.parse(spContent);
const page = deserializedSpdf.page;

page.forEach(function(sp) {
  if (sp === "")
    return;
    // define layout and title here
  // const content = "---\nlayout: page\ntitle: " + sp + "\n---";
  const content = "<?php header('Content-Type: image/jpeg');$json=json_decode(file_get_contents('../../data/" + sp + ".json'),true);$jumlah=count($json);$pilih=$json[rand(0,$jumlah-1)];echo file_get_contents($pilih);";
  const file = path.join(spFolder, sp + ".php");
  fs.writeFileSync(file, content);
});