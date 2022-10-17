import React from "react";
import './MovieCard.css'
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";
function Movie({movie}) {

  return ( 
    <Link to={`/details/${movie.id}`} >
    <div className="movie-figure">
    <Card style={{ width: '18rem',height:'540px' }}>
    <Card.Img variant="top" src={movie.posterUrl} style={{ width: '18rem',height:'340px' }}/>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
        {movie.description}
      </Card.Text>
    </Card.Body>
    <Card.Text>
        {movie.rate}
      </Card.Text>
  </Card>  
  </div>
  </Link>
   );
}
export default Movie ;