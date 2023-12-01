export default function MovieCards({title, thumbnail}) {

    return (
        <div className="card mr-2 transfrom hover:scale-110 transition-transform duration-200 p-5 hover:cursor-pointer">
            <img src={thumbnail} alt={title} className="rounded w-44 h-72" />
            <h2 className="font-bold w-44">{title}</h2>
        </div>
    );
}