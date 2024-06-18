import {
  getAllSongs,
  getSongByID,
  deleteSongByID,
  postSong,
  putSongByID,
  patchSongByID
} from "./API/requests/song_requets.js";
import API_URL from "./API/base_url.js";

getAllSongs(API_URL).then((res) => {
  console.log(res);
});

getSongByID(API_URL, 2).then((res) => {
  console.log(res);
});

deleteSongByID(API_URL, 1);

postSong(API_URL, {
  title: "Blinding Lights",
  genre: "Pop",
  cover:
    "https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png",
  releaseYear: 2020,
  ageRestriction: 16,
  trailerURL: "https://youtube.com",
});
