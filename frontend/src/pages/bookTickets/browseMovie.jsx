import { useParams } from "react-router-dom";
// for now we import sample data, later we will make api call
import img1 from "../../Statics/movieImages/five_nights_at_freddys.jpg";
import img2 from "../../Statics/movieImages/killers_of_the_flower_moon.jpg";
import img3 from "../../Statics/movieImages/after_death.jpg";
import img4 from "../../Statics/movieImages/freelance.jpg";
import img5 from "../../Statics/movieImages/the_exorcist_believer.jpg";
import img6 from "../../Statics/movieImages/priscilla.jpg";
import img7 from "../../Statics/movieImages/miracle_in_east_texas.jpg";
import img8 from "../../Statics/movieImages/paw_patrol_the_mighty_movie.jpg";
import img9 from "../../Statics/movieImages/saw_x.jpg";
import img10 from "../../Statics/movieImages/the_nun_2.jpg";
import sampleMovies from "../../Statics/movieSample.json";
// for now we will use a map to represent titles with corresponding images, later we will make api call
const images = new Map([
  ["five_nights_at_freddys", img1],
  ["killers_of_the_flower_moon", img2],
  ["after_death", img3],
  ["freelance", img4],
  ["the_exorcist_believer", img5],
  ["priscilla", img6],
  ["miracle_in_east_texas", img7],
  ["paw_patrol_the_mighty_movie", img8],
  ["saw_x", img9],
  ["the_nun_2", img10],
]);

export default function BrowseMovie() {
  let { title } = useParams();
  let duration = null;
  let rating = null;
  let release_year = null;
  let description = null;
  let image = null;

  [...images.keys()].forEach((key) => {
    if (title === key) {
      image = images.get(key);
    }
  });

  for (let i = 0; i < sampleMovies.length; i++) {
    console.log("title: ", title);
    let s_title = sampleMovies[i].title
      .replace(/[^a-zA-Z ]/g, "")
      .toLowerCase()
      .replace(/ /g, "_");
    console.log("s_title: ", s_title);
    if (title === s_title) {
      duration = sampleMovies[i].duration;
      rating = sampleMovies[i].rating;
      release_year = sampleMovies[i].release_year;
      description = sampleMovies[i].description;
    }
  }

  //   convert title to correct text form
  let cTitle = title.split("_");
  for (let i = 0; i < cTitle.length; i++) {
    cTitle[i] = cTitle[i].charAt(0).toUpperCase() + cTitle[i].slice(1);
  }
  cTitle = cTitle.join(" ");

  return (
    <div className="">
      <div className="flex justify-center w-full h-auto bg-gray-500">
        <img className="object-cover" src={image} alt="movie"></img>
        <div className="w-1/2 p-5">
          <h1 className="text-black text-5xl">{cTitle}</h1>
          <p className="w-1/2">{description}</p>
          <div className="flex">
            <p className="text-black font-bold text-sm">
              {duration} | {rating}
            </p>
            <p className="text-black font-bold text-sm">
              Released {release_year}
            </p>
          </div>
          <button className="bg-red-500 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-3xl">
            Get Tickets
          </button>
        </div>
      </div>
    </div>
  );
}
