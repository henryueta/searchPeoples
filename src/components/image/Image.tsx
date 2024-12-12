
interface ImageProps{

imageSource?:string,
imageAlt?:string

}


const Image = ({imageSource,imageAlt}:ImageProps)=>{

return(
<img src={imageSource} alt={imageAlt}/>
)

}


export default Image