import "./PeopleCard.css";
import TagFlex from "../layout/flex/TagFlex";

interface PeopleCardProps {

image:string,
name:string,
about:{
    department: string,//
    name: string,//
    title: string
}

}



const PeopleCard = ({image,name,about}:PeopleCardProps)=> {
    return (
      <TagFlex className="peopleCard" as="div" direction="column" gap="15px" >
        <img src={image} alt="" />
        <h1>{name}</h1>
        <p>{about.title}</p>
        <p>{about.department}</p>
        
      </TagFlex>
    )
}

export default PeopleCard
