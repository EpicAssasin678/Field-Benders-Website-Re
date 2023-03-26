import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Terminal} from './Terminal';
import {useTerminal} from './hooks';
import { Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import Home from '../../Home/Home';

import {terminalConfig} from './local/terminalConf';
import fileTree from './local/fileTree.json';
import { InputContext } from './InputContext';
import { parseJsonText } from 'typescript';
import { help } from './Interfaces/Help/Help';
import Viewer from './Interfaces/Viewer/Viewer';

//TODO change all initialized values for term to be handled by a ref, only loaded if changed 
export function TerminalRunner() {
  console.log('Rendering terminal')
    const {
      history,
      terminalRef,
      pushToHistory,
      pushToHistoryWithDelay,
      setTerminalRef,
      resetTerminal,
    } = useTerminal();
    
    //const input = useContext(InputContext);
    //create temp variables for simulated directory and user system
    //var workingDirectory:any;
    const fileTreeStr = JSON.stringify(fileTree);
    //var parsedFileTree:Map<string, any> = new Map(Object.entries(JSON.parse(fileTreeStr)));
    const parsedFileTree = JSON.parse(fileTreeStr);

    //console.log(parsedFileTree);
    //console.log(JSON.parse(fileTreeStr));
    //console.log(new Map(Object.entries(JSON.parse(fileTreeStr))));



    var user = ['admin'];
    var userLocation = {
      rel: '~',
      abs: `system/Home/Users/${user[0]}`
    }
    
    const changeDirectory = (absArr: string[]) => {
      let dir:any;
      absArr.forEach((folder:string) => {
        //foreach folder, split 
        if (folder === absArr[0]) {
          dir = parsedFileTree[folder][0]; 
        } else {
          dir = dir[folder][0];
        }
        
        console.log(dir);
      });
      return dir;
    }
    //workingDirectory = changeDirectory(userLocation.abs.split('/'));
    
    const [workingDirectory, changeWorkingDirectory] = useState(changeDirectory(userLocation.abs.split('/')));
    console.log(workingDirectory)

    var userDetails = [user, '@', userLocation.rel,];
    let date = new Date().toUTCString().split(' ');
    const session_stamp = date.slice(1,-1).map( (string) => {
      if (string != date[3]) {
        return string;
      } else {
        return '2044';
      }
    });
    
    const SessionMessage = () => {
      return (<>
          <div><strong className='crt'>JFAC SECURTIY TERMINAL:</strong> session@{session_stamp.join('-')}</div>
          <div>Logged in as: usr_ADMIN</div>
      </>)
    };
    /**
     * creating simulated system variables
     *  standardOutput = holding outs of prompts
     */
    
    var memorySize = 10;
    var outputMemory = Array<any>();

    const pushToMemory = (item:any) => {
      if (!(item === null)) {
        let itemType = typeof(item);
        switch(itemType) {
          case 'string': 
            console.log(`Pushed item to memory: \nType:${itemType}\nItem:${item}`);
            if (outputMemory.length > terminalConfig.memory.memSize) {
              console.log(`Output memory size is exceeded, truncating.`)
              outputMemory = outputMemory.slice(1);
            }
            outputMemory.push(item);
            break;
          case 'undefined': 
            console.log(`Undefined item being pushed to memory, item removed.`)
            break;
        }
      } if (terminalConfig.memory.pushNullData) {
        console.log('Null item being pushed to memory: TO TURN OFF NULL PUSHING USE CONF')
      }
    };

    function displayError (message:string) {
      pushToHistory(<><div><p className="terminal-text"><span className="error-header">ERROR</span>{message} </p></div></>)
    }

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
                //lastFolder = currentPath.at(-1);
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
          dirToDisplay = dirToDisplay[folder][0];
        }
        //if (!(depth < 0)) lastFolder = folder;
        console.log(dirToDisplay);
      });
      count = 0;
      designatedPath.forEach( (folder) => {
        count++;
        dirToDisplay = dirToDisplay[folder][0];
        lastFolder = folder;
      });
      //console.log(dirToDisplay)
      const fullPath = currentPath.concat(designatedPath).join('/');
      console.log('Inspecting dir: ' + fullPath);
      
      //get keys for string 
      let contents:string[] = [];
      
      if (lastFolder.length === 0) lastFolder = currentPath.at(-1);
      let maparr = (dirToDisplay[lastFolder] === undefined) ? Object.keys(dirToDisplay) : Object.keys(dirToDisplay[lastFolder][0]); 
      maparr.forEach((key) => { contents.push(key); });
      console.log(contents);

      return [dirToDisplay, fullPath, contents];
    }
    
    const [promptLabel, changePromptLabel] = useState(`[ ${session_stamp[3].split(':').join('.')}@${userDetails[0]} ] ${userDetails[2]}$`);
    
    useEffect(() => {
      resetTerminal();
      pushToHistory(<>
        <SessionMessage />
          <br/>
          <div>Enter help for prompt help. To turn statistics on, use stats().</div>
        </>
      );
    }, []);
    
    const commands = useMemo(() => ({
      'start': async () => {
        await pushToHistory(<>
            <div>
              <strong>Starting</strong> the server... <span style={{color: 'green'}}>Done</span>
            </div>
          </>);
      },
      'alert': async () => {
        alert('Hello!');
        await pushToHistory(<>
            <div>
              <strong>Alert</strong>
              <span style={{color: 'orange', marginLeft: 10}}>
                <strong>Shown in the browser</strong>
              </span>
            </div>
          </>);
      },
      'clear': async () => {
        await Promise.resolve(
          resetTerminal()
        ).then( () => {
          pushToHistory( <>
            <SessionMessage />
            <strong> Terminal cleared.</strong>
          </>)
        })
      },
      'echo': async (input: any) => {
        await Promise.resolve(
          //check to see input
          pushToHistory( <>
            {input}
          </>
        )).then(()=>{
          pushToMemory(input);
          return input;
        }) 
      },
      'cd' : async (input:string) => {
        const [newdir, userloc, out] = getDirectoryContents(input);
        userLocation.abs = userloc;
        if(userLocation.abs.indexOf(user[0])/userLocation.abs.length < 0.40 ) {
          userLocation.rel = userLocation.abs.split(user[0])[0] + "/~";
        } else {
          userLocation.rel = "~" + userLocation.abs.split(user[0])[1];
        }
        changePromptLabel(`[ ${session_stamp[3].split(':').join('.')}@${userDetails[0]} ] ${userLocation.rel}$`);
        changeWorkingDirectory(newdir);
      },
      'prd' : async () => {
        pushToHistory (
          <>
            <div className="terminal__line">{userLocation.rel}</div>
          </>
        )
      },
      'pwd' : async () => {
        await pushToHistory (
          <>
            <div className='terminal__line'>{userLocation.abs}</div>
          </>
        )
      },
      'exit': async () => {
        await pushToHistory( 
          <>

            <Link href='/'><strong className={'terminal__link'}> {`> Leave this place`}</strong></Link>
          </>
        )
      },
      //head of dir will always be the last folder
      'ls' :  (input:string) => {

        try {
          const [output, fullPath, contents] = getDirectoryContents(input);

          pushToHistory(
            <>
              <div>
                <div>
                  <p className='terminal-text'>Displaying contents of: {fullPath}</p>
                  {contents.map((value:any) => {
                    const disp = (typeof value === 'undefined') ? '' : value;
                    return (<div>{disp}</div>)
                  })}
                </div>
              </div>
            </>
          )
        } catch (error) {
          console.log(error);
          pushToHistory( 
            <>
              <div><p className='terminal-text'>'{input}' isn't a directory.</p></div>
            </>
          )
        }
        
      },
      'displaymem' : async () => {
        function handleControlClick() {
          document.getElementById('memory-controls')?.remove();
        }
        //<div id='memory-controls' style={{alignContent:'center', display:'flex', flexDirection:'column', columnWidth:'60%',  flexGrow:'unset'}}><button style={{maxWidth:'5%'}}>&#708;</button><button style={{maxWidth:'5%'}}>&#709;</button></div>
        pushToHistory(
          <>
          <div style={{textAlign:'center'}}>Memory Buffer</div>
          {outputMemory.map((value:any, index)=> {
            return (<div className='memory-buffer-line'><span><span style={{color:'blue', backgroundColor:'white', border:'1px solid black'}}> {index} </span>: <span>{value}</span></span></div>)
          })}
          <strong onClick={handleControlClick}>Hide controls.</strong>
            
          </>
        )
      },
      'save' : async () => {
        
      },
      'stats' : async () => {
        pushToHistory(<>
          <p className="terminal-text">Sorry, stats are unsupported for this system, please contact your JFAC network or base admin to request research support.</p>
        </>)
      },
      'sudo' : async () => {
        displayError(' Sudo is not allowed on this system, attempted elevation of privileges will be logged and reported to your JFAC network or base admin.');
      },
      'view' : async (path: string) => {
        //test if the item was a directory or not
        console.log(`Testing for validity.`);
        try {
          const pathArr = path.split('/');
          //let's assume our input is correct
          console.log(pathArr.length);
          const item = (pathArr.length > 1) ? getDirectoryContents(userLocation.abs)[pathArr[-1]] : getDirectoryContents('./')[0][path];
          //console.log(workingDirectory);
          //console.log(item);

          console.log(`[VIEW] details: name: ${item['name']} path: ${item["path"]} type: ${item["type"]}`)
            pushToHistory(
              <Viewer item={item} />
            )
          } catch  {
            displayError(' Invalid input, either the given input is a directory or an unsupported file.');
        }
      },
      'help' : async (input:string) => {
        pushToHistory(help(input))
      },
      '': async () => {
        pushToHistory(<><br /></>)
      },
      default : async () => {
        await pushToHistory (
          <>
            <br></br>
          </>
        )
      }
    }), [pushToHistory]);
  
    return (
      <div className="">
        <Terminal
          memory={outputMemory}
          history={history}
          ref={setTerminalRef}
          promptLabel={<>{promptLabel}</>}
          commands={commands}
        />
      </div>
    );
  }
  
  export default TerminalRunner;





  /**
   * 
   * 
   * {
    "system" : {
        "syslin256" : {
            "users" : {
                "admin" : {
                    "admin.prf": {
                        "name" : "admin.prf",
                        "type" : "text/encrypted"
                    },
                    "admin.ppk": {
                        "name" : "admin.ppk",
                        "type" : null
                    },
                    "admin.h": {
                        "name" : "admin.h",
                        "type" : "text/encrypted"
                    }
                },
                "surikaga_raiku@JFAC-S89" : {
                    "surikaga_raiku@JFAC-S89.prf" : {
                        "name" : "surikaga_raiku@JFAC-S89.prf",
                        "type" : "text/encrypted"
                    },
                    "surikaga_raiku@JFAC-S89.h" : {
                        "name" : "surikaga_raiku@JFAC-S89.h",
                        "type" : "text/encrypted"
                    }
                }
            }
        },
        "Home" : {
            "Users" : {
                "admin" : {
                    "Documents" : [{
                        "operations_list.txt" : {
                            "name" : "operations_list.txt",
                            "type" : "text",
                            "path" : "./"
                        }
                    }]
                }
            }
        }

    }
    
}
   */

/**
 * 
 *           let count = 0;
          currentPath.forEach( (folder)=> {
            count++;
            if (count == 1) {
              dirToDisplay = parsedFileTree[folder][0];
            } else {
              dirToDisplay = dirToDisplay[folder][0];
            }
            if (depth < 0) lastFolder = folder;
            console.log(dirToDisplay);
          });
          count = 0;

          designatedPath.forEach( (folder) => {
            count++;
            if (count == 1) {
              
            } else {
              dirToDisplay = dirToDisplay[folder][0];
            }
            if (depth < 0) lastFolder = folder;
            
          });
          console.log(dirToDisplay)
          console.log('Inspecting dir: ' + currentPath.concat(designatedPath).join('/'));
 */