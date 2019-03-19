let express = require("express");
let app = express();
let restPort = 3939;
let terrainServer = require("./terrainServer/terrainServer.js").terrainServer;

app.get("/terrain/world", function (req, res){
    let worldMap = terrainServer.getWorldMap();
    res.json(worldMap);
})

app.get("/terrain/:userID", function (req, res) {
    let userID = req.params.userID | "n/a";
    let response = terrainServer.getTerrains(userID);
    res.json(response);
})

app.listen(restPort, function () {
    console.log("Terrain Server has started and listening on port: %s.", restPort);
})