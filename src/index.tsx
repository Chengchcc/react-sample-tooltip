import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ToolTip} from './components/tooltip';
import './index.less'

const App = ()=>{

    return(
        <div className="main">
            不重要
            <ToolTip placement={'left'} content={"我是tip"}>左边</ToolTip>
            不重要
            <ToolTip placement={'right'}  content={"我是tip"}>右边</ToolTip>
            不重要
            <ToolTip placement={'top'} content={"我是tip"}>上边</ToolTip>
            不重要
            <ToolTip placement={'bottom'} content={"我是tip"}>下边</ToolTip>
            不重要
        </div>
    )
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)