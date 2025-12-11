export default function MovieCard({ movieInfo }) {
    const { title, year_of_release, poster_link, genre } = movieInfo;
    return (
        <div className="flex flex-col border border-slate-100 p-2 w-50 bg-slate-100 h-90 justify-around">
            <img src={poster_link} alt={`Poster of the film ${title}`} className="basis-4/6"/>
            <h4 className="font-bold basis-1/6">{`${title} (${year_of_release})`}</h4>
            <p className="text-sm basis-1/6">{genre.join(' ')}</p>
        </div>
    )
}