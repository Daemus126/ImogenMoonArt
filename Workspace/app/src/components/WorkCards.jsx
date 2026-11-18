import { Link } from "react-router-dom";

function WorkCards({  id, title, year, collection,  role, summary, techniques, intro, poster, posteralt, isSelected, onToggleSelect }) {


    return (




        
                <>
                <div className="work-card">
             
                      <div className="artpic">
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

<div className="work-card-content">
            <h3 className='work-title'>{title}</h3> 
            
            <p>{summary}</p>
                        {role} · {year} · {collection}


                        {/* One tag for each theme, produced by map(). */}
                        <ul className="workul">
                        {techniques.map((theme) => (
                                <li key={theme}>  {theme} · </li> 
                            ))}

                        </ul>

                        <p>{intro}</p>

  <Link to={`/works/${id}`} aria-label={`Read more about ${title}`}>
                        <button type="button" 
                            className={isSelected ? 'work-Card--Select' : 'work-card-Nselect'}
                            onClick={() => onToggleSelect(id)}>

                            {isSelected ? "Seen" : "See More"}
                        </button>
                        </Link>

</div> 
                


                  
                
            



        </div>


</>

    );

}

export default WorkCards;