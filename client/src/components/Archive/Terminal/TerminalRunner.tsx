import React, {useContext, useEffect, useMemo, useState} from 'react';
import {Terminal} from './Terminal';
import {useTerminal} from './hooks';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Home from '../../Home/Home';

import {terminalConfig} from './local/terminalConf';
import fileTree from './local/fileTree.json';
import { InputContext } from './InputContext';

export function TerminalRunner() {
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
    const parsedFileTree = JSON.stringify(fileTree, null, 2);
    var user = ['admin'];
    var userLocation = {
      rel: '~',
      abs: `system/Home/Users/${user[0]}`
    }
    
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
    
    
    useEffect(() => {
      resetTerminal();

      pushToHistory(<>
        <SessionMessage />
          <div style={{fontSize: 20}}>This terminal contains <span style={{color: 'yellow'}}><strong>HTML</strong></span>. Awesome, right?</div>
          <br/>
          <div>You can write: start or alert , to execute some commands.</div>
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
      'cd' : async () => {
        await pushToHistory( 
          <>
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
      'ls' : async () => {
        await pushToHistory(
          <>
            {parsedFileTree}
          </>
        )
        return
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
          <strong onClick={handleControlClick()}>Hide controls.</strong>
            
          </>
        )
      },
      default : async () => {
        await pushToHistoryWithDelay({
          delay: 100, 
          content: <>
            
          </> 
        })
      }
    }), [pushToHistory]);
  
    return (
      <div className="">
        <Terminal
          memory={outputMemory}
          history={history}
          ref={setTerminalRef}
          promptLabel={<>{`[ ${session_stamp[3].split(':').join('.')}@${userDetails[0]} ] ${userDetails[2]}$`}</>}
          commands={commands}
        />
      </div>
    );
  }
  
  export default TerminalRunner;