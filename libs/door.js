var HundredDoors = function() {
	// when TRUE the door is closed
	this._doors = [];
	this.CLOSED_VALUE = true;
	this._setDoors();
};

HundredDoors.prototype._setDoors = function() {
	for (var i = 0; i < 100; i++) {
		this._doors.push(this.CLOSED_VALUE);
	}
};

HundredDoors.prototype.getDoors = function() {
	return this._doors;
};

HundredDoors.prototype.getDoor = function(n) {
	return this._doors[n];
};

HundredDoors.prototype.toggleDoor = function(n) {
	this._doors[n] = !this._doors[n];
	return this._doors[n];
};

HundredDoors.prototype.toggleNthDoors = function(n) {
	for (var i = n-1; i < this._doors.length; i += n) {
		this.toggleDoor(i);
	}
};

HundredDoors.prototype.toggleHundredDoors = function() {
	for (var i = 1; i <= 100; i++) {
		this.toggleNthDoors(i);
	}
	console.log(this.getDoors());
};

module.exports = HundredDoors;
