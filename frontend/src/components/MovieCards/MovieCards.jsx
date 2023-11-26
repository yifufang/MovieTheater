import react from "react";

export default function MovieCards({movie}) {
    const handleClick = () => {
        window.location.href = `/movie/${movie.href}`;
    }
    return (
        <div className="card mr-2 transfrom hover:scale-110 transition-transform duration-200 p-5 hover:cursor-pointer" onClick={handleClick}>
            <img src={movie.thumbnail} alt={movie.title} className="rounded w-44 h-72" />
            <h2 className="font-bold w-44">{movie.title}</h2>
        </div>
    );
}