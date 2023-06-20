import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import { API_URL } from "../utils/constants";

const Body = () => {
    //Local State Variable - Super powerful variable
    const [listOfResto, setListOfResto] = useState([]);
    const [filteredResto, setFilteredResto] = useState([]);
    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const result = await fetch(API_URL)
        const finalJson = await result.json();

        //Optional Chaining
        setListOfResto(finalJson?.data?.cards[2]?.data?.data?.cards);
        setFilteredResto(finalJson?.data?.cards[2]?.data?.data?.cards);
    }
    //when the local state variables are updated, react triggers a reconciliation cycle(re-renders the component).
    console.log("body rendered");

    return listOfResto.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className='filter'>
                <div className="search">
                    <input onChange={(e) => {
                        setInputValue(e.target.value)
                    }}
                        value={inputValue}
                        type="text"
                        className="search-box" />
                    <button onClick={() => {
                        setFilteredResto(filteredResto.filter(
                            (list) => list.data.name.toLowerCase().includes(inputValue.toLowerCase()) ?? []
                        ))
                    }}
                    >Search</button>

                </div>
                <button className="filter-btn" onClick={() => {
                    setListOfResto(listOfResto.filter(
                        (list) => list.data.avgRating >= 4
                    ))
                }}>Top Rated Restaurant </button>
            </div>
            <div className='resto-container'>
                {filteredResto?.map(resto => (
                    <RestaurantCard key={resto.data.id} restoData={resto} />
                ))}
            </div>
        </div>
    )
}

export default Body;