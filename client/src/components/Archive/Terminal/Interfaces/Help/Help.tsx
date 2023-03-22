import React from "react";
import { TerminalHistoryItem } from "../../types";



export const help = (input:string) => {
    switch (input) {
        case 'ls': 
            return(
                <>
                    <div><span className="command-highlight">ls</span>(args:<em className="type-highlight">directory to view</em>)</div>
                    <div><span>Some notes:</span></div>
                    <span>Traversal is relative, but overall, good practice is to traverse into a recently declared directory. If the 
                        prompt entered returns with an error, sometimes check secondary console for errors. If you are on admin privilages,
                        restriction, shouldn't be a problem.
                    </span>
                </>
            )
        case 'echo':
          return (
            <>
              <div><span className="command-highlight">echo</span>(args:<em className='type-highlight'>string</em>)</div>
            </>
          )
          break;
        case 'view':
          return (
            <>
              <div><span className="command-highlight">view</span>(args:<em className="type-highlight">string</em>)item_path</div>
            </>
          )
        default: 
          return (
            <>
            <div className='help'>
                <div className='heading'><strong>Terminal Help</strong></div>
                <div>
                  <span>Using the JFAC syslinOS shell v6.0.14 isn't especially difficult.<br/></span>
                  <span>Call terminal commands and include parameters with "()" for example: <span className="standard codereference">echo(whatever)</span>.
                        For more complex notation and parameter options, please refer to the prompt's section within the 
                        <span className="standard emphasized"> below</span> scroll or use help flags. 
                  </span>
                </div>
                <div>
                  <span className='subheading'>Command list: </span>
                  <span>echo, ls, save, help, displaymem, 
                          alias, cd, pwd, clear, alert</span>

                </div>
            </div>
            </>
        )
        }
}
