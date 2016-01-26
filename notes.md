POKEMON
user stories
	as a user, I can filer by different pokedexes
	as a user, I can access an individual page for each of the 721 pokemon
		as a user, I can 
	as a user, I can see a page with all of the pokemon in sprite form with their name and numbers
		as a user, I can click on one of these pokemon to be taken to their full page
		as a user, on the main page, I can filter by pokemon type
	as a user, I can access a teambuilder page where I can make a team of 6 pokemon
		as a user, I can choose a moveset for those 6 pokemon
			as a user, I can see an elemental analysis page for my team based on type weaknesses
	as a user, I can access a breeding guide page
		as a user, I can select a pokemon I want to breed and I will see a list of egg moves
			as a user, I can see a list of compatible breeding partners for that pokemon
				as a user, I can choose a move and see a list of comaptible partners to get that move
				as a user, I can see these breeding partners in the form of icons like on the main page
				
_____________________

pokemon factory
	have reference keys for all the regional pokedexes
	key for pokemon egg groups and movesets
	maybe try to migrate all the AJAX requests here
	HM/TM list
main page
	complete pokemon list with sprites with a search function that filters in real time (angular)
pokemon page
	moves list, sorted my learn method and level
		moves, when clicked, bring up a modal with more info from another query to the API
	image on banner with name, species, abilities
teambuilder page
	dropdowns for pokemon selection
		4 dropdowns for move selection (maybe make directive?)
	elemental analysis tool to find group weaknesses, etc
	keep back-end in mind as we build, node users will be useful for team building
	potential battle simulator
breeding guide page
	(load pokedex with a custom key for egg groups and movesets)
	make an egg group/breeding move calculator to find matches
Gym Leader Pages
	great opportunity for stylistic layouts
	Type, pokemon list, strategy - take into account accessible pokemon before gym.
	as a user, I can see varying degrees of information depending on settings/choices
		siloetted gym leader and page
		shown gym leader and type/type weaknesses
		full pokemon roster and battle strategy
Coverage Calculator
	
City Page
	location on map
	buildings in city
	shops/inventory in city
	gym
	events?