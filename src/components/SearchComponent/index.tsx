import { SearchContainer } from "./styledComponent"
import { ReactComponent as SearchIcon } from "../../images/search.svg"

const SearchComponent: React.FC = () => {

    return(
        <SearchContainer>
            <input type="text" />
            <div className="icons">
                <SearchIcon />
            </div>
        </SearchContainer>
    )
}

export default SearchComponent