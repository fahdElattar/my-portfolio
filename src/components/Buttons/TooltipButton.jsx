import Button from "./Button"
import './Button.css';

export const TooltipButton = ({children, tooltip, direction = "", className = ""}) => {
    return (
        <Button className={`tooltip-btn ${className}`}>
            {children}
            <span className={`tooltip-title text-md ${direction}`}>{tooltip}</span>
        </Button>
    )
}