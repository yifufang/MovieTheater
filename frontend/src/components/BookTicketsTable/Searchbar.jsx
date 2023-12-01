import React, { useState, useEffect } from "react";
import Schedulebox from "./SearchbarMovieBox";

export default function Searchbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const HandleSearch = () => {
        if (searchQuery.length <= 0 || searchQuery === "") {
            return;
        }
        fetch(`http://localhost:5000/employee/search?query=${searchQuery}`)
            .then((res) => res.json())
            .then((data) => {
                setSearchResults(data);
            })
            .catch((err) => {
                console.log(err);
            })  
        };

    return (
        <div className="flex flex-col w-full">
            <div className="w-full">
                <p className="text-2xl font-bold text-left">Search Movies</p>
                <input
                    className="w-full rounded-l-lg outline-gray-600 outline-1 outline p-4 mr-0 text-gray-800 border-gray-200 bg-white"
                    placeholder="Search by movie name or movie id"
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyUp={HandleSearch}
                />
            </div>
            <div className="flex flex-col flex-grow overflow-auto">
                {searchResults.map((movie) => (
                    <Schedulebox title={movie[1]} id={movie[0]} />
                ))}
            </div>
        </div>
    );
}
