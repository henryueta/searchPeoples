import { useEffect, useState } from "react";
import useSearchPeople from "../../../hooks/useSearchPeople";
import TagFlex from "../../layout/flex/TagFlex";
import "./SearchSuggestion.css";


interface SearchSuggestionProps {

    valueOfSearch: string
    onSearchSuggestion: (suggestionValue: string) => void
    hasEnabled:boolean
}


const SearchSuggestion = ({
    valueOfSearch,
    onSearchSuggestion,
    hasEnabled=true
}: SearchSuggestionProps): React.ReactElement => {
    const { searchAboutPeople } = useSearchPeople();
    const [searchResult, setSearchResult] = useState<string[]>([]);

    useEffect(() => {

        const controller = new AbortController();
                setSearchResult(searchAboutPeople(hasEnabled,valueOfSearch))
        return () => {
            controller.abort();
        };

    }, [valueOfSearch])

    return (

        
        <TagFlex as="div" className="suggestionList" direction="column" >
            
                <ul>
                {
                    searchResult.map((ind, num) =>
                        <li key={num}
                            onMouseDown={()=>onSearchSuggestion(`/search?data=${ind}`)}>
                            {ind}
                        </li>
                    )
                }
            </ul>
        </TagFlex>
    )

}

export default SearchSuggestion;