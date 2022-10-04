// style imports
import {Search, search, SearchIconWrapper, StyledInputBase, input} from "../../styles/header/SearchInput";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = (props) => {

    const {
        keyword,
        setKeyword
    } = props;

    return (
        <Search className="search" style={search}>
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            <StyledInputBase
                style={input}
                value={keyword}
                onChange={(e) => {setKeyword(e.currentTarget.value)}}
                placeholder="Search users"
            />
        </Search>
    );
}

export default SearchInput;
