import { useContext, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import FilterListIcon from "@mui/icons-material/FilterList";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { MovieContext } from "context/MovieContext";
import { SearchComponent } from "components/ٍٍSearch";
const filterObj = [
  { value: "", text: "all" },
  { value: "movie", text: "movie" },
  { value: "tv", text: "tv" },
  { value: "person", text: "person" },
];
// custom components
const IconWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
}));
const filterItems = filterObj.map((item, index) => (
  <MenuItem
    key={`${item.text}_${index}`}
    sx={{ textTransform: "capitalize" }}
    value={item.value}
  >
    {item.text}
  </MenuItem>
));
const filterForm = (mediaType, handleFilterChange) => (
  <FormControl fullWidth color="secondary">
    <IconWrapper sx={{ display: { xs: "none", sm: "flex" } }}>
      <FilterListIcon />
    </IconWrapper>
    <InputLabel id="mediaTypeLabelId" sx={{ paddingLeft: "10px" }}>
      Media Type
    </InputLabel>
    <Select
      labelId="mediaTypeLabelId"
      value={mediaType}
      label="Media Type"
      onChange={handleFilterChange}
      sx={{ textTransform: "capitalize", borderRadius: "0" }}
    >
      {filterItems}
    </Select>
  </FormControl>
);
// end of custom components

export const Movies = () => {
  const {
    getMovies,
    filterMovies,
    moviesFilteredData,
    mediaType,
    setMediaType,
  } = useContext(MovieContext);
  // const [mediaType, setMediaType] = useState("");

  const handleFilterChange = (event) => {
    setMediaType(event.target.value);
  };
  const moviesData =
    moviesFilteredData?.length > 0 ? (
      moviesFilteredData.map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))
    ) : (
      <Grid>
        <h2>No Data Found</h2>
      </Grid>
    );

  useEffect(() => {
    getMovies();
  }, []);
  useEffect(() => {
    filterMovies(mediaType);
  }, [mediaType]);

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#F7F7F7",
          py: 4,
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
          }}
        >
          <Box sx={{ flexGrow: "1", width: { xs: "100%", sm: "auto" } }}>
            <SearchComponent></SearchComponent>
          </Box>
          <Box
            sx={{
              flexGrow: { xs: "1", sm: "0.5", md: "0.3" },
              flexBasis: "min-content",
              width: "100%",
            }}
          >
            {filterForm(mediaType, handleFilterChange)}
          </Box>
        </Container>
      </Box>
      <Container>
        <Box
          sx={{
            py: 6,
          }}
        >
          <Typography
            component="h1"
            variant="h6"
            fontWeight={"bold"}
            align="left"
          >
            Latest Movies & TV Shows
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {moviesData}
        </Grid>
      </Container>
    </div>
  );
};
