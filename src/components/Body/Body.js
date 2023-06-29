import { useEffect, useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import Shimmer from "../Shimmer/Shimmer";
import { Link } from 'react-router-dom'
import { API_URL } from "../utils/constants";
import useGetOnlineStatus from "../utils/useGetOnlineStatus";

const Body = () => {
    //Local State Variable - Super powerful variable
    const [listOfResto, setListOfResto] = useState([]);
    const [filteredResto, setFilteredResto] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const onlineStatus = useGetOnlineStatus();

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

    if (onlineStatus == false) {
        return (
            <h1>Look's like your internet is not working</h1>
        )
    }

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
                        const filteredRestaurants = listOfResto.filter(
                            (list) => list.data.name.toLowerCase().includes(inputValue.toLowerCase()) ?? []
                        );
                        setFilteredResto(filteredRestaurants);
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
                    <Link key={resto.data.id} to={"/restaurants/" + resto.data.id}>
                        <RestaurantCard restoData={resto} />
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Body;