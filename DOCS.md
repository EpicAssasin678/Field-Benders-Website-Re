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



## 2/10/23 
### Terminal part 3, future plans
Today I am working on the terminal for the third straight day in a row, yesterday I suffered from burnout and didn't really accomplish much, just unit tested. Everything else wasn't creating a new idea, just creating new commands and trying to get the ls command to work. 

Allow me to recant my anguish and discuss the problem I've had for about 6 hours and the fustration I have at implementing such a bloated system. The actual return value of a JSON map is an Object[], to get the object as an iterable, we must sift through JSON, get the entries, and display then the Object again within the array. Then JS makes prototypes which you must traverse, and without that, you'll have to find some other fancy option.

I hate the time complexity of this function, it should be T(n) but instead it's like T(8n) which is terribly slow for a browser and larger file systems that I want to support. Not to mention every other implementation to this terminal thus far is computationally bloated and the fact it refreshes twice ever push to history. Hopefully it's not as bad as I remember. 

New bug: Terminal rerenders upon initialization or when any of the actual memeory vals do. For example, echo() stores output and modifies memory, therefore re-rendering therefore I need to make the memory independant of the prop.

          let contents:string[] = [];
          let map:Map<string, Object> = new Map(Object.entries(dirToDisplay));
          let maparr:Object[] = new Array<Object>(Array.from(map)[0][1][0]);

          for(var key in maparr[0]) {
            contents.push(key);
          }

I was looking into the future of this project and the eventual deployment I'd like to have for the site, here are some features I'd like to use, don't @ me. 

Also this function seems better for tunneling to the desired directory:

          currentPath.forEach( (folder)=> {
            dirToDisplay = (isInitialized) ? dirToDisplay[folder][0] : parsedFileTree[folder][0];
            isInitialized != isInitialized;
            if (depth != -1) lastFolder = folder;
            console.log(dirToDisplay);
          });
          count = 0;

          designatedPath.forEach( (folder) => {
            count++;
            if (count == 1) dirToDisplay = dirToDisplay[folder][0];
            if (depth > 0) lastFolder = folder;
            
          });

(['"]).*?\1
So for some education on TS and TSX:

> https://regex101.com/

> https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/forward_and_create_ref/


For production, considering making the switch to a Vite dev env with a more modern, updated stack than even this. Using degit, I could pick from lots of these 
templates on this repo:

> https://github.com/wtchnm/Vitamin

Or 

> https://github.com/emre-cil/viterjs-template

We shall see in the future hehe. 

## 2/11/23
### The terminal, part IV (it's broken even worse this time)

While trying to implement a depth-based traversal through the file system, I noticed that I created a staggered affect through which I find indices. This leads for example, the output of ls(../) == ls(./) which is terrible. Additionally, to only specify other folders within the folder behind, we would have to additionally use a folder to specify where we are, which doesn't make much sense. For example, take the locations ../ and ../admin which should have the absolute path /system/Home/users and /system/Home/users/admin/ consistently. Problem is, they don't, where they traverse to is the /system/users/ but that isn't cool. 

The traversal algorithm needs to be simplified, that's the real problem, and as of right now there isn't a way to actually do that. Travelling backwards and travelling forwards shouldn't be different since we create a path to traverse to, then traverse starting at root.

The ls() command became horribly bloated and outdated. Problem is that I created an algorithm that isn't really addressing the correct problem. Here is the current state and the look into what the ls command looks like:

        const getDirectoryContents:any = (dir:string) => {
          
          let loc = dir.trim().split('/');

          let depth = 0;

          let currentPath: string[] = userLocation.abs.split('/');
          let designatedPath: string[] = [];
          let dirToDisplay:any;

          let lastFolder:any = '';
          //create location
          loc.map((folder) => {
            //! regex doesn't work rn
            if (folder.match(new RegExp(/([aA-zZ]+)/) )) {
              console.log('normal folder');
              designatedPath.push(folder);
              depth++;
            } else {
              switch(folder) {
                case '~':
                  break;
                case '.':
                  break;
                case '..':
                  //check relation of back folder
                  if (loc.indexOf(folder) == 0 || depth == 0) {
                    //save head for backwards traversal
                    lastFolder != currentPath.at(-1);
                    currentPath.pop();
                    depth--;
                  } else {
                    designatedPath.pop();
                    depth--;
                  }
                  break;
                case '':
                  break;
                case ' ':
                  break;
                default:
                  //designatedPath.push(folder);
                  break;
              }

            }
          });
          console.log(designatedPath);
          //terrible way of doing this, but it works
          let count = 0;
          currentPath.forEach( (folder)=> {
            count++;
            if (count == 1) {
              dirToDisplay = parsedFileTree[folder][0];
            } else {
              if (currentPath.length - 1 === currentPath.indexOf(folder)) dirToDisplay = dirToDisplay[folder][0];
            }
            if (depth > -1) lastFolder = folder;
            console.log(dirToDisplay);
          });
          count = 0;

          designatedPath.map( (str) => {
            if (str.match(/[.]+|[ ]/gm) || str === '') return str;
          }).forEach( (folder) => {
            count++;
            dirToDisplay = (folder.match(/[.]+|[ ]/gm) || folder === '') ? dirToDisplay : dirToDisplay[folder][0];
            if (depth > -1) lastFolder = folder;
            
          });
          console.log(dirToDisplay)
          console.log('Inspecting dir: ' + currentPath.concat(designatedPath).join('/'));
          //get keys for string 

          let contents:string[] = [];
          /**
           * 
          let map:Map<string, Object> = new Map(Object.entries(dirToDisplay));
          let maparr:Object[] = new Array<Object>(Array.from(map)[0][1][0]);
           */
          if (lastFolder.length === 0) {
            lastFolder = currentPath.at(-1);
            
          } 
          let maparr = Object.keys(dirToDisplay[lastFolder][0]); 
            
          

          maparr.forEach((key) => {
            contents.push(key);
          })
          console.log(contents);

          return [dirToDisplay, lastFolder, contents];
          
        }
        //way of finding directory is inneficient as hell
        //find alternative


### Some regex stuff:
This match pattern is the betta for what I want for the prompt parser.

    [aA-zZ]+[[ -]|[(]]["']



## 3/22/23 Creating the new dev environment and gearing up for a proper netlify deployment
There are now a couple of large improvements I need to make and these require me changing this repo in a large way. One issue is with 3DObjects, which as of right now aren't usable 
due to the heavily inflated dependancy tree. Additionally, because of the outdated and 
legacy peer dependancies, this application has become far too heavy for what it should be. As 
it stands my node_modules are past 1.16GB. To make this production ready as I always intended,
I need to migrate to a better set of libraries. This means also migrating to a Vite based system. 

In order, here's what needs to change:
> Change dev environment to Vite+ts
> Change dev dependencies and change Google Auth system
> Update npm modules 
> Configure ESLint

``
mern-stack-client@0.1.0 E:\Documents\Field-Benders-Website-Re\client
├── @material-ui/core@4.12.4

├── @material-ui/icons@4.11.3

├── @material-ui/lab@4.0.0-alpha.61

├── @react-three/drei@9.58.1

├── @react-three/fiber@8.12.0

├── @redux-devtools/core@3.13.1

├── @redux-devtools/dock-monitor@1.4.2

├── @redux-devtools/log-monitor@2.3.2

├── @testing-library/jest-dom@4.2.4

├── @testing-library/react@9.5.0

├── @testing-library/user-event@7.2.1

├── axios@0.19.2

├── bindings@1.5.0 extraneous

├── eslint-config-airbnb@18.2.1

├── eslint-plugin-import@2.27.5

├── eslint-plugin-jsx-a11y@6.7.1

├── eslint-plugin-react-hooks@4.6.0

├── eslint-plugin-react@7.32.2

├── file-uri-to-path@1.0.0 extraneous

├── jwt-decode@3.1.2

├── material-ui-chip-input@1.1.0

├── moment@2.29.4

├── nan@2.17.0 extraneous

├── react-dom@16.14.0

├── react-file-base64@1.0.3

├── react-google-login@5.2.2

├── react-redux@7.2.9

├── react-router-dom@5.3.4

├── react-scripts@3.4.1

├── react@16.14.0

├── redux-thunk@2.4.2

├── redux@4.2.1

├── three-stdlib@2.21.8

├── three@0.150.1

└── typescript@4.9.5
``


    "@redux-devtools/core": "^3.9.0",
    "@redux-devtools/dock-monitor": "^1.4.0",
    "@redux-devtools/log-monitor": "^2.3.0",
    "eslint-config-airbnb": "^18.2.1",
    "eslint-plugin-import": "^2.22.1",
    "eslint-plugin-jsx-a11y": "^6.4.1",
    "eslint-plugin-react": "^7.21.5",
    "eslint-plugin-react-hooks": "^4.2.0"


``


## 3/23/23 Big Things Ahead
One of the greatest reasons I'm happy about this project this far is that I am able to make this site finally public. I can't express how happy I am at the prospect of this! Here are some features that I still want to implement in the future and need to be for the best release:

1. Adding pagination to the home screen news bar component 
2. Adding pagination between chapters
3. Adding actual reading capabilities to the chapter reader 
4. Creating the archive dashboard and adding some kind of help to the chapter reader, the terminal, and the article 3D viewer
5. 3D viewer for the actual models I import 
6. A live background, rendered conditionally upon the home page
7. 3D backgorunds 
8. Proper animations within the text screen 

Of course this list is quite exhaustive and 5 and 7 aren't all that important to me, but the reader is definitely. Especially considering I am using an admin panel in the future, that needs to be complete. 


Todays round of work will be the following: 
1. Creating admin panels 
2. Finishing about section