# Documentation

## 11/28/22

> Added some content to the About section.

### Creating the news bar
Creating the news bar should be easy, should be as simple as attaching the menubar to the grid,
calling a data body from our server with a newsPost schema.

To create the news bar, we're going to need a new model, the 'newsPost' item, in server/models and handles in /controllers

We're also going to first need a location to create these posts, thus the admin menu needs to be created.

#### Creating the admin menu
To create the admin menu we will need to create a new HANDLER function called verifyIfAdmin, within user.js. After we update the controller, we create an axios routing and a client-side handler.

The admin menu for now should be postponed, as I have a more secure and manageable way of acessing and creating data objects and that's using the database dashboard.

For now we need to create the final addition to the reader view and that would be the actual toggle buttons and the volume menu.

## 11/30/22

### Creating the news bar pt. 2

NewsPosts as a model need to be properly actualized, that means finishing the mongoose schema, implementing consisting Next routing, adding the router to the web server, creating the controller for each interaction, etc.

This can be tested by acual interacting with the localhost and entering in the URL to find our data. 
Currently, the way the client is routing the information is incorrect, as we have a bug where the map isn't loaded. This causes our currentId to be undefined, therefore there is only one option and that's to reconfigure how we route these objects with axios.

Rather than cannabilizing and modding code from 'Post' and 'Gallery', we should create new XMLHTTPRequest bodies.

## 2/6/23 
### Fixing issue with the audioPanel and Player components.
Currently, their exists two issues:
1) The Slider component re-renders far too often for each change in the slide state, the entire panel seems to re-render.
2) Audio from the chapter can persist when leaving the Chapter component. If not paused before you leave, the component continues to play. 

#2 is the worst. This is particularly problematic because of potential memory leaks. Especially considering the fact that I would eventually like to have a trackMap that is persistent throughout the chapter itself and doesn't escape the component itself. Therefore, this bug is priority #1.

Changing the actual Audio panel itself seems to be the most reasonable although my system should've worked and been recylcleable to plug in with any component. 