import { useEffect, useState } from "react";
import Shimmer from "../Shimmer/Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from '../utils/constants'

const RestaurantMenu = () => {

    const [resMenuList, setResMenuList] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchRestaurantMenu()
    }, [])

    const fetchRestaurantMenu = async () => {
        const result = await fetch(MENU_API_URL + resId);
        const finalJson = await result.json();

        setResMenuList(finalJson.data);

    }
    if (resMenuList === null) return <Shimmer />

    const { name, cuisines, costForTwoMessage } = resMenuList?.cards[0]?.card?.card?.info;

    const { itemCards } = resMenuList?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    console.log(itemCards);

    return (
        <div className="menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}-{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name}-{"Rs. "}
                        {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
                    </li>
                ))}</ul>
        </div>
    )
}

export default RestaurantMenu;