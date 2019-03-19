function terrain() {
    this.landForm = "Plain";
    this.climate = "Normal";
}

exports.createTerrain = () => { return new terrain() };