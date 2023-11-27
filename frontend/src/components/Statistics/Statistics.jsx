import { useState } from "react";

export default function Statistics() {
    const [stats, setStats] = useState({
        movies: 2700,
        subscribers: 2000,
        Daily_popularity: 500,
        nationalRank: 1
    });
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div className="w-full sm:p-4 px-4 mb-6">
            <h1 className="title-font font-medium text-xl mb-2 text-gray-900">
              XXX Movie Theater Reputation
            </h1>
            <div className="leading-relaxed">
              Best Movie Theater, ranked #1 in the world by the New York Times
            </div>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">{stats.movies}</h2>
            <p className="leading-relaxed">Movies</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">{stats.subscribers}</h2>
            <p className="leading-relaxed">Subscribers</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">{stats.Daily_popularity}</h2>
            <p className="leading-relaxed">Daily Popularity</p>
          </div>
          <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2 className="title-font font-medium text-3xl text-gray-900">{stats.nationalRank}</h2>
            <p className="leading-relaxed">National Rank</p>
          </div>
        </div>
        <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img
            className="object-cover object-center w-full h-full"
            src="https://images.foxtv.com/static.fox7austin.com/www.fox7austin.com/content/uploads/2020/06/932/524/GettyImages-1205162040.jpg?ve=1&tl=1"
            alt="stats"
          />
        </div>
      </div>
    </section>
  );
}
