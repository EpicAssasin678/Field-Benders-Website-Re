import './terminal.css';
import {ForwardedRef, forwardRef, useCallback, useEffect, useRef, useState} from "react";
import {TerminalProps} from "./types";
import React from 'react';
import { InputContext } from './InputContext';


export const Terminal = forwardRef(
  (props: TerminalProps, ref: ForwardedRef<HTMLDivElement>) => {
    const {
      history = [],
      promptLabel = '>',
      args = [],
      
      commands = {},
    } = props;

    const inputRef = useRef<HTMLInputElement>();
    const [input, setInputValue] = useState<string>('');
    

    /**
     * Focus on the input whenever we render the terminal or click in the terminal
     */
    useEffect(() => {
      inputRef.current?.focus();
    });

    const focusInput = useCallback(() => {
      inputRef.current?.focus();
    }, []);


    /**
     * When user types something, we update the input value
     */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        
      },
      []
    );

    //TODO implement shotgun parsing
    //TODO implement piping
    //TODO implement flags
    /**
     * input ::=> input | input + <command>
     * command : str | str + ( + <arg> + )
     * arg : str 
     * 
     * @param input 
     */
    const parseCommands = (input:string, memo = {
      commandStack: [],
      commandTree: {
        command: [],
        args: []
      }
    }) => {
      /**
       * if ( check for )
       *  else check for - or --
       *   then check or none or ""
       * 
       */
      let commandStack = memo.commandStack;
      let tokenizedInput = input.split('(');
      console.log(tokenizedInput);
      let commandTree = memo.commandTree;
      if (commands?.[tokenizedInput[0]]) {
        console.log(`command found: ${tokenizedInput[0]}`);
        commandStack.push(tokenizedInput[0]);
        return parseCommands(tokenizedInput[1], {commandStack, commandTree});
      } 
      if (tokenizedInput[0].includes(')')) {
        console.log(`arg found: ${tokenizedInput[0].slice(0,-1)}`);
        commandTree.args.push(tokenizedInput[0].slice(0,-1));
      }
      
      commandStack.forEach((command) => {
        console.log(`command popped: ${command}`);
        commandTree.command = [...commandTree.command, command];
      });
      //commandTree.command = commandStack[0].toLowerCase();
      
      console.log(commandTree);
      console.log(commandStack);
      return commandTree;
    }

    const parseCommandsWrapper = (input:string) => {
      return parseCommands(input, {commandStack: [], commandTree: {command: [], args: []} });
    }

    /**
     * When user presses enter, we execute the command
     */
    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          var commandToExecute = commands?.[input.toLowerCase()];
          if (commandToExecute) {
            commandToExecute?.();
            setInputValue('');
          } else {
            let parsedInput = parseCommandsWrapper(input);
            commandToExecute = commands?.[parsedInput.command[0]];
            if (commandToExecute) {
              commandToExecute?.();
              setInputValue('');
            }
            setInputValue('');
          }
        }
      },
      [commands, input]
    );

    return (
    <div className="terminal" ref={ref} onClick={focusInput}>
      {history.map((line, index) => (
        <div className="terminal__line" key={`terminal-line-${index}-${line}`}>
          {line}
        </div>
      ))}
      <div className="terminal__prompt">
        <div className="terminal__prompt__label">{promptLabel}</div>
        <div className="terminal__prompt__input">
          <InputContext.Provider value={input} >
          <input
            id='input'
            type="text"
            value={input}
            onKeyDown={handleInputKeyDown}
            onChange={handleInputChange}
            // @ts-ignore
            ref={inputRef}
          />

          </InputContext.Provider>
        </div>
      </div>
    </div>
  );
});

/**
 * 
 *       tokenizedInput.forEach( (token:string) => {
        let argstr = '';
        if (commands?.[token]) {
          console.log(`command found: ${token}`);
          commandStack.push(token);

          if (token[-1] === ')' && argstr == '') {
            argstr = token.slice(0);
            commandTree.args.push(argstr);
            console.log(`arg found: ${argstr}`);
            argstr = '';
          } else {
            //if not (arg) then (command(arg))
            //console.log(commandStack);
          }
        }
      });
 */