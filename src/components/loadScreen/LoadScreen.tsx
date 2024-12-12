import TagFlex from "../layout/flex/TagFlex";
import "./LoadScreen.css";

interface LoadScreenProps{

isLoading:boolean;

}

const LoadScreen = ({isLoading}:LoadScreenProps)=>{

return(
<>
{

isLoading && (
    <dialog className="loadScreenDialog"  >

<TagFlex as="div" className="loadScreen">

<div className="loadingSpinner"></div>

</TagFlex>

</dialog>
)
    


}
</>
)

}

export default LoadScreen;