class Room {
    constructor(name, width, length) {
        this.name = name;
        this.width = width;
        this.length = length;
    }

    getArea() {
        return this.width * this.length;
    }
}
module.exports = Room;