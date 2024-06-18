import Container from "../../../components/Client/container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, useOutletContext } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

// import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useContext, useState } from "react";
import { FavoritesContext } from "../../../context/favoritesContext";

const ClientCountries = () => {
  const [countries, setCountries] = useOutletContext();
  const { favorites, setFavorites } = useContext(FavoritesContext);
  console.log("favs: ", [favorites]);
  const [query, setQuery] = useState("");
  const filteredCountries = countries.filter((x) => {
    return x.name.toLowerCase().trim().includes(query.trim().toLowerCase());
  });

  return (
    <Container>
      <div style={{ display: "flex", gap: "18px", marginBottom: "30px" }}>
        <TextField
          onChange={(e) => setQuery(e.target.value)}
          id="standard-basic"
          label="Search Country"
          variant="standard"
        />
        <FormControl sx={{ width: "200px" }}>
          <InputLabel id="demo-simple-select-label">Sort by Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={""}
            label="Age"
            onChange={() => {}}
          >
            <MenuItem disabled selected value={""}>
              Sort by Name
            </MenuItem>
            <MenuItem value={"a-z"}>A-Z</MenuItem>
            <MenuItem value={"z-a"}>Z-A</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2}>
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
        >
          {filteredCountries &&
            filteredCountries.map((country) => {
              return (
                <SwiperSlide key={country.id}>
                  <Card>
                    <CardMedia
                      sx={{ height: 160 }}
                      image={country.flagImg}
                      title={country.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {country.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>capital: </b> {country.capital}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        <b>population: </b> {country.population}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">
                        <Link to={`/countries/${country.id}`}>Learn More</Link>
                      </Button>
                      <Button onClick={()=>{
                        const found = favorites.find((x)=>x.id==country.id);
                        let updatedFavs;
                        if (found) {
                          updatedFavs = favorites.filter((x)=>x.id!=country.id);
                        }
                        else{
                          updatedFavs = [...favorites, {id: country.id}];
                        }
                        setFavorites(updatedFavs);
                        localStorage.setItem('favorites',JSON.stringify(updatedFavs));
                      }} size="small" color="error" variant="outlined">
                        {favorites.find((x) => x.id == country.id) ? (
                          <FavoriteIcon />
                        ) : (
                          <FavoriteBorderIcon />
                        )}
                      </Button>
                    </CardActions>
                  </Card>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </Grid>
    </Container>
  );
};

export default ClientCountries;
