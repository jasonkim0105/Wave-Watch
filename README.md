# Wave-Watch
Proposal. 
Background: 
Wave watch is a project that helps surfers of all skill level check out the forecast for their favorite surf spot around Santa Cruz and Capitola. Users will be present a map of the bay and given 5 locations that they can choose from. 
Upon choosing the location they are interested in, a graph will pop up which presents them with the weather, tide level, and wind intensity associated with the spot. In addition, users will be able to close out the location to bring up information on a second location, allowing them to compare the two. 

In wave watch , users will be able to:

  - Click on an interactive map to choose a surf spot
  - Pulls up graph that shows locations weather, tide level, wind intensity(?)
  - Exit out of aaid graphic to choose another
  - Able to compare the two clocked locations if desired

In addition, this project will include:

  - An instruction list that lists how to navigate through the website
  - A production README

This project will be implemented with the following technologies:

  - D3 library
  - Marine API (https://stormglass.io/)

![image](https://user-images.githubusercontent.com/76461881/132000391-b4f59e4a-8a96-46a3-8540-71bb486ed7d7.png)

  - Nav links include links to this project's Github repo, my Linkedin, and directions on how the visualizer works.
  - The map will be interactive, allowing user to choose locations listed on the map.
  - The right box which contains the location data will generate according to which location gets selected.
  - There will be two buttons, exit and compare that will allow user to exit out of current location and choose a different location to compare the original and new selected locations.


Implementation Timeline

Friday and weekend: setup project as well as webpack. Tweek around with the API and make sure it works correctly. Work around with D3 visualization. Create the map class that will contain the 5 locations. Start creating the 5 location classes that will then contain the data.
Monday: Finish up creating location classes. Make the map and locations render correctly. This is the day I try to make sure the data clicks correctly according to location, which is selected from the map.
Tuesday: start working on the exit/compare feature. Implement this using D3 to put the two different locations next to each other. Create the nav bar features.
Wednesday: Finish implementing user controls and make sure everything fits together properly. Next, focus on styling to make sure everything is looking as pretty as it can be. Rewrite the README for this github to make it more fit.

Bonus features:

  - Add a link that brings up pictures of each location
  - Add a feature that lets user know if the location is busy or empty.

