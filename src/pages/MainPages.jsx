import React from 'react'
import { useEffect } from 'react'
import { getMovies } from '../redux/reducers.jsx/actions/movieAction'
import { useDispatch, useSelector } from 'react-redux'
import Hero from '../components/Hero'
import { getGenres } from '../redux/reducers.jsx/actions/movieAction'

import MovieList from '../components/MovieList'

const MainPages = () => {
    const dispatch = useDispatch();
    const state = useSelector((store)=>store.movieReducer)
    useEffect(() => {
        // Popüler filmleri alma
        dispatch(getMovies())

        //  kategorüleri alma
        dispatch(getGenres())
    },[])
  return (
    <div>
        <Hero/>
        {/* herbir kategoriye ait filmleri önce api den alıp
        > sonra ekrana basma */}
      {state.genres.map((genre) =>(
        <MovieList key={genre.id} genre={genre}/>
      ))}
    </div>
  )
}

export default MainPages