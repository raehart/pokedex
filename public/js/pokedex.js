var moves = require("./moves.js")
var types = require("./types.js")
var pokeDex = {}
var hoennDex = {}
function Pokemon(name, dexNumber, nationalDex, type, abilities, eggGroup, description) {
	this.name = name;
	pokeDex[nationalDex] = this;
	hoennDex[dexNumber] = this;
	this.dexNumber = dexNumber;
	this.nationalDex = nationalDex;
	this.type = type;
	this.eggGroup = eggGroup;
	this.abilities = abilities;
	this.description = description;
	this.img = name.toLowerCase();
	this.startingMoves = [],
	this.movesByLevel ={},
	this.prev = dexNumber-1;
	this.next = dexNumber+1;
	this.addMovesByLevel = function(level, move) {
		if(typeof level === "string") {
			this.startingMoves.push(move);
		} else {
			this.movesByLevel[level] = move;
		}
	}
}

//Hoenn #1  Treecko
	var treecko = new Pokemon("Treecko", 1, 252, "Grass", ["Overgrow", "Unburden(Hidden)"], ["Monster", "Dragon"], "Treecko has small hooks on the bottom of its feet that enable it to scale vertical walls. This Pokémon attacks by slamming foes with its thick tail.");
	treecko.addMovesByLevel("Start1", "Pound");
	treecko.addMovesByLevel("Start2", "Leer");
	treecko.addMovesByLevel(5, "Absorb");
	treecko.addMovesByLevel(9, "Quick Attack");
	treecko.addMovesByLevel(13, "Mega Drain");
	treecko.addMovesByLevel(17, "Pursuit");
	treecko.addMovesByLevel(21, "Giga Drain");
	treecko.addMovesByLevel(25, "Agility");
	treecko.addMovesByLevel(29, "Slam");
	treecko.addMovesByLevel(33, "Detect");
	treecko.addMovesByLevel(37, "Energy Ball");
	treecko.addMovesByLevel(41, "Quick Guard");
	treecko.addMovesByLevel(45, "Endeavor");
	treecko.addMovesByLevel(49, "Screech");
//Hoenn #2  Grovyle
	var grovyle = new Pokemon("Grovyle", 2, 253, "Grass", ["Overgrow", "Unburden(Hidden)"], ["Monster", "Dragon"], "The leaves growing out of Grovyle’s body are convenient for camouflaging it from enemies in the forest. This Pokémon is a master at climbing trees in jungles.");
	grovyle.addMovesByLevel("Start1", "Pound");
	grovyle.addMovesByLevel("Start2", "Leer");
	grovyle.addMovesByLevel("Start3", "Absorb");
	grovyle.addMovesByLevel("Start4", "Quick Attack");
	grovyle.addMovesByLevel(5, "Absorb");
	grovyle.addMovesByLevel(9, "Quick Attack");
	grovyle.addMovesByLevel(13, "Mega Drain");
	grovyle.addMovesByLevel(16, "Fury Cutter");
	grovyle.addMovesByLevel(18, "Pursuit");
	grovyle.addMovesByLevel(23, "Leaf Blade");
	grovyle.addMovesByLevel(28, "Agility");
	grovyle.addMovesByLevel(33, "Slam");
	grovyle.addMovesByLevel(38, "Detect");
	grovyle.addMovesByLevel(43, "X-Scissor");
	grovyle.addMovesByLevel(48, "False Swipe");
	grovyle.addMovesByLevel(53, "Quick Guard");
	grovyle.addMovesByLevel(58, "Leaf Storm");
	grovyle.addMovesByLevel(63, "Screech");
//Hoenn #3  Sceptile
	var sceptile = new Pokemon("Sceptile", 3, 254, "Grass", ["Overgrow", "Unburden(Hidden)"], ["Monster", "Dragon"], "The leaves growing on Sceptile’s body are very sharp edged. This Pokémon is very agile—it leaps all over the branches of trees and jumps on its foe from above or behind.");
	sceptile.addMovesByLevel("Start1", "Leaf Storm");
	sceptile.addMovesByLevel("Start2", "Night Slash");
	sceptile.addMovesByLevel("Start3", "Pound");
	sceptile.addMovesByLevel("Start4", "Leer");
	sceptile.addMovesByLevel("Start5", "Absorb");
	sceptile.addMovesByLevel("Start6", "Quick Attack");
	sceptile.addMovesByLevel(5, "Absorb");
	sceptile.addMovesByLevel(9, "Quick Attack");
	sceptile.addMovesByLevel(13, "Mega Drain");
	sceptile.addMovesByLevel(16, "Fury Cutter");
	sceptile.addMovesByLevel(18, "Pursuit");
	sceptile.addMovesByLevel(23, "Leaf Blade");
	sceptile.addMovesByLevel(28, "Agility");
	sceptile.addMovesByLevel(33, "Slam");
	sceptile.addMovesByLevel(36, "Dual Chop");
	sceptile.addMovesByLevel(39, "Detect");
	sceptile.addMovesByLevel(45, "X-Scissor");
	sceptile.addMovesByLevel(51, "False Swipe");
	sceptile.addMovesByLevel(57, "Quick Guard");
	sceptile.addMovesByLevel(63, "Leaf Storm");
	sceptile.addMovesByLevel(69, "Screech");
//Hoenn #4  Torchic
	var torchic = new Pokemon("Torchic", 4, 255, "Fire", ["Blaze", "Speed Boost(Hidden)"], "Field", "Torchic sticks with its Trainer, following behind with unsteady steps. This Pokémon breathes fire of over 1,800 degrees Fahrenheit, including fireballs that leave the foe scorched black.");
	torchic.addMovesByLevel("Start1", "Scratch");
	torchic.addMovesByLevel("Start2", "Growl");
	torchic.addMovesByLevel(5, "Ember");
	torchic.addMovesByLevel(14, "Peck");
	torchic.addMovesByLevel(10, "Sand Attack");
	torchic.addMovesByLevel(19, "Fire Spin");
	torchic.addMovesByLevel(23, "Quick Attack");
	torchic.addMovesByLevel(28, "Flame Burst");
	torchic.addMovesByLevel(32, "Focus Energy");
	torchic.addMovesByLevel(37, "Slash");
	torchic.addMovesByLevel(41, "Mirror Move");
	torchic.addMovesByLevel(46, "Flamethrower");
//Hoenn #5  Combusken
	var combusken = new Pokemon("Combusken", 5, 256, ["Fire", "Fighting"], ["Blaze", "Speed Boost(Hidden)"], "Field", "Combusken toughens up its legs and thighs by running through fields and mountains. This Pokémon’s legs possess both speed and power, enabling it to dole out 10 kicks in one second.");
	combusken.addMovesByLevel("Start1", "Scratch");
	combusken.addMovesByLevel("Start2", "Growl");
	combusken.addMovesByLevel("Start3", "Ember");
	combusken.addMovesByLevel("Start4", "Sand Attack");
	combusken.addMovesByLevel(5, "Ember");
	combusken.addMovesByLevel(10, "Sand Attack");
	combusken.addMovesByLevel(14, "Peck");
	combusken.addMovesByLevel(16, "Double Kick");
	combusken.addMovesByLevel(20, "Flame Charge");
	combusken.addMovesByLevel(25, "Quick Attack");
	combusken.addMovesByLevel(31, "Bulk Up");
	combusken.addMovesByLevel(36, "Focus Energy");
	combusken.addMovesByLevel(42, "Slash");
	combusken.addMovesByLevel(47, "Mirror Move");
	combusken.addMovesByLevel(53, "Sky Uppercut");
	combusken.addMovesByLevel(58, "Flare Blitz");
//Hoenn #6  Blaziken
	var blaziken = new Pokemon("Blaziken", 6, 257, ["Fire", "Fighting"], ["Blaze", "Speed Boost(Hidden)"], "Field", "In battle, Blaziken blows out intense flames from its wrists and attacks foes courageously. The stronger the foe, the more intensely this Pokémon’s wrists burn.");
	blaziken.addMovesByLevel("Start1", "Flare Blitz");
	blaziken.addMovesByLevel("Start2", "Fire Punch");
	blaziken.addMovesByLevel("Start3", "High Jump Kick");
	blaziken.addMovesByLevel("Start4", "Scratch");
	blaziken.addMovesByLevel("Start5", "Growl");
	blaziken.addMovesByLevel("Start6", "Ember");
	blaziken.addMovesByLevel("Start7", "Sand Attack");
	blaziken.addMovesByLevel(5, "Ember");
	blaziken.addMovesByLevel(10, "Sand Attack");
	blaziken.addMovesByLevel(14, "Peck");
	blaziken.addMovesByLevel(16, "Double Kick");
	blaziken.addMovesByLevel(20, "Flame Charge");
	blaziken.addMovesByLevel(25, "Quick Attack");
	blaziken.addMovesByLevel(31, "Bulk Up");
	blaziken.addMovesByLevel(36, "Blaze Kick");
	blaziken.addMovesByLevel(37, "Focus Energy");
	blaziken.addMovesByLevel(44, "Slash");
	blaziken.addMovesByLevel(50, "Brave Bird");
	blaziken.addMovesByLevel(57, "Sky Uppercut");
	blaziken.addMovesByLevel(63, "Flare Blitz");
//Hoenn #7  Mudkip
	var mudkip = new Pokemon("Mudkip", 7, 258, "Water", ["Monster", "Water 1"], ["Torrent", "Damp(Hidden)"], "The fin on Mudkip’s head acts as highly sensitive radar. Using this fin to sense movements of water and air, this Pokémon can determine what is taking place around it without using its eyes.");
	mudkip.addMovesByLevel("Start1", "Tackle");
	mudkip.addMovesByLevel("Start2", "Growl");
	mudkip.addMovesByLevel(4, "Water Gun");
	mudkip.addMovesByLevel(9, "Mud-Slap");
	mudkip.addMovesByLevel(12, "Foresight");
	mudkip.addMovesByLevel(17, "Bide");
	mudkip.addMovesByLevel(20, "Mud Sport");
	mudkip.addMovesByLevel(25, "Rock Throw");
	mudkip.addMovesByLevel(28, "Protect");
	mudkip.addMovesByLevel(33, "Whirlpool");
	mudkip.addMovesByLevel(36, "Take Down");
	mudkip.addMovesByLevel(41, "Hydro Pump");
	mudkip.addMovesByLevel(44, "Endeavor");
//Hoenn #8  Marshtomp
	var marshtomp = new Pokemon("Marshtomp", 8, 259, ["Water", "Ground"], ["Torrent", "Damp(Hidden)"], ["Monster", "Water 1"], "The surface of Marshtomp’s body is enveloped by a thin, sticky film that enables it to live on land. This Pokémon plays in mud on beaches when the ocean tide is low.");
	marshtomp.addMovesByLevel("Start1", "Tackle");
	marshtomp.addMovesByLevel("Start2", "Growl");
	marshtomp.addMovesByLevel("Start3", "Water Gun");
	marshtomp.addMovesByLevel("Start4", "Mud-Slap");
	marshtomp.addMovesByLevel(4, "Water Gun");
	marshtomp.addMovesByLevel(9, "Mud-Slap");
	marshtomp.addMovesByLevel(12, "Foresight");
	marshtomp.addMovesByLevel(16, "Mud Shot");
	marshtomp.addMovesByLevel(18, "Bide");
	marshtomp.addMovesByLevel(22, "Mud Bomb");
	marshtomp.addMovesByLevel(28, "Rock Slide");
	marshtomp.addMovesByLevel(32, "Protect");
	marshtomp.addMovesByLevel(38, "Muddy Water");
	marshtomp.addMovesByLevel(42, "Take Down");
	marshtomp.addMovesByLevel(48, "Earthquake");
	marshtomp.addMovesByLevel(52, "Endeavor");
//Hoenn #9  Swampert
	var swampert = new Pokemon("Swampert", 9, 260, ["Water", "Ground"], ["Torrent", "Damp(Hidden)"], ["Monster", "Water 1"], "Swampert is very strong. It has enough power to easily drag a boulder weighing more than a ton. This Pokémon also has powerful vision that lets it see even in murky water.");
	swampert.addMovesByLevel("Start1", "Hammer Arm");
	swampert.addMovesByLevel("Start2", "Tackle");
	swampert.addMovesByLevel("Start3", "Growl");
	swampert.addMovesByLevel("Start4", "Water Gun");
	swampert.addMovesByLevel("Start5", "Mud-Slap");
	swampert.addMovesByLevel(4, "Water Gun");
	swampert.addMovesByLevel(9, "Mud-Slap");
	swampert.addMovesByLevel(12, "Foresight");
	swampert.addMovesByLevel(16, "Mud Shot");
	swampert.addMovesByLevel(18, "Bide");
	swampert.addMovesByLevel(22, "Mud Bomb");
	swampert.addMovesByLevel(28, "Rock Slide");
	swampert.addMovesByLevel(32, "Protect");
	swampert.addMovesByLevel(39, "Muddy Water");
	swampert.addMovesByLevel(44, "Take Down");
	swampert.addMovesByLevel(51, "Earthquake");
	swampert.addMovesByLevel(56, "Endeavor");
	swampert.addMovesByLevel(63, "Hammer Arm");
//Hoenn #10 Poochyena
	var poochyena = new Pokemon("Poochyena", 10, 261, "Dark", ["Run Away", "Quick Feet", "Rattled(Hidden)"], "Field", "At first sight, Poochyena takes a bite at anything that moves. This Pokémon chases after prey until the victim becomes exhausted. However, it may turn tail if the prey strikes back.");
	poochyena.addMovesByLevel(1, "Tackle");
	poochyena.addMovesByLevel(4, "Howl");
	poochyena.addMovesByLevel(7, "Sand Attack");
	poochyena.addMovesByLevel(10, "Bite");
	poochyena.addMovesByLevel(13, "Odor Sleuth");
	poochyena.addMovesByLevel(16, "Roar");
	poochyena.addMovesByLevel(19, "Swagger");
	poochyena.addMovesByLevel(22, "Assurance");
	poochyena.addMovesByLevel(25, "Scary Face");
	poochyena.addMovesByLevel(28, "Embargo");
	poochyena.addMovesByLevel(31, "Taunt");
	poochyena.addMovesByLevel(34, "Take Down");
	poochyena.addMovesByLevel(37, "Crunch");
	poochyena.addMovesByLevel(40, "Sucker Punch");
//Hoenn #11 Mightyena
	var mightyena = new Pokemon("Mightyena", 11, 262, "Dark", ["Intimidate", "Quick Feet", "Moxie(Hidden)"], "Field", "Mightyena gives obvious signals when it is preparing to attack. It starts to growl deeply and then flattens its body. This Pokémon will bite savagely with its sharply pointed fangs.");
	mightyena.addMovesByLevel("Start1", "Crunch");
	mightyena.addMovesByLevel("Start2", "Thief");
	mightyena.addMovesByLevel("Start3", "Tackle");
	mightyena.addMovesByLevel("Start4", "Howl");
	mightyena.addMovesByLevel("Start5", "Sand Attack");
	mightyena.addMovesByLevel("Start6", "Bite");
	mightyena.addMovesByLevel(4, "Howl");
	mightyena.addMovesByLevel(7, "Sand Attack");
	mightyena.addMovesByLevel(10, "Bite");
	mightyena.addMovesByLevel(13, "Odor Sleuth");
	mightyena.addMovesByLevel(16, "Roar");
	mightyena.addMovesByLevel(18, "Snarl");
	mightyena.addMovesByLevel(20, "Swagger");
	mightyena.addMovesByLevel(24, "Assurance");
	mightyena.addMovesByLevel(28, "Scary Face");
	mightyena.addMovesByLevel(32, "Embargo");
	mightyena.addMovesByLevel(36, "Taunt");
	mightyena.addMovesByLevel(40, "Take Down");
	mightyena.addMovesByLevel(44, "Crunch");
	mightyena.addMovesByLevel(48, "Sucker Punch");
//Hoenn #12 Zigzagoon
	var zigzagoon = new Pokemon("Zigzagoon", 12, 263, "Normal", ["Pick Up", "Gluttony", "Quick Feet(Hidden)"], "Field", "Zigzagoon restlessly wanders everywhere at all times. This Pokémon does so because it is very curious. It becomes interested in anything that it happens to see.");
	zigzagoon.addMovesByLevel("Start1", "Tackle");
	zigzagoon.addMovesByLevel("Start2", "Growl");
	zigzagoon.addMovesByLevel(5, "Tail Whip");
	zigzagoon.addMovesByLevel(7, "Sand Attack");
	zigzagoon.addMovesByLevel(11, "Headbutt");
	zigzagoon.addMovesByLevel(12, "Baby-Doll Eyes");
	zigzagoon.addMovesByLevel(13, "Odor Sleuth");
	zigzagoon.addMovesByLevel(17, "Mud Sport");
	zigzagoon.addMovesByLevel(19, "Pin Missile");
	zigzagoon.addMovesByLevel(23, "Covet");
	zigzagoon.addMovesByLevel(25, "Bestow");
	zigzagoon.addMovesByLevel(29, "Flail");
	zigzagoon.addMovesByLevel(31, "Take Down");
	zigzagoon.addMovesByLevel(35, "Rest");
	zigzagoon.addMovesByLevel(37, "Belly Drum");
	zigzagoon.addMovesByLevel(41, "Fling");
//Hoenn #13 Linoone
	var linoone = new Pokemon("Linoone", 13, 264, "Normal", ["Pick Up", "Gluttony", "Quick Feet(Hidden)"], "Field", "Linoone always runs full speed and only in straight lines. If facing an obstacle, it makes a right-angle turn to evade it. This Pokémon is very challenged by gently curving roads.");
	linoone.addMovesByLevel("Start1", "Play Rough");
	linoone.addMovesByLevel("Start2", "Rototiller");
	linoone.addMovesByLevel("Start3", "Switcheroo");
	linoone.addMovesByLevel("Start4", "Tackle");
	linoone.addMovesByLevel("Start5", "Growl");
	linoone.addMovesByLevel("Start6", "Tail Whip");
	linoone.addMovesByLevel("Start7", "Sand Attack");
	linoone.addMovesByLevel(5, "Tail Whip");
	linoone.addMovesByLevel(7, "Sand Attack");
	linoone.addMovesByLevel(11, "Headbutt");
	linoone.addMovesByLevel(13, "Odor Sleuth");
	linoone.addMovesByLevel(17, "Mud Sport");
	linoone.addMovesByLevel(19, "Fury Swipes");
	linoone.addMovesByLevel(24, "Covet");
	linoone.addMovesByLevel(27, "Bestow");
	linoone.addMovesByLevel(32, "Slash");
	linoone.addMovesByLevel(35, "Double-Edge");
	linoone.addMovesByLevel(40, "Rest");
	linoone.addMovesByLevel(43, "Belly Drum");
	linoone.addMovesByLevel(48, "Fling");
//Hoenn #14 Wurmple
	var wurmple = new Pokemon("Wurmple", 14, 265, "Bug", ["Shield Dust", "Run Away(Hidden)"],"Bug", "Using the spikes on its rear end, Wurmple peels the bark off trees and feeds on the sap that oozes out. This Pokémon's feet are tipped with suction pads that allow it to cling to glass without slipping.");
	wurmple.addMovesByLevel("Start1", "Tackle");
	wurmple.addMovesByLevel("Start2", "String Shot");
	wurmple.addMovesByLevel(5, "Poison Sting");
	wurmple.addMovesByLevel(15, "Bug Bite");
//Hoenn #15 Silcoon
	var silcoon = new Pokemon("Silcoon", 15, 266, "Bug", "Shed Skin", "Bug", "Silcoon tethers itself to a tree branch using silk to keep from falling. There, this Pokémon hangs quietly while it awaits evolution. It peers out of the silk cocoon through a small hole.");
	silcoon.addMovesByLevel("Start1", "Harden");
	silcoon.addMovesByLevel(7, "Harden");
//Hoenn #16 Beautifly
	var beautifly = new Pokemon("Beautifly", 16, 267, ["Bug", "Flying"], ["Swarm", "Rivarly(Hidden)"], "Bug", "Beautifly's favorite food is the sweet pollen of flowers. If you want to see this Pokémon, just leave a potted flower by an open window.Beautifly is sure to come looking for pollen.");
	beautifly.addMovesByLevel("Start1", "Gust");
	beautifly.addMovesByLevel(10, "Gust");
	beautifly.addMovesByLevel(12, "Absorb");
	beautifly.addMovesByLevel(15, "Stun Spore");
	beautifly.addMovesByLevel(17, "Morning Sun");
	beautifly.addMovesByLevel(20, "Air Cutter");
	beautifly.addMovesByLevel(22, "Mega Drain");
	beautifly.addMovesByLevel(25, "Silver Wind");
	beautifly.addMovesByLevel(27, "Attract");
	beautifly.addMovesByLevel(30, "Whirlwind");
	beautifly.addMovesByLevel(32, "Giga Drain");
	beautifly.addMovesByLevel(35, "Bug Buzz");
	beautifly.addMovesByLevel(37, "Rage");
	beautifly.addMovesByLevel(40, "Quiver Dance");
//Hoenn #17 Cascoon
	var cascoon = new Pokemon("Cascoon", 17, 268, "Bug", "Shed Skin", "Bug", "Cascoon makes its protective cocoon by wrapping its body entirely with a fine silk from its mouth. Once the silk goes around its body, it hardens. This Pokémon prepares for its evolution inside the cocoon.");
	cascoon.addMovesByLevel("Start1", "Harden");
	cascoon.addMovesByLevel(7, "Harden");
//Hoenn #18 Dustox
	var dustox = new Pokemon("Dustox", 18, 269, ["Bug", "Poison"], ["Shield Dust", "Compound Eyes(Hidden)"], "Bug", "Dustox is instinctively drawn to light. Swarms of this Pokémon are attracted by the bright lights of cities, where they wreak havoc by stripping the leaves off roadside trees for food.");
	dustox.addMovesByLevel("Start1", "Gust");
	dustox.addMovesByLevel(10, "Gust");
	dustox.addMovesByLevel(12, "Confusion");
	dustox.addMovesByLevel(15, "Poison Powder");
	dustox.addMovesByLevel(17, "Moonlight");
	dustox.addMovesByLevel(20, "Venoshock");
	dustox.addMovesByLevel(22, "Psybeam");
	dustox.addMovesByLevel(25, "Silver Wind");
	dustox.addMovesByLevel(27, "Light Screen");
	dustox.addMovesByLevel(30, "Whirlwind");
	dustox.addMovesByLevel(32, "Toxic");
	dustox.addMovesByLevel(35, "Bug Buzz");
	dustox.addMovesByLevel(37, "Protect");
	dustox.addMovesByLevel(40, "Quiver Dance");
//Hoenn #19 Lotad
	var lotad = new Pokemon("Lotad", 19, 270, ["Water", "Grass"],["Swift Swim", "Own Tempo(Hidden)"], ["Water 1", "Grass"], "Lotad live in ponds and lakes, where they float on the surface. It grows weak if its broad leaf dies. On rare occasions, this Pokémon travels on land in search of clean water.");
	lotad.addMovesByLevel("Start1", "Astonish");
	lotad.addMovesByLevel(3, "Growl");
	lotad.addMovesByLevel(6, "Absorb");
	lotad.addMovesByLevel(9, "Bubble");
	lotad.addMovesByLevel(12, "Natural Gift");
	lotad.addMovesByLevel(15, "Mist");
	lotad.addMovesByLevel(18, "Mega Drain");
	lotad.addMovesByLevel(21, "Bubble Beam");
	lotad.addMovesByLevel(24, "Nature Power");
	lotad.addMovesByLevel(27, "Rain Dance");
	lotad.addMovesByLevel(30, "Giga Drain");
	lotad.addMovesByLevel(33, "Zen Headbutt");
	lotad.addMovesByLevel(36, "Energy Ball");
//Hoenn #20 Lombre
	var lombre = new Pokemon("Lombre", 20, 271, ["Water", "Grass"], ["Swift Swim", "Own Tempo(Hidden)"], ["Water 1", "Grass"], "Lombre is nocturnal—it will get active after dusk. It is also a mischief maker. When this Pokémon spots anglers, it tugs on their fishing lines from beneath the surface and enjoys their consternation.");
	lombre.addMovesByLevel("Start1", "Astonish");
	lombre.addMovesByLevel(3, "Growl");
	lombre.addMovesByLevel(6, "Absorb");
	lombre.addMovesByLevel(9, "Bubble");
	lombre.addMovesByLevel(12, "Fury Swipes");
	lombre.addMovesByLevel(16, "Fake Out");
	lombre.addMovesByLevel(20, "Water Sport");
	lombre.addMovesByLevel(24, "Bubble Beam");
	lombre.addMovesByLevel(28, "Nature Power");
	lombre.addMovesByLevel(32, "Uproar");
	lombre.addMovesByLevel(36, "Knock Off");
	lombre.addMovesByLevel(40, "Zen Headbutt");
	lombre.addMovesByLevel(44, "Hydro Pump");
//Hoenn #21 Ludicolo
	var ludicolo = new Pokemon("Ludicolo", 21, 272, ["Water", "Grass"], ["Swift Swim", "Own Tempo(Hidden)"], ["Water 1", "Grass"], "Ludicolo begins dancing as soon as it hears cheerful, festive music. This Pokémon is said to appear when it hears the singing of children on hiking outings.");
	ludicolo.addMovesByLevel("Start1", "Astonish");
	ludicolo.addMovesByLevel("Start2", "Growl");
	ludicolo.addMovesByLevel("Start3", "Mega Drain");
	ludicolo.addMovesByLevel("Start4", "Nature Power");



//Hoenn #63 Skitty
	var skitty = new Pokemon("Skitty", 63, 300, "Normal", ["Cute Charm", "Normalize", "Wonder Skin(Hidden)"], ["Field", "Fairy"], "Skitty has the habit of becoming fascinated by moving objects and chasing them around. This Pokémon is known to chase after its own tail and become dizzy.");
	skitty.addMovesByLevel("Start1", "Fake Out");
	skitty.addMovesByLevel("Start2", "Growl");
	skitty.addMovesByLevel("Start3", "Tail Whip");
	skitty.addMovesByLevel("Start4", "Tackle");
	skitty.addMovesByLevel(4, "Foresight");
	skitty.addMovesByLevel(7, "Attract");
	skitty.addMovesByLevel(10, "Sing");
	skitty.addMovesByLevel(13, "Disarming Voice");
	skitty.addMovesByLevel(16, "Double Slap");
	skitty.addMovesByLevel(19, "Copycat");
	skitty.addMovesByLevel(22, "Feint Attack");
	skitty.addMovesByLevel(25, "Charm");
	skitty.addMovesByLevel(28, "Wake-Up Slap");
	skitty.addMovesByLevel(31, "Assist");
	skitty.addMovesByLevel(34, "Covet");
	skitty.addMovesByLevel(37, "Heal Bell");
	skitty.addMovesByLevel(40, "Double-Edge");
	skitty.addMovesByLevel(43, "Captivate");
	skitty.addMovesByLevel(46, "Play Rough");



//name, dexNumber, nationalDex, type, abilities, eggGroup, description

module.exports = pokeDex;
module.exports.hoenn = hoennDex;