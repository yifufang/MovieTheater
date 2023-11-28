import react from "react";

export default function MovieCards({movie}) {
    return (
        <div className="card mr-2 transfrom hover:scale-110 transition-transform duration-200 p-5 hover:cursor-pointer">
            <img src={movie.thumbnail} alt={movie.title} className="rounded w-44 h-72" />
            <h2 className="font-bold w-44">{movie.title}</h2>
        </div>
    );
}