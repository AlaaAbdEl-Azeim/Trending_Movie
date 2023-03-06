import { MovieContext } from "context/MovieContext";
import { useContext, useState } from "react";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  display: "flex",
}));

const IconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  flexGrow: "1",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
  },
}));
export const SearchComponent = (props) => {
  const [searchTxt, setSearchTxt] = useState("");

  const { searchMovies } = useContext(MovieContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMovies(searchTxt);
  };
  const handleSearchChange = (e) => setSearchTxt(e.target.value);
  return (
    <form onSubmit={handleSubmit}>
      <Search>
        <IconWrapper>
          <SearchIcon />
        </IconWrapper>
        <StyledInputBase
          placeholder="Find movies tv shows documentary and more..."
          inputProps={{ "aria-label": "search" }}
          value={searchTxt}
          onChange={handleSearchChange}
        />
      </Search>
    </form>
  );
};
