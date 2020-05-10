# react-smaple-tooltip
> a sample react tool tip

## Props

|Name|PropType|Description|Default|
|-|-|-|-|
|placement|'left','right', 'bottom', 'top' |Tooltip placement| 'bottom'|
|content|ReactNote|Tooltip conntent| |
|classname|string|Tooltip class| |
|contentClassname|string|Tooltip content class| |


## Usage
```js
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

```

## Demo

```bash
$ yarn
$ yarn start
```

## Screenshot

### left
![avatar](/screenshot/ss_left.png)
### right
![avatar](/screenshot/ss_right.png)
### top
![avatar](/screenshot/ss_top.png)
### bottom
![avatar](/screenshot/ss_bottom.png)
