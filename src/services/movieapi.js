const apiKey = import.meta.env.VITE_FILMAPIKEY;
const url = "https://api.themoviedb.org"


export async function searchMovies(query) {
    let response = await fetch(`${url}/3/search/movie?query=${query}&api_key=${apiKey}`)
    let data = await response.json()
    return data.results
    
}

export async function popularMovies() {
    let response = await fetch(`${url}/3/movie/popular?api_key=${apiKey}`)
    let data = await response.json()
    return data.results
    
}