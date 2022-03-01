const Room = require("./Room");

class Appartment {
    constructor() {
        this.rooms = [];
    }

    addRoom(room) {
        this.rooms.push(room);
    }

    totalArea() {
        let tot = 0;
        this.rooms.forEach(function(element) {
            if (element instanceof Room){
                tot += element.getArea();
            }
        });
        return tot;
    }

    get(index) {
        return this.rooms[index];
    }

    len() {
        return this.rooms.length;
    }
}
module.exports = Appartment;