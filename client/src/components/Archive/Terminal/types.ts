import {ReactNode} from "react";

export type TerminalHistoryItem = ReactNode | string;
export type TerminalHistory = TerminalHistoryItem[];
export type TerminalPushToHistoryWithDelayProps = {
  content: TerminalHistoryItem;
  delay?: number;
};

export type ViewableItem = {
  type: '3D' | 'text' | 'text/encrypted';
  path: string;
}


export type TerminalCommands = {
  [command: string ]: () => void ;
} | {
  [command: string ]: (input:any) => any;
};


export type TerminalProps = {
  args?: string[];
  history: TerminalHistory;
  promptLabel?: TerminalHistoryItem;
  commands: TerminalCommands;
  memory: Array<any>;
};
