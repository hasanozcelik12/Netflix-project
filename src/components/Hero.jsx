
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Loading from './Loading'
import { baseImgUrl } from '../utils/constant';

const Hero = () => {
const state = useSelector((store) => store.movieReducer);

// dizi uzunluğuna göre rastgele sayı bulma
const i = Math.floor(Math.random() * state.popularMovies.length)
// rastgele bir filme erişme

const movie = state.popularMovies[i]
 console.log(i,movie)
  return (
    <div className='row p-4'>
        { /* api'den cevap bekleniyorsa */}
      { state.isLoading && <Loading />}

      {/* veri geldiyse arayüzü bas */} 
      {!state.isLoading && (
        <>
        <div className = "col-md-6 d-flex align-items-start align-items-center align-items-md-start justify-content-center flex-column mb-3">
         <h1>{movie.title}</h1>
         <p className = 'lead'>{movie.overview}</p>
         <p className='text-warning fw-bold text-center text-md-start'>{movie.vote_average}</p>
         <div className='d-flex gap-3'>
            <button className='btn btn-danger'>Filmi İzle</button>
            <button className='btn btn-info'>Film Detay</button>
           
            </div> 
        
        </div>
        <div className = "col-md-6 d-flex align-items-center justify-content-center ">
            <img className='img-fluid rounded shadow' src={baseImgUrl.concat(movie.backdrop_path)} alt="" />
        </div>
        </>
      )}
    </div>
  )
}

export default Hero