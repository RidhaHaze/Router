import { Button } from 'react-bootstrap';
import{ useNavigate, useParams} from 'react-router-dom'



function Details({movies}) {
    const navigate = useNavigate();
    const {id} =useParams();
    const movie=movies.find(movie=>movie.id===Number(id))
    return ( 
        <div>
            <p> {movie.description} </p>
            <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${movie.frameUrl}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />

            <Button variant='secondary' onClick={() => navigate(-1)}>
            Go Back
            </Button>
        </div>
     );
}

export default Details;