'use strict';

describe('Service: pokemon', function() {
	
	beforeEach(module('PokedexApp'));
	
	var $pokemon;
	beforeEach(inject(function(_$pokemon_) {
		$pokemon = _$pokemon_;
	}));

	it('should do something', function() {
		expect(!!$pokemon).toBe(true);
	});

	describe('the natures property', function() {
		it('should return an array with something in it', function() {
			expect($pokemon.natures).toBeDefined();
			expect(typeof $pokemon.natures).toEqual('object');
			expect($pokemon.natures.length).toBeGreaterThan(0);
		});

		it('should have 25 items', function() {
			expect($pokemon.natures.length).toEqual(25);
		});
	});

	describe('the characteristics property', function() {
		it('should return an array with something in it', function() {
			expect($pokemon.characteristics).toBeDefined();
			expect(typeof $pokemon.characteristics).toEqual('object');
			expect($pokemon.characteristics.length).toBeGreaterThan(0);
		}); 

		it('should have 30 items', function() {
			expect($pokemon.characteristics.length).toEqual(30);
		});
	});

	describe('the types property', function() {
		it('should return an array with something in it', function() {
			expect($pokemon.types).toBeDefined();
			expect(typeof $pokemon.types).toEqual('object');
			expect($pokemon.types.length).toBeGreaterThan(0);
		});

		it('should have 18 items', function() {
			expect($pokemon.types.length).toEqual(18);
		});
	});

	describe('the getIV method', function() {
		var hp;
		var satk;
		beforeEach(function() {
			//getIV(stat, lv, base, curr, ev, nat)
			hp = $pokemon.getIV('hp', 15, 40, 41, 4, 1);
			satk = $pokemon.getIV('satk', 15, 65, 41, 252, 1.1);
		});

		it('returns a valid iv', function() {
			expect(typeof hp).toEqual('number');
			expect(hp).toBeLessThan(32);
			expect(hp).toBeGreaterThan(-1);
			expect(typeof satk).toEqual('number');
			expect(satk).toBeLessThan(32);
			expect(satk).toBeGreaterThan(-1);
		});
	});

	describe('the getStat method', function() {
		var hp, atk, def, satk, spd;
		beforeEach(function() {
			//getStat(stat, lv, base, iv, ev, nat)
			hp = $pokemon.getStat('hp', 15, 40, 31, 4, 1); // to check the hp path
			atk = $pokemon.getStat('atk', 15, 45, 16, 0, 0.9); // to check bad nature, non-maxed iv
			def = $pokemon.getStat('def', 15, 35, 31, 0, 1); // to check netral nature
			satk = $pokemon.getStat('satk', 15, 65, 31, 252, 1.1); // to check good nature
			spd = $pokemon.getStat('spd', 15, 70, 31, 252, 1); // to check max evs
		});

		it('should return a valid stat', function() {
			expect(typeof hp).toEqual('number');
			expect(typeof atk).toEqual('number');
			expect(hp).toBeGreaterThan(10);
			expect(atk).toBeGreaterThan(0);
		});

		it('should return the right stat', function() {
			expect(hp).toEqual(41);
			expect(atk).toEqual(18);
			expect(def).toEqual(20);
			expect(satk).toEqual(41);
			expect(spd).toEqual(40);
		});
	});

	describe('the nature method', function() {
		var adamant, modest, quirky, timid, natures;
		
		beforeEach(function() {
			adamant = $pokemon.nature('adamant');
			modest = $pokemon.nature('modest');
			quirky = $pokemon.nature('quirky');
			timid = $pokemon.nature('timid');
			natures = $pokemon.natures;
		})

		it('should return an object with the right properties', function() {
			expect(typeof adamant).toEqual('object');
			expect(typeof quirky).toEqual('object');
			expect(timid.hasOwnProperty('atk')).toBe(true);
			expect(modest.hasOwnProperty('hp')).toBe(true);
		});

		it('should return a value for all natures', function() {
			for(var nature in natures) {
				expect($pokemon.nature(nature)).toBeDefined();
			}
		})

		it('should return properties within the correct range', function() {
			for(var nature in natures) {
				for(var stat in $pokemon.nature(nature)) {
					expect(adamant[stat] >= 0.9 && adamant[stat] <= 1.1).toBe(true);
				}
			}
		});
		it('should return the correct values', function() {
			expect(adamant.atk).toBe(1.1);
			expect(timid.atk).toBe(0.9);
			expect(quirky.hp).toBe(1);
			expect(modest.satk).toBe(1.1);
		});
	});

	describe('the getSpread method', function() {
		var hp, atk, def, satk, sdef, spd;
		beforeEach(function() {
			// getSpread(stat, lv, base, ev, nat) 
			hp = $pokemon.getSpread('hp', 15, 40, 4, 1);
			atk = $pokemon.getSpread('atk', 15, 45, 0, 0.9);
			def = $pokemon.getSpread('def', 15, 35, 0, 1);
			satk = $pokemon.getSpread('satk', 15, 65, 252, 1.1);
			sdef = $pokemon.getSpread('sdef', 15, 55, 0, 1);
			spd = $pokemon.getSpread('spd', 15, 70, 252, 1);
		});
		it('should return an object with arrays of numbers', function() {
			expect(hp).toBeDefined();
			expect(typeof atk).toEqual('object');
			for(var stat in satk) {
				expect(typeof parseInt(stat)).toEqual('number');
				expect(typeof satk[stat]).toEqual('object');
				expect(typeof satk[stat][0]).toEqual('number');
				expect(satk[stat][0]).toBeGreaterThan(-1);
				expect(satk[stat][0]).toBeLessThan(32);
				expect(satk[stat].length).toBeGreaterThan(0);
			}
		});
	});

	describe('the getAllSpreads method', function() {

	});

	describe('the getAllIVs method', function() {

	});

	describe('the getHiddenPower method', function() {
		// getHiddenPower(hp, atk, def, spd, satk, sdef)
		it('should return a valid hidden power', function() {
			expect(typeof $pokemon.getHiddenPower(31, 31, 31, 31, 31, 31)).toEqual('string');
			expect($pokemon.types.indexOf($pokemon.getHiddenPower(31, 31, 31, 31, 31, 31))).toBeGreaterThan(-1);
		});

		it('should only return valid Types (no fairy or normal)', function() {
			for(var i=0;i<64;i++) {
				var s = i.toString(2);
				s = ("000000" + s).slice(-6);
				expect($pokemon.getHiddenPower(s[0], s[1], s[2], s[3], s[4], s[5])).not.toEqual('Fairy');
				expect($pokemon.types.indexOf($pokemon.getHiddenPower(s[0], s[1], s[2], s[3], s[4], s[5]))).toBeGreaterThan(0);
				expect($pokemon.types.indexOf($pokemon.getHiddenPower(s[0], s[1], s[2], s[3], s[4], s[5]))).toBeLessThan(17);
			}
		});

		it('should return the correct hidden power', function() {
			expect($pokemon.getHiddenPower(31, 31, 31, 30, 31, 30)).toEqual('Bug');
			expect($pokemon.getHiddenPower(31, 31, 31, 31, 31, 31)).toEqual('Dark');
			expect($pokemon.getHiddenPower(30, 31, 31, 31, 31, 31)).toEqual('Dragon');
			expect($pokemon.getHiddenPower(31, 31, 31, 31, 30, 31)).toEqual('Electric');
			expect($pokemon.getHiddenPower(31, 31, 30, 30, 30, 30)).toEqual('Fighting');
			expect($pokemon.getHiddenPower(31, 30, 31, 30, 30, 31)).toEqual('Fire');
			expect($pokemon.getHiddenPower(31, 31, 31, 30, 30, 30)).toEqual('Flying');
			expect($pokemon.getHiddenPower(31, 30, 31, 31, 31, 30)).toEqual('Ghost');
			expect($pokemon.getHiddenPower(30, 31, 31, 31, 30, 31)).toEqual('Grass'); 
			expect($pokemon.getHiddenPower(31, 31, 31, 31, 30, 30)).toEqual('Ground');
			expect($pokemon.getHiddenPower(31, 31, 31, 30, 31, 31)).toEqual('Ice');
			expect($pokemon.getHiddenPower(31, 31, 30, 31, 30, 30)).toEqual('Poison');
			expect($pokemon.getHiddenPower(30, 31, 31, 30, 31, 31)).toEqual('Psychic');
			expect($pokemon.getHiddenPower(31, 31, 30, 30, 31, 30)).toEqual('Rock');
			expect($pokemon.getHiddenPower(31, 31, 31, 31, 31, 30)).toEqual('Steel');
			expect($pokemon.getHiddenPower(31, 31, 31, 30, 30, 31)).toEqual('Water');
		});
	});
});