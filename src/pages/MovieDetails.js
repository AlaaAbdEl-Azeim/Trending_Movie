import { useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import { Box, Button, Container, Typography, Divider } from "@mui/material";

import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CircleIcon from "@mui/icons-material/Circle";
import { MovieContext } from "context/MovieContext";

export const MovieDetails = () => {
  const { movieObj, getMovieDetails } = useContext(MovieContext);
  const params = useParams();
  const { movie_id, media_type } = params;

  useEffect(() => {
    getMovieDetails(movie_id, media_type);
  }, [movie_id]);

  return (
    <div>
      <Box
        sx={{
          position: "absolute",
          display: { xs: "none", md: "block" },

          "& img": {
            maxHeight: "380px",
            width: "100vw",
            objectFit: "none",
            filter: "contrast(30%)",
          },
        }}
      >
        <img width="100%" src={movieObj.backdrop} alt="backdrop"></img>
      </Box>
      <Container
        sx={{
          pt: { xs: 0, md: 12 },
          display: "flex",
          color: "#fff",
          position: "relative",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Box sx={{ "& img": { width: { xs: "100%", md: "350px" } } }}>
          <img src={movieObj.poster} alt="poster"></img>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            paddingInlineStart: { xs: "0", md: 5 },
            color: { xs: "#000", md: "#fff" },
          }}
        >
          <Box
            sx={{
              textAlign: "left",
              paddingTop: 3,
              height: { xs: "auto", md: "290px" },
            }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={"bold"}
              marginBottom="10px"
            >
              {movieObj.releasedYear}
            </Typography>
            <Typography variant="h4" fontWeight={"bold"} marginBottom="10px">
              {movieObj.title}
            </Typography>
            <Typography
              component="p"
              sx={{
                lineHeight: "15px",
                fontSize: "10px",
                marginBottom: "10px",
              }}
            >
              {movieObj.overview}
            </Typography>

            <Box
              sx={{
                display: "flex",
                alignItems: { xs: "baseline", md: "center" },
                flexDirection: { xs: "column", md: "row" },
              }}
            >
              <Button
                variant="string"
                startIcon={<PlayCircleOutlineIcon />}
                size="large"
                sx={{
                  paddingInline: 0,
                  "& .MuiButton-startIcon .MuiSvgIcon-root": {
                    fontSize: "32px",
                  },
                }}
              >
                watch the trailer
              </Button>
              <Divider
                orientation="vertical"
                flexItem
                variant="middle"
                sx={{ borderColor: "#fff", marginInline: 2 }}
              />
              <Box
                sx={{
                  display: "flex",
                  fontSize: "12px",
                  alignItems: "center",
                  flexFlow: "wrap",
                }}
              >
                <Typography variant="subtitle2" fontSize="inherit">
                  movieObj.duration
                </Typography>
                <CircleIcon
                  sx={{ fontSize: "5px", marginInline: 2 }}
                ></CircleIcon>
                <Typography variant="subtitle2" fontSize="inherit">
                  {movieObj.genres}
                </Typography>
                <CircleIcon
                  sx={{ fontSize: "5px", marginInline: 2 }}
                ></CircleIcon>
                <Typography variant="subtitle2" fontSize="inherit">
                  {movieObj.releasedDate}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "baseline", md: "center" },
              mt: 4,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: { xs: "baseline", md: "center" },
              }}
            >
              <Typography color="secondary">
                <Typography
                  component="span"
                  sx={{ fontWeight: "bold" }}
                  variant="h4"
                >
                  {movieObj.vote}
                </Typography>

                <Typography
                  component="span"
                  sx={{ fontSize: "12px", fontWeight: "bold" }}
                >
                  IMDb
                </Typography>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                variant="fullWidth"
                sx={{ marginInline: 2 }}
              />
              <Typography
                color="secondary"
                textAlign="left"
                variant="body1"
                sx={{
                  my: { xs: 2, md: 2 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  variant="caption"
                  color={"#00000066"}
                  fontWeight="bold"
                >
                  status
                </Typography>
                <Typography variant="caption" fontWeight="bold" fontSize="14px">
                  {movieObj.status}
                </Typography>
              </Typography>
            </Box>
            <Box
              sx={{
                width: { xs: "100%", md: "auto" },
                display: { xs: "flex", md: "initial" },
                "& .MuiButton-startIcon": { margin: "0" },
                "& .MuiButtonBase-root": {
                  padding: "8px",
                  minWidth: "initial",
                  flexGrow: 1,
                },
              }}
            >
              <Button
                color="secondary"
                variant="contained"
                size="mdall"
                startIcon={<AddIcon />}
                sx={{ borderRadius: "0px", marginRight: 2 }}
              ></Button>
              <Button
                color="secondary"
                variant="outlined"
                size="mdall"
                startIcon={<FavoriteBorderIcon />}
                sx={{ borderRadius: "0px" }}
              ></Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
