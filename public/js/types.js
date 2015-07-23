var typeList = ["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"]
var types = {}
function Type(name) {
	types[name.toLowerCase()] = this
	this.name = name;
	this.attack = {};
	this.defense = {};
	for(var i=0;i<typeList.length;i++) {
		this.attack[typeList[i]] = 1;
		this.defense[typeList[i]] = 1;
	}

	this.addDefense = function(strong, weak) {
		for(var i=0;i<strong.length;i++) {
			this.defense[strong[i]] = 0.5;
		}
		for(var i=0;i<weak.length;i++) {
			this.defense[weak[i]] = 2;
		}
	};

	this.addAttack = function(strong, weak) {
		for(var i=0;i<strong.length;i++) {
			this.attack[strong[i]] = 2;
		}
		for(var i=0;i<weak.length;i++) {
			this.attack[weak[i]] = 0.5;
		}
	};
}

function fight(attackType, defenseType) {
	var offense = attackType.attack;
	return offense[defenseType]
}

fire = new Type("Fire");
fire.addAttack(["bug", "grass", "ice", "steel"], ["dragon", "fire", "rock", "water"]);
fire.addDefense(["water", "ground", "rock"], ["bug", "fire", "grass", "ice", "steel"]);

water = new Type("Water");
water.addAttack(["fire", "ground", "rock"],["dragon","grass","water"]);
water.addDefense(["fire","ice","steel","water"], ["electric", "grass"]);

module.exports = types;