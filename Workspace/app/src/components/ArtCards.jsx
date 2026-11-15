import { Link } from "react-router-dom";

function ArtCards({  id, title,   poster, posteralt,   }) {


    return (




        
                <>
                <div className="art-card">
             
                      <div className="currentartpic">
                    <Link to={`/works/${id}`} aria-label={`Read more about ${title}`}>
                        {/* No artwork, so the card has to cope. */}
                        {poster ? (
                            <img className="film-card__poster" src={poster} alt={posteralt} />
                        ) : (
                            <div className="film-card__poster film-card__poster--missing">
                               
                            </div>
                        )}
                     </Link>
                    </div>

<div className="art-card-content">
      <Link to={`/works/${id}`} aria-label={`Read more about ${title}`}>
            <h3 className='art-title'>{title}</h3> 
            </Link>
         
   
</div> 
                

        </div>


</>

    );

}

export default ArtCards;