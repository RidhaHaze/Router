import './MovieList.css'
import MovieCard from './MovieCard';




function MovieList({movies,searchTitle,searchRate}) {
 
  return (

   <div className='movie-items'>
{
movies.filter(movie => movie.title.toUpperCase().includes(searchTitle.toUpperCase()) && movie.rate>=searchRate)
.map((movie,index) => (
<MovieCard key={index} {...movie} movie={movie}/>
))}

  </div> 
 
  );
}
export default MovieList