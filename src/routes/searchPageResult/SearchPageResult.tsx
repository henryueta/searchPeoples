import { useSearchParams, } from "react-router-dom"
import App from "../app/App";

interface SearchPage{

}

const SearchPage = ():React.ReactElement=>{

const [searchParams] = useSearchParams();
const data = searchParams.get("data") ?? "";

return(
    <App queryValue={data}/>
)

}

export default SearchPage