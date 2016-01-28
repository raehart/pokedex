# Pokedex
##### By Brigette Eckert and Kenneth Black
Gottta catch 'em all 

##### I learned

(Brigette): 

 - Displaying nested information from an external API in differnet locations (ie pictures for each pokemon on main page out of each pokemons object)
 - Praticed Using Angular JS 

(Kenneth):

 - Worked on testing angular factories with Jasmine
 - How to use Bourbon and Sass

##### Skills used 

 - AngularJS
 - JavaScript
 - HTML5
 - CSS3
 - Bootstrap
 - Sass
 - TDD
 - Jasmine

##### User Stories

 - as a user, I can access an individual page for each of the 721 pokemon
 - as a user, I can see a page with all of the pokemon in sprite form with their name and numbers
 - as a user, I can click on one of these pokemon to be taken to their full page
 - as a user, on the main page, I can filter by pokemon type

### To Do

pokemon factory

 - have reference keys for all the regional pokedexes
 - key for pokemon egg groups and movesets
 - maybe try to migrate all the AJAX requests here
 - HM/TM list

main page - Brigette

 - complete pokemon list with sprites with a search function that filters in real time (angular)
 - Fliter Pokemon by type, region etc. 
 - Add regional Pokedexes 
 - Multiple pages to increase loading speed.

pokemon page - Brigette

 - moves list, sorted my learn method and level
		moves, when clicked, bring up a modal with more info from another query to the API
 - image on banner with name, species, abilities

gymleader page - Brigette
	
	-select game from menu
		-display gym leader name, badge, reward and pokemon

teambuilder page - Kenny

 - dropdowns for pokemon selection
		4 dropdowns for move selection (maybe make directive?)
 - elemental analysis tool to find group weaknesses, etc
 - keep back-end in mind as we build, node users will be useful for team building

breeding guide page - Kenny

 - (load pokedex with a custom key for egg groups and movesets)
 - make an egg group/breeding move calculator to find matches

IV Caluclator Page - Kenny

 - fix the ng-options or add a seperate ng-modeled input to make it more smooth
 - add a save pokemon feature - localstorage for now.