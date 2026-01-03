import { createContext,useState,useEffect } from 'react';

export const MovieContext = createContext()


function MovieContextProvider({children}) {


    const [favorites, setFavorite] = useState([])
    
    useEffect(()=>{
        const favItems = localStorage.getItem("favorites")
        if (favItems){
            setFavorite(JSON.parse(favItems))

        }
    },[])

     useEffect(()=>{
        if (favorites.length >= 0){
        localStorage.setItem("favorites",JSON.stringify(favorites))

        }
    },[favorites])

   let  value ={favorites,setFavorite}

    return (
        <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
    )
    
}

export default MovieContextProvider 
