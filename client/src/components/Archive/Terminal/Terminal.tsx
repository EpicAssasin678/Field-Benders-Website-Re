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
      memory = [],
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
    //TODO implement new argument system
    /**
     * input ::=> input | input + <command>
     * command : str | str + ( + <arg> + )
     * arg : str 
     * 
     * Parses commands in the form of [aA-zZ]*[(] into an array and creates
     * a tree of execution for the prompt runner.
     * 
     * @param input 
     * @param memo
     */
    const parseCommands = (input:string, memo = {
      commandStack: Array<any>(),
      commandTree: {
        command: Array<any>(),
        args: Array<any>()
      }
    }): any => {
      /**
       * if ( check for )
       *  else check for - or --
       *   then check or none or ""
       * 
       */
      let commandStack = memo.commandStack;
      let tokenizedInput = input.trim().split('(');
      let commandTree = memo.commandTree;
      console.log(`[PARSER] input tokenized: ${input} => ${tokenizedInput}`);
      if (commands?.[tokenizedInput[0]]) {
        console.log(`command found: ${tokenizedInput[0]}`);
        commandStack.push(tokenizedInput[0]);
        //['('].concat(tokenizedInput.slice(1)).join('')
        //we check if the statement is reduced or not to a simple prompt
        if (tokenizedInput.length > 2) {
          return parseCommands(tokenizedInput.slice(1).join('(').slice(0, -1), {commandStack, commandTree});
        }
        return parseCommands(tokenizedInput[1], {commandStack, commandTree});
      } 
      if (tokenizedInput[0].includes(')')) {
        //check for multiple item values
        if (tokenizedInput[0].match(new RegExp('\([ ]*(([aA-zZ]+)([ ]*, )*)+[ ]*\)'))) {
          console.log(`arg list found: `);
          let arglist = tokenizedInput[0].split(')')[0].split(',');
          commandTree.args = arglist;
        } else {
          console.log(`arg found: ${tokenizedInput[0].slice(0,-1)}`);
          commandTree.args.push(tokenizedInput[0].slice(0,-1));
        }

        //todo make possible (args => command, arg1, arg...)
        //check if their are multiple args within the statement
      }
      
      commandStack.forEach((command) => {
        console.log(`[PARSER]command popped: ${command}`);
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

    const executeCommands = (input:any, step:number) => {
      let executionStep = step;

      console.log(`[EXECUTION] ${input}`);
        var commandToExecute = commands?.[input.toLowerCase()];
        if (commandToExecute) {
          commandToExecute?.(null);
          setInputValue('');
        } else {
          if (step == 0) {
          
          let parsedInput = parseCommandsWrapper(input);
          commandToExecute = commands?.[parsedInput.command[0]];
            if (commandToExecute) {
              let commandOutput = commandToExecute?.(parsedInput.args[0]);
              console.log(commandOutput);
              //if there is still more left to execute
              if (parsedInput.command.length > 1) {
                //remove top, set arg to recent output
                parsedInput.command.pop();
                parsedInput.args[0] = commandOutput;
                console.log(parsedInput);
                executeCommands(parsedInput,step++);
              }
            }

          } else {

            commandToExecute = commands?.[input.command[0]];
            if (commandToExecute) {
              let commandOutput = commandToExecute?.(input.args[0]);
              console.log(commandOutput);
              //if there is still more left to execute
              if (input.command.length > 1) {
                //remove top, set arg to recent output
                input.command.pop();
                input.args[0] = commandOutput;
                console.log(input);
                step += 1;
                executeCommands(input,step);
              }
            }
          }
          
          setInputValue('');
        }
      
    }

    /**
     * When user presses enter, we execute the command
     */
    const handleInputKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
          executeCommands(input,0);
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

      /**
       * 
       * 
       * Parse commands
       *  separate command = [keyword](
       *  regex: [aA-zZ]*[(]
       * 
       * command args inclusive 
       * regex:\([ ]*(([aA-zZ]*)[, ]*)*[ ]*\)
       */