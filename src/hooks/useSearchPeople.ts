
import { useState } from "react";
import { UserApiTypes } from "../routes/app/App";

const useSearchPeople = () => {


  const [allPeople, setAllPeople] = useState<UserApiTypes[]>([]);

  const queryAllPeople = async () => {
    try {
      const result = await fetch("https://dummyjson.com/users", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      })
      const data = await result.json();
      setAllPeople(data.users);
    }
    catch (error) {
      console.log(error)
    }
  }


  const limitEqualityOfSearch = (value: string, limit: number): string => {

    return value.slice(0, limit);

  }

  const compareValuesToSuggestion = (searchValue: string, suggestionValue: string, suggestionList: string[]) => {

    searchValue.toLowerCase() == (limitEqualityOfSearch(suggestionValue.toLowerCase(), searchValue.length)) &&
      suggestionList.push(suggestionValue)

  }


  const searchAboutPeople = (hasEnabled: boolean, text: string) => {
    if (hasEnabled) {

      queryAllPeople()

      let searchAboutPeople = [... new Set(allPeople.reduce((acc: string[], ind) => {
        const title = ind.company.title;
        const department = ind.company.department;
        const name = `${ind.firstName.concat(' ', ind.lastName)}`

        text.length > 0 &&
          (() => {
            compareValuesToSuggestion(text, name, acc);
            compareValuesToSuggestion(text, title, acc);
            compareValuesToSuggestion(text, department, acc);
          })()




        return acc

      }, []))]

      return searchAboutPeople.splice(0, 8)
    }
    return []
  }



  return {
    searchAboutPeople,
  }



}



export default useSearchPeople