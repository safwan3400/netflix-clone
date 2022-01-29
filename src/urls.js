const { API_KEY } = require("./constants/constants")

module.exports = {

    originals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    action :`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    comedy :`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    horror :`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    romance :`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    documentaries :`/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
