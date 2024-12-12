import "./Button.css";

interface ButtonProps {

    text?: string,
    style?: React.CSSProperties,
    children?: React.ReactElement,
    onMouseDown?: () => void
}


const Button = ({ children,text, style, onMouseDown }:ButtonProps) => {

    const defaultButtonStyle:React.CSSProperties = {
        backgroundColor:"white",
        border:"1px solid gray",
        padding:"2px",
        color:"gray",
        display: "flex",
        alignItems: "ceter",
        justifyContent: "center",
    }

    const buttonStyle = {...defaultButtonStyle,...style}

    return (

        <button style={buttonStyle} onMouseDown={onMouseDown}>

            {children}
            {text}
        </button>

    )

}
export default Button