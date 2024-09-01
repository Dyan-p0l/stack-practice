import '../styles/movieCard.css';

export const Movies = ({ moviename }) => {

    
    
    return (
        <>
            <div className="container">
                <div className="movie">
                    <div>
                        <p>{moviename.Year}</p>
                    </div>
                    <div>
                        <img src={moviename.Poster !== 'N/A' ? moviename.Poster : 'https://via.placeholder.com/400'} alt={moviename.Title} />
                    </div>
                    <div>
                        <span>{moviename.Type}</span>
                        <h3>{moviename.Title}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}