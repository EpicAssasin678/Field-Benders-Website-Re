import react from 'react';

/**
 * Creates terminal configurations, flags are defined as follows:
 *  @param memorySize Logical size of memory output array
 *  @param pushNullData (Unsafe) Enables the pushing of null data to the output array
 *  @param holdBackRef (Experimental) Holds back references for retrieval stack
 */
export var terminalConfig = {
    memory : {
        memSize : 12,
        pushNullData : false
    }
}