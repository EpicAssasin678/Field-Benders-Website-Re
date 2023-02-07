import React, {useContext, useEffect, useMemo} from 'react';
import {Terminal} from './Terminal';
import {useTerminal} from './hooks';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Home from '../../Home/Home';

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
    const parsedFileTree = JSON.stringify(fileTree, null, 2);
    //create temp variables for simulated directory
    var user = ['admin'];
    var userLocation = {
      rel: '~',
      abs: `system/Home/Users/${user[0]}`
    }
    var userDetails = [user, '@', userLocation.rel,];

    const SessionMessage = () => {
      let date = new Date().toUTCString().split(' ');
      const session_stamp = date.slice(1,-1).map( (string) => {
        if (string != date[3]) {
          return string;
        } else {
          return '2044';
        }
      });
      return (<>
          <div><strong className='crt'>JFAC SECURTIY TERMINAL:</strong> session@{session_stamp.join('-')}</div>
          <div>Logged in as: usr_ADMIN</div>
      </>)
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
      'echo': async () => {
        await Promise.resolve(
          pushToHistory( <>
            {document.getElementById('input').value}
            {}
          </>
        ))
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

            {() => {
              let jsonstr = '';
              userLocation.abs.split('/').reverse().map((dir) => {
                let hit = false;
                while(!hit) {
                  if (parsedFileTree.indexOf(dir).
                }
                jsonstr += parsedFileTree.slice(parsedFileTree.indexOf(dir));
              });

            }
            }
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
          
          history={history}
          ref={setTerminalRef}
          promptLabel={<>{userDetails.join('')}</>}
          commands={commands}
        />
      </div>
    );
  }
  
  export default TerminalRunner;