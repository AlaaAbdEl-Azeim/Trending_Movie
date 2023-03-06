import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";

export const MovieCard = (props) => {
  const movie = props.movie;
  const poster_url = "https://image.tmdb.org/t/p/w500/";
  return (
    <Grid item key={movie.id} xs={12} sm={6} md={3}>
      <Link to={`/details/${movie.media_type}/${movie.id}`}>
        <Card
          sx={{
            height: "100%",
            display: "flex",
            borderRadius: 0,
            boxShadow: "none",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              backgroundColor: "#1591B3",
              right: "0",
              padding: 2,
            }}
          >
            <Typography color={"primary"} fontWeight="bold">
              {movie.vote_average?.toFixed(1)}
            </Typography>
          </Box>
          <CardMedia
            component="img"
            image={
              movie.poster_path
                ? `${poster_url + movie.poster_path}`
                : "https://placehold.co/500X750"
            }
            sx={{ flex: "0 0 87%" }}
            alt="poster"
          />
          <CardContent sx={{ flexGrow: 1 }}>
            <Typography variant="subtitle2" fontWeight={"bold"}>
              {movie.media_type == "movie" ? movie.title : movie.name}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};
