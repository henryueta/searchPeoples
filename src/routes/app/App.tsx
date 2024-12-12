import {  useEffect, useState} from 'react';
import './App.css';
import NavBar from '../../components/navBar/NavBar';
import PeopleCard from '../../components/peopleCard/PeopleCard';
import LoadScreen from '../../components/loadScreen/LoadScreen';


export interface UserApiTypes {

  id: number,
    firstName: string,//
    lastName: string,//
    image:string,
    company: {
      department: string,//
      name: string,//
      title: string,//
    }
}

interface AppProps{

  queryValue?:string

}


const App = ({queryValue=""}:AppProps)=> {
  const [allPeopleList,setAllPeopleList] = useState<UserApiTypes[]>([]);
  const [isLoadingQuery,setIsLoadingQuery] = useState<boolean>(true);

    

  useEffect(() => {
    const controller = new AbortController();

    const queryPeople = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
          signal:controller.signal
        });
        const data = await response.json();
        setAllPeopleList(data.users);
      } catch (error) {
        console.error(error);
      }
      finally{
        setIsLoadingQuery(false);
      }
    }

    queryPeople()
    return ()=>{
      controller.abort();
    };
  }, [])

  return (
    <>
      <LoadScreen isLoading={isLoadingQuery}></LoadScreen>
      <NavBar valueOfInput={queryValue}/>
      <section className='peopleList'>
        {

          allPeopleList.filter((ind)=>
          ind.company.title.toLowerCase().slice(0,queryValue.length).includes(queryValue.toLowerCase())
          ||
          ind.company.department.toLowerCase().slice(0,queryValue.length).includes(queryValue.toLowerCase())
          || 
          `${ind.firstName.concat(' ',ind.lastName)}`.toLowerCase().slice(0,queryValue.length).includes(queryValue.toLowerCase())
          ).map((ind,num)=>
            <PeopleCard image={ind.image} name={`${ind.firstName} ${ind.lastName}`} about={ind.company} key={num}></PeopleCard>
          )
        }
      </section>
    </>
  )
}

export default App
