import React, {useEffect, useMemo} from 'react';
import {Terminal} from './Terminal';
import {useTerminal} from './hooks';

export function TerminalRunner() {
    const {
      history,
      pushToHistory,
      setTerminalRef,
      resetTerminal,
    } = useTerminal();
  
  
    useEffect(() => {
      resetTerminal();
      let date = new Date().toUTCString().split(' ');
      const session_stamp = date.slice(1,-1).map( (string) => {
        if (string != date[3]) {
          return string;
        } else {
          return '2044';
        }
      });

      pushToHistory(<>
          <div><strong>JFAC SECURTIY TERMINAL:</strong> session@{session_stamp.join('-')}</div>
          <div>Logged in as: usr_ADMIN</div>
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
        await resetTerminal();
      }
    }), [pushToHistory]);
  
    return (
      <div className="">
        <Terminal
          history={history}
          ref={setTerminalRef}
          promptLabel={<>user@~</>}
          commands={commands}
        />
      </div>
    );
  }
  
  export default TerminalRunner;