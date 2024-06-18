import API_URL from "../base_url.js";
const endpoint = "/movies";
//get All Songs - void
export async function getAllSongs(url) {
  let songs = null;
  let error = null;
  await axios
    .get(url + endpoint)
    .then((result) => {
      songs = result.data;
    })
    .catch((err) => {
      error = err;
    });
  //   try {
  //     const resp = await axios.get(url + endpoint);
  //   } catch (err) {
  //     error = err;
  //   }
  return {
    songs: songs,
    error: error,
  };
}

//get Song By ID
export async function getSongByID(url, id) {
  let song = null;
  let error = null;
  await axios
    .get(url + endpoint + `/${id}`)
    .then((result) => {
      song = result.data;
    })
    .catch((err) => {
      error = err;
    });
  return {
    song,
    error,
  };
}

//delete Song by ID
export async function deleteSongByID(url, id) {
  let response = null;
  await axios.delete(url + endpoint + `/${id}`).then((res) => {
    response = res;
  });

  return response;
}

//post Song
export async function postSong(url, newSong) {
  const response = null;
  await axios.post(url + endpoint, newSong).then((res) => {
    response = res;
  });
  return response;
}

//put Song by ID
export async function putSongByID(url, id, updatedSong) {
  const response = null;
  await axios
    .put(url + endpoint + `/${id}`, updatedSong)
    .then((res) => (response = res));
  return response;
}

//patch Song by ID
export async function patchSongByID(url, id, updatedSong) {
  const response = null;
  await axios
    .patch(url + endpoint + `/${id}`, updatedSong)
    .then((res) => (response = res));
  return response;
}
