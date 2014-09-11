var assert = require('chai').assert,
	_ = require('underscore'),
	RomanCalculator = require('../libs/romanCalculator');

suite('test Roman Calculator', function() {
	setup(function() {
		this.romanCalculator = new RomanCalculator();
		this.dataProvider = function() {
			return {
				I          : 1,
				II         : 2,
				III        : 3,
				IV         : 4,
				V          : 5,
				VI         : 6,
				VII        : 7,
				VIII       : 8,
				IX         : 9,
				X          : 10,
				XL         : 40,
				L          : 50,
				XLIX       : 49,
				XC         : 90,
				C          : 100,
				XCIX       : 99,
				CD         : 400,
				D          : 500,
				CM         : 900,
				M          : 1000,
				MMMCMXCIX  : 3999,
				MCMLXXXVII : 1987
			};
		};
	});

	test('test Roman to Arabic', function() {
		_.forEach(this.dataProvider(), function(arabic, roman) {
			assert.strictEqual(this.romanCalculator._roman2Arabic(roman), arabic);
		}, this);
	});

	test('test Arabic to Roman', function() {
		_.forEach(this.dataProvider(), function(arabic, roman) {
			assert.strictEqual(this.romanCalculator._arabic2Roman(arabic), roman);
		}, this);
	});

	test('test summarize roman numbers', function() {
		assert.strictEqual(this.romanCalculator.summarize('MCMLXXXVII', 'MCMLXXXVII'), 'MMMCMLXXIV');

		assert.throw(_.bind(function() {
			this.romanCalculator.summarize('MMM', 'MCMLXXXVII');
		}, this), 'Too big number');
	});
});
