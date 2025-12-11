import jsonData from './movies.json';
import MovieCard from './MovieCard';

export default function Movies () {
    // console.log(jsonData.rajinikanth_films);
    const rajiniMovies = jsonData.rajinikanth_films;
    const moviesList = rajiniMovies.map((film) => <MovieCard movieInfo={film}/>);
    return (
        <div className="flex flex-col items-center border border-slate-700 p-4 gap-5">
            <h1 className="font-serif text-2xl">Popular Rajinikanth Films</h1>
            <div className="grid grid-cols-4 gap-3 justify-center items-center">
                {moviesList}
            </div>
        </div>
    )
}