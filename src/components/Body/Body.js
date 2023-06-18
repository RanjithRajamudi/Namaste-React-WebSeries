import { useState } from "react";
import RestaurantCard from "../RestaurantCard/RestaurantCard";
import restaurantList from "../utils/mockData";



const Body = () => {
    //Local State Variable - Super powerful variable
    let [listOfResto, setListOfResto] = useState(restaurantList);

    return (
        <div className="body">
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    setListOfResto(restaurantList.filter(
                        (list) => list.data.avgRating >= 4
                    ))
                    setCount(listOfResto.length);
                }}>Top Rated Restaurant</button>
            </div>
            <div className='resto-container'>

                {listOfResto?.map(resto => (
                    <RestaurantCard key={resto.data.id} restoData={resto} />
                ))}
            </div>
        </div>
    )
}

export default Body;