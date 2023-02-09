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

## 2/7/23 
### Creating the Terminal Emulator
I followed the work done on a React-based terminal emulator that was done in the past. Unfortunately, I need something different and for myself. For the best results, the terminal emulator should have these features:

1) A pseudo-file system (or a fake one)
2) Commands with parameters
3) Interpreting nested commands
4) Stateful output fields
5) HTML element output
6) *Unnecessary:* Piping features.

The hardest portion of the terminal emulator from a programming perspective, is the command parsing. Ideally, a parser capable of handling commands in a perfect BNF fashion would allow us to nest commands as deep and as versatile as possible. Unfortunately, I believe this would be time consuming and would require some type checking, metadata system, or stdin and stdout to be implemented which essentially means I am creating an entire interpreter from the ground up. Not to mention this approach while being the most useful, would be hard to visualize as to which portion of the program the actual execution is dependant upon. 

The ideal system would theoretically look as such:
    
    parsePrompt(prompt, memo) {
        if (prompt.trim().split(' ').length() > 1)
            let separated = prompt.trim().split(INPUT_SEPARATOR)
                if (prompt.trim().split(INPUT_SEPARATOR).length()>1)
                    if(!(commands?.[separated[0].trim()]): 
                        memo.args.push[separated[1].trim()]
                        return parsePrompt(prompt, memo)
                if (the prompt has a command)
                    memo.command.push[separated[0].trim()]
                if (pipe)
                    do pipe code 
            //check for more nesting, or don't 
        return memo
    }

    parser -> execution loop -> display loop


But this system would be entirely more complicated without creating a system for piping. If we had unlimited nesting features, the decision tree would be quite large. For my simple purposes, I am going to introduce piping as a way to chain commands.

Want to leverage the ES6 `Promise()` api by creating a factory of type `<name> = () => Promise<type>()` which could just do standard in and out for me! 

> Idea: create a system which allows for saving of aliases, then can use the raw, outputted data for an alias

Alias system could be:

    alias(<var_name>) > command(input)

    alias = () => { aliasMap.push "<var_name>":<value> }


Either way, the current strategy is to create pseudo file Tree: