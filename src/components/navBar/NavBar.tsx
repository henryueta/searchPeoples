import { useState } from "react";
import "./NavBar.css";
import SearchInput from "../search/searchInput/SearchInput";
import TagFlex from "../layout/flex/TagFlex";
import Button from "../button/Button";
import SearchSuggestion from "../search/searchSuggestion/SearchSuggestion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import searchIcon from "../../assets/imgs/icons/search.png";

interface NavBarProps {
    valueOfInput?: string
}


const NavBar = ({ valueOfInput = "" }: NavBarProps): React.ReactElement => {

    const [search, setSearch] = useState<string>(valueOfInput);
    console.log(valueOfInput)
    const [hasSuggestion,setHasSuggestion] = useState<boolean>(false);
    const navigate = useNavigate()
    const onNavigate = (valueOfRoute: string) => {

        return navigate(valueOfRoute);

    }

    return (
        <nav className="navBar">
            <TagFlex className="navBarElements" as="div" align="center" justifyContent="center">
                <Link to="/" className="webSiteLogo">Peop.com</Link>
                <SearchInput type="search" 
                onChange={(e) =>
                (()=>{
                    setHasSuggestion(true)
                    setSearch(e.target.value)
                })()
                }
                onBlur={()=>
                    (()=>{
                        setHasSuggestion(false)
                        setSearch("")
                    })()
                }
                    value={valueOfInput} />
                <Button style={
                    {
                        border: "none",
                        padding: "5px",
                        borderTopRightRadius: "10px",
                        borderBottomRightRadius: "10px",
                    }
                }
                onMouseDown={() =>
                        onNavigate(`/search?data=${search}`)
                    }
                >
                    <img src={searchIcon}/>
                </Button>
            </TagFlex>
            <SearchSuggestion hasEnabled={hasSuggestion}  onSearchSuggestion={onNavigate} valueOfSearch={search} />
        </nav>
    )

}

export default NavBar;