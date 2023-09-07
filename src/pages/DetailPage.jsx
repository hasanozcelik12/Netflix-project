import React from 'react'
import { useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { baseImgUrl, options } from '../utils/constant'
import Loading from '../components/Loading'
import Badges from '../components/badget'


const DetailPage = () => {
  const [movie,setMovie] = useState(null)
  // url den id ye erişme
  const {movieId} = useParams()
  console.log(movieId)

  useEffect(() => {
    axios.get(`movie/${movieId}`,options)
    .then((res) => setMovie(res.data));
  },[])
  console.log(movie)
  return (
    <div className='movie-detail row p-4'>
      {!movie ? (
        <Loading /> 
      ) : (
      <>
       <div className='col-md-4 d-flex justify-content-center '>
       <div className =' position-relative'
       style = {{maxWidth : '400px'}}>
          <img 
         
          className='rounded shadow w-100'
          src= {baseImgUrl.concat(movie.poster_path)} alt="" />
          <p 
          style = {{right:'30px'}}
           className = 'position-absolute bg-warning fs-5 rounded p-1 shadow bottom-0 end-25'>
            {movie.vote_average}</p>
          
        </div>
       </div>
       <div className = 'col-md-8'>
       <h1>{movie.title}</h1>
            <p>{movie.overview}</p>

           
              <div>
                <Badges
                  title="Kategoriler"
                  list={movie.genres}
                  color="bg-primary"
                />
                <Badges
                  title="Diller"
                  list={movie.spoken_languages}
                  color="bg-danger"
                />
                <Badges
                  title="Yapımcı Şirketler"
                  list={movie.production_companies}
                  color="bg-success"
                />
              </div>

              <div>
                <p>Maliyet: {movie.budget}</p>
                <p>Hasılat: {movie.revenue}</p>
              </div>
            </div>
          
       
      </>
      )}
    </div>
  )
}

export default DetailPage