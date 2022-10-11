// style imports
import {Search, search, SearchIconWrapper, StyledInputBase, input, searchIcon} from "../../styles/header/SearchInputStyles";
import SearchIcon from "@mui/icons-material/Search";

const SearchInput = (props) => {

    const {
        keyword,
        setKeyword
    } = props;

    return (
        <Search className="search" style={search}>
            <SearchIconWrapper>
                <SearchIcon sx={searchIcon}/>
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
