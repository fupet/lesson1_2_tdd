var RomanCalculator = function() {
	this._romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
	this._arabics = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
};

RomanCalculator.prototype._roman2Arabic = function(roman) {
	var arabic = 0;

	for (var i = 0; i < this._romans.length; i++) {
		if (roman.indexOf(this._romans[i]) === 0) {
			arabic += this._arabics[i];
			roman = roman.substr(this._romans[i].length);
			i--;
		}
	}

	return arabic;
};

/**
 * Convert arabic number to roman
 *
 * @param {integer} arabic - Arabic number
 * @returns {string} - Roman number
 * @private
 */
RomanCalculator.prototype._arabic2Roman = function(arabic) {
	var roman = '';

	for (var i = 0; i < this._arabics.length; i++) {
		if (arabic >= this._arabics[i]) {
			roman += this._romans[i];
			arabic -= this._arabics[i];
			i--;
		}
	}

	return roman;
};

RomanCalculator.prototype.summarize = function(roman1, roman2) {
	var arabic1 = this._roman2Arabic(roman1),
		arabic2 = this._roman2Arabic(roman2),
		result = arabic1 + arabic2;

	if (result > 3999) {
		throw new Error('Too big number');
	}

	return this._arabic2Roman(result);
};

module.exports = RomanCalculator;
