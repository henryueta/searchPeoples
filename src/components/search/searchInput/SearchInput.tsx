import { useEffect, useState ,useRef} from "react"


interface InputProps {

placeholder?:string,
type:string,
style?:React.CSSProperties
value?:string,
onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
onBlur?:()=>void
}

const SearchInput = ({placeholder,type,style,value="",onChange,onBlur}:InputProps)=>{

const [inputValue,setInputValue] = useState<string>(value);
const inputRef = useRef<HTMLInputElement>(null);

useEffect(()=>{
    setInputValue(value)
},[value])

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
        if(onChange){
            onChange(e)
        }
        setInputValue(e.target.value);
};

const defaultInputStyle:React.CSSProperties = {

    outline:"none",
    padding:"5px",
    fontSize:"14px",

}

const inputStyle = {...defaultInputStyle,...style};

return(

<input ref={inputRef} onBlur={onBlur} onChange={handleChange} value={inputValue} placeholder={placeholder} type={type} style={inputStyle}/>

)

}

export default SearchInput;