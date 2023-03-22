import ts from "typescript";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import ModelViewer from "../../apps/3DObjectViewer/ModelViewer";


const Viewer = (item:any) => {
    
    const itemType = item.item.type;
    console.log(`[VIEWER] Deciding viewing program for type ${itemType}`)
    switch (itemType) {
        case '3D':
            return(<>
                <ModelViewer modelPath={item.item["path"]}/>
            </>)
            break;
        case 'text':
            return(<>
                
            </>)
            break;
        case 'image':
            return(<>
            
            </>)
            break;
        default:
            console.log(`[VIEWER] No program decided.`)
            return (<>
            </>)
            break;
    }
}

export default Viewer;