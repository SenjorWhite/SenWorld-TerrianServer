let terrain = require("./terrain");

let map = [];

function terrainMap() {
    this.createMap = function createMap(xSize, ySize) {
        map = [];
        for (let i = 0; i < xSize; i++) {
            map[i] = [];
            for (let j = 0; j < ySize; j++) {
                map[i][j] = terrain.createTerrain();
            }
        }
    }

    this.getMap = function(){
        return map;
    }
}

exports.createTerrainMap = function () { return new terrainMap() };

