import MoviesList from './components/MoviesList';
import './App.css';
import {useCallback, useEffect, useState} from "react";
import AddMovie from "./components/AddMovie";

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const fetchMovieHandler = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch('https://swapi.dev/api/films')
            const data = await res.json();
            const transformedMovies = data.results.map((mv, i) =>
                ({
                    id: i,
                    title: mv.title,
                    releaseDate: mv.release_date,
                    openingText: mv.opening_crawl
                })
            );
            setMovies(transformedMovies)
        } catch (e) {
            setError(e.message)
        }
        setLoading(false)
    }, []);

    useEffect(() => {
        (async function () {
            await fetchMovieHandler();
        })();
    }, [fetchMovieHandler])

    const addMovieHandler = async (movie) => {
        try {
            const res = await fetch('https://react-http-7414c-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', {
                method: 'POST',
                body: JSON.stringify(movie)
            })

            const data = await res.json()
            movie.id = data.name;
            setMovies((prev) => [movie, ...prev])
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <>
            <section>
                <AddMovie onAddMovie={addMovieHandler}/>
            </section>
            <section>
                <button onClick={fetchMovieHandler}>Fetch Movies</button>
            </section>
            <section>
                {isLoading && <p>Loading...</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                {!isLoading && !error && <MoviesList movies={movies}/>}
            </section>
        </>
    );
}

export default App;
