var assert = require('chai').assert,
	_ = require('underscore'),
	HundredDoors = require('../libs/door');

suite('test Hundred Doors', function() {
	setup(function() {
		this.door = new HundredDoors();
	});

	test('test Number of Doors', function() {
		assert.strictEqual(this.door.getDoors().length, 100);
	});

	test('test Toggle Door', function() {
		var n = 0,
			doorStatus = this.door.getDoor(n),
			toggled = this.door.toggleDoor(n);

		assert.notStrictEqual(toggled, doorStatus);
	});

	test('test All the doors is Closed', function() {
		for (var i = 0; i < this.door.getDoors().length; i++) {
			assert.strictEqual(this.door.getDoor(i), this.door.CLOSED_VALUE);
		}
	});

	test('test Nth door is closed', function() {
		var testNthState = _.bind(function(nth, expected) {
			var n = 0;
			for (var i = 0; i < this.door.getDoors().length; i++) {
				n++;
				if (n === nth) {
					n = 0;
					assert.strictEqual(this.door.getDoor(i), expected);
				}
			}
		}, this),
			testValue = 14;

		this.door.toggleNthDoors(testValue);
		testNthState(testValue, !this.door.CLOSED_VALUE);
	});

	test('test finish', function() {
		this.door.toggleHundredDoors();
	});
});
