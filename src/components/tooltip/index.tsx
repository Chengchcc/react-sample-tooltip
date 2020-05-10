import * as React from 'react';
import './common.less'

const parsePosition = (p:string) => ['left', 'right', 'top', 'bottom'].indexOf(p) > -1 ? p : 'bottom';


interface ToolTipProps {
    placement?: 'left'| 'bottom'|'top'|'right';
    className?: string;
    content: React.ReactNode;
    contentClassName?: string;
}

const ToolTip:React.FC<ToolTipProps> = props => {
    const [visiable, setVisiable] = React.useState(false);
    const divRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        divRef.current?.addEventListener('mouseover', () => setVisiable(true));
        divRef.current?.addEventListener('mouseout', () => setVisiable(false))
        const clientHeight1 = divRef.current?.clientHeight || 0;
        const clientWidth1 = divRef.current?.clientWidth || 0;
        const clientHeight = contentRef.current?.clientHeight || 0;
        const clientWidth = contentRef.current?.clientWidth || 0;
        const offset = placement.match(/^left$|^right$/) ? Math.abs(clientHeight1 - clientHeight): Math.abs(clientWidth1-clientWidth);
        if (placement.match(/^left$|^right$/)) contentRef.current!.style.top = -offset/2 + 'px';
        else contentRef.current!.style.left = -offset/2 + 'px';

    }, [])

    const { placement = 'bottom', className = "", content, contentClassName="", children } = props;

    return (
        <div ref={divRef} className={`tip-container ${className}`}>
            {children}
            <div ref={contentRef} className={`${parsePosition(placement)} ${contentClassName} ${visiable ? "show" : "close"}`}>{content}</div>
        </div>
    )

}

export { ToolTip }