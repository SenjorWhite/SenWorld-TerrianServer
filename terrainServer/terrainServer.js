function terrainServer() {
    this.getTerrains = function getTerrains(userID) {
        let terrains = getUserTerrains(userID);
        return terrains;
    }
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