const terrainMap = require("./terrainMap");
let worldMap = [];

function terrainServer() {
    initTerrainMap();

    this.getTerrains = function getTerrains(userID) {
        let terrains = getUserTerrains(userID);
        return terrains;
    }

    this.getWorldMap = function () {
        return worldMap.getMap();
    }
}


function initTerrainMap() {
    if (!loadMap()) {
        worldMap = terrainMap.createTerrainMap();
        worldMap.createMap(100, 100);
    }
}

function loadMap() {
    return false;
}

function getUserTerrains(userID) {
    userID = userID | "n/a";
    let terrains = {};

    if (userID === -1) {
        terrains = {
            "userID": "n/a",
            "terrain": "Not exists."
        };
    }

    return terrains;
}

exports.terrainServer = new terrainServer();